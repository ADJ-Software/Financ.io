import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoxComponent } from './components/box-component/box-component';
import { ThemeToggle } from './components/theme-toggle/theme-toggle';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('financ.io');
}
