import { Routes } from '@angular/router';
import { LoginPage } from './pages/login/login-page/login-page';
import { HomePage } from './pages/home/home-page/home-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'dashboard',
    component: LoginPage,
  },
];
