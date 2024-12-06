import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../features/user/user-auth.service';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';

export const userGuardsGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  // console.log({ route, state });

  const userService = inject(UserAuthService);
  const router = inject(Router);
  // const isLoggedIn = true; 

  if(userService.user){
    return true;
  }

  router.navigate(['/login']);
  // if (!isLoggedIn) {
  //   router.navigate(['/login']);
  // }

  return false;
};
