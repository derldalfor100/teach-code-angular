import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { ThemeModule } from 'src/services/theme';
import { DEFAULT_THEME_NAME, THEMES_LIST } from 'src/services/constants/consts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    ThemeModule.forRoot({
      themes: THEMES_LIST,
      active: DEFAULT_THEME_NAME
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
