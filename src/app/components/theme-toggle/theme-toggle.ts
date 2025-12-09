import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme-service';

@Component({
  selector: 'app-theme-toggle',
  imports: [],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss',
})
export class ThemeToggle {

  isDark!: boolean 

  constructor(private service: ThemeService){}

  ngOnInit(){
    this.isDark = this.service.theme  == "dark" ? true : false
  }

  changeSiteTheme() {
    this.service.toggleTheme()
    this.isDark = !this.isDark
  }
}
