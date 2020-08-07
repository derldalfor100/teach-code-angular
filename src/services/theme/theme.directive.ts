import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ThemeService } from './theme.service';
import { ITheme } from './symbols';

@Directive({
  selector: '[theme]'
})
export class ThemeDirective implements OnInit, OnDestroy {

  private _destroy$ = new Subject();

  constructor(
    private _elementRef: ElementRef,
    private _themeService: ThemeService
  ) { }

  ngOnInit(): void {
    
    const active = this._themeService.getActiveTheme();

    if (active) {
      this.updateTheme(active);
    }

    this._themeService.themeChange
      .pipe(takeUntil(this._destroy$))
      .subscribe((theme: ITheme) => this.updateTheme(theme));
  }

  updateTheme(theme: ITheme) {

    // project properties onto the element
    for (const key in theme.properties) {
      this._elementRef.nativeElement.style.setProperty(key, theme.properties[key]);
    }

    // remove old theme
    for (const themes of this._themeService.themes) {
      const { name } = themes;
      this._elementRef.nativeElement.classList.remove(`${name}-theme`);
    }

    // alias element with theme name
    this._elementRef.nativeElement.classList.add(`${theme.name}-theme`);
  }

  ngOnDestroy(): void {
    
    this._destroy$.next();
    this._destroy$.complete();
  }
}
