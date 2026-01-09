import { 
  provideAppInitializer, 
  inject, 
  PLATFORM_ID, 
  EnvironmentProviders, 
  makeEnvironmentProviders, 
  KeyValueDiffers
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Keycloak from 'keycloak-js';
import { KEYCLOAK } from './keycloak.token';

// Configuration
const keycloakConfig = {
  url: 'http://localhost:8081',
  realm: 'financio',
  clientId: 'financio-frontend'
};

export const provideKeycloakNative = (): EnvironmentProviders => {
  return makeEnvironmentProviders([
    // 1. Create the Singleton Instance
    {
      provide: KEYCLOAK,
      useFactory:()=>{ return new Keycloak(keycloakConfig)}
    },
    // 2. Modern Initialization (Angular 19+)
    provideAppInitializer(() => {
      const keycloak = inject(KEYCLOAK);
      const platformId = inject(PLATFORM_ID);
      console.log(keycloak)
      console.log(platformId)
      // --- SSR Guard ---
      // If running in Node.js, stop immediately to av``oid`` "window is not defined"
      if (!isPlatformBrowser(platformId)) {
        console.log("defered")
        return Promise.resolve();
      }
      console.log("passed")
      // --- Initialization ---
      return keycloak.init({
        onLoad: 'check-sso',
        // Now safe to use window because we passed the browser check above
        checkLoginIframe: false,
        silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
        enableLogging: true,
      });
    })
  ]);
};