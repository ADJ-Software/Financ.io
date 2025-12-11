import { Component } from '@angular/core';
import { ThemeToggle } from '../../../components/theme-toggle/theme-toggle';
import { BoxComponent } from '../../../components/box-component/box-component';

@Component({
  selector: 'app-test-page',
  imports: [ThemeToggle,BoxComponent],
  templateUrl: './test-page.html',
  styleUrl: './test-page.scss',
})
export class TestPage {

}
