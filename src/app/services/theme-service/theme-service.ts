import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private isDarkMode = false;

  init() {
    const saved = localStorage.getItem('theme');
    this.isDarkMode = saved === 'dark';
    document.documentElement.classList.toggle('dark', this.isDarkMode);
  }

  toggle() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark', this.isDarkMode);
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  isDark(): boolean {
    return this.isDarkMode;
  }
}
