import { Component } from '@angular/core';
import { ThemeToggle } from '../../../components/theme-toggle/theme-toggle';
import { BoxComponent } from '../../../components/box-component/box-component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputBoxComponent } from '../../../components/input-box-component/input-box-component';

@Component({
  selector: 'app-login-page',
  imports: [ThemeToggle, BoxComponent, ReactiveFormsModule, InputBoxComponent],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      test: ['', Validators.required],
    });
  }

  ngOnInit() {}
}
