import { InjectionToken } from '@angular/core';

export const THEMES = new InjectionToken('THEMES');

export const ACTIVE_THEME = new InjectionToken('ACTIVE_THEME');

export interface ITheme {

    name: string;

    properties: any;
}

export interface IThemeOptions {

    themes: ITheme[];

    active: string;
}