import { Component, inject } from '@angular/core';
import { ThemeToggle } from '../../../components/theme-toggle/theme-toggle';
import { BoxComponent } from '../../../components/box-component/box-component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputBoxComponent } from '../../../components/input-box-component/input-box-component';
import Keycloak from 'keycloak-js';
import { KEYCLOAK } from '../../auth/keycloak.token';

@Component({
  selector: 'app-home-page',
  imports: [ThemeToggle, BoxComponent, ReactiveFormsModule, InputBoxComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  keycloak:Keycloak;
  constructor() {
      this.keycloak = inject(KEYCLOAK);
  }

  async login() {
    console.log('Tentando logar em:', this.keycloak.createLoginUrl());

    await this.keycloak.login({
      redirectUri: window.location.origin
    });
  }
}
