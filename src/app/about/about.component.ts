import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/services/theme';
import { DEFAULT_THEME_NAME } from 'src/services/constants/consts';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  themeName: string = DEFAULT_THEME_NAME;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  toggle() {

    const active = this.themeService.getActiveTheme();

    const { name } = active;

    if(name === 'light') {

      this.themeService.setTheme('dark');

      this.themeName = 'dark';
    } else {

      this.themeService.setTheme('light');

      this.themeName = 'light';
    }
  }
}
