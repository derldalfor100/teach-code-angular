import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/services/theme';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  toggle() {

    const active = this.themeService.getActiveTheme();

    const { name } = active;

    if(name === 'light') {

      this.themeService.setTheme('dark');
    } else {

      this.themeService.setTheme('light');
    }
  }
}
