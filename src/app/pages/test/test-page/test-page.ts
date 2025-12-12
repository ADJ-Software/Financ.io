import { Component } from '@angular/core';
import { ThemeToggle } from '../../../components/theme-toggle/theme-toggle';
import { BoxComponent } from '../../../components/box-component/box-component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputBoxComponent } from '../../../components/input-box-component/input-box-component';

@Component({
  selector: 'app-test-page',
  imports: [ThemeToggle, BoxComponent, ReactiveFormsModule, InputBoxComponent],
  templateUrl: './test-page.html',
  styleUrl: './test-page.scss',
})
export class TestPage {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      test: ['', Validators.required],
    });
  }

  ngOnInit() {}
}
