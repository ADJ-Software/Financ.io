import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { provideKeycloak } from 'keycloak-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),

    provideKeycloak({
      config: {
        url: 'http://localhost:8080',
        realm: 'financio',
        clientId: 'Financio',
      },
      initOptions: {
        onLoad: 'check-sso',
        checkLoginIframe: false,
      },
    }),
  ],
};
