import { Routes } from '@angular/router';
import { Register } from './pages/auth/register/register';
import { LandingPage } from './pages/landing-page/landing-page';

export const routes: Routes = [
    {path:'register', component:Register},
    {path:"", component:LandingPage}
];
