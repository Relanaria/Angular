import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const userGuardsGuard: CanActivateFn = (route, state) => {
  console.log({ route, state });

  const router = inject(Router);
  const isLoggedIn = true; // will come from AuthService
  
  if (!isLoggedIn) {
    router.navigate(['/login']);
  }

  return isLoggedIn;
};
