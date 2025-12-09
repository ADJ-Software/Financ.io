import { isPlatformBrowser } from '@angular/common';
import {
  DOCUMENT,
  Inject,
  inject,
  Injectable,
  PLATFORM_ID,
  Renderer2,
  RendererFactory2,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private currentTheme: 'light' | 'dark' = 'dark';

  constructor(
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.initThemeService();
  }

  initThemeService() {
    if (isPlatformBrowser(this.platformId)) {
      let userTheme = localStorage.getItem('user-theme') as 'light' | 'dark';
      if (userTheme) {
        console.log('dark');
        this.currentTheme = userTheme;
        this.setTheme(this.currentTheme);
      } else {
        let prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.setTheme(prefersDark ? 'dark' : 'light');
      }
    }
  }

  toggleTheme() {
    console.log(this.currentTheme);
    this.setTheme(this.currentTheme == 'dark' ? 'light' : 'dark');
  }

  private setTheme(themeToSet: 'dark' | 'light') {
    this.currentTheme = themeToSet;
    if (isPlatformBrowser(this.platformId)) {
      if (themeToSet == 'light') {
        this.renderer.setAttribute(this.document.documentElement, 'data-theme', 'light');
        localStorage.setItem('user-theme', 'light');
      } else {
        console.log('dark');
        this.renderer.removeAttribute(this.document.documentElement, 'data-theme');
        localStorage.setItem('user-theme', 'dark');
      }
    }
  }
  get theme() {
    return this.currentTheme;
  }
}
