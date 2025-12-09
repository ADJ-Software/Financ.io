import { Component } from '@angular/core';
import { ThemeToggle } from '../../../components/theme-toggle/theme-toggle';

@Component({
  selector: 'app-test-page',
  imports: [ThemeToggle],
  templateUrl: './test-page.html',
  styleUrl: './test-page.scss',
})
export class TestPage {

}
