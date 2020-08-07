import { Injectable, EventEmitter, Inject } from '@angular/core';
import { ITheme, THEMES, ACTIVE_THEME } from './symbols';

@Injectable()
export class ThemeService {

  themeChange = new EventEmitter<ITheme>();

  constructor(
    @Inject(THEMES) public themes: ITheme[],
    @Inject(ACTIVE_THEME) public theme: string
  ) {
  }

  getTheme(name: string): ITheme {

    const theme = this.themes.find(t => t.name === name);

    if (!theme) {

      console.error(`Theme not found: '${name}'`);

      return null;
    }

    return theme;
  }

  getActiveTheme() {

    return this.getTheme(this.theme);
  }

  getProperty(propName: string) {

    return this.getActiveTheme()?.properties[propName];
  }

  setTheme(name: string) {

    if(this.theme === name) {

      return;
    }

    this.theme = name;

    this.themeChange.emit( this.getActiveTheme());
  }

  registerTheme(theme: ITheme) {

    this.themes.push(theme);
  }

  updateTheme(name: string, properties: { [key: string]: string }) {

    const theme = this.getTheme(name);

    if(!theme) {

      return;
    }

    theme.properties = {
      ...properties,
      ...theme.properties
    };

    if (name === this.theme) {

      this.themeChange.emit(theme);
    }
  }
}
