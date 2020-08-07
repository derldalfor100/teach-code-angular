import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeDirective } from './theme.directive';
import { ThemeService } from './theme.service';
import { IThemeOptions, THEMES, ACTIVE_THEME } from './symbols';



@NgModule({
  imports: [CommonModule],
  providers: [ThemeService],
  declarations: [ThemeDirective],
  exports: [ThemeDirective]
})
export class ThemeModule { 

  static forRoot(options: IThemeOptions): ModuleWithProviders {

    return {
      ngModule: ThemeModule,
      providers: [
        {
          provide: THEMES,
          useValue: options.themes
        },
        {
          provide: ACTIVE_THEME,
          useValue: options.active
        }
      ]
    }
  }
}
