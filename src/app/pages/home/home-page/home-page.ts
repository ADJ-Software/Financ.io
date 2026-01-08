import { Component } from '@angular/core';
import { ThemeToggle } from '../../../components/theme-toggle/theme-toggle';
import { BoxComponent } from '../../../components/box-component/box-component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputBoxComponent } from '../../../components/input-box-component/input-box-component';
import { RouterOutlet } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-home-page',
  imports: [ThemeToggle, BoxComponent, ReactiveFormsModule, InputBoxComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  constructor(private keycloak: KeycloakService) {
    console.log('Logado?', this.keycloak.isLoggedIn());
  }
}
