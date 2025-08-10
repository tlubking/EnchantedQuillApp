import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from './services/theme-service/theme-service';
import { Promptform } from './components/prompt-form/prompt-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, Promptform],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit{
  protected readonly title = signal('enchanted-quill-frontend');
  protected readonly themeService = inject(ThemeService);

  ngOnInit() {
    this.themeService.init();
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }
}
