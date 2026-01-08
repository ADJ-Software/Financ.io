import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { KeycloakService } from 'keycloak-angular';

export const AuthGuard: CanActivateFn = async (route, state) => {
  const keycloak = inject(KeycloakService);
  const platformId = inject(PLATFORM_ID);

  if (!isPlatformBrowser(platformId)) {
    return false;
  }

  const loggedIn = await keycloak.isLoggedIn();

  if (!loggedIn) {
    await keycloak.login({
      redirectUri: window.location.origin + state.url,
    });
    return false;
  }

  return true;
};
