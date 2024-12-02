import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../features/user/user-auth.service';


export const userGuardsGuard: CanActivateFn = (route, state) => {
  console.log({ route, state });

  const userService = inject(UserAuthService);
  const router = inject(Router);
  // const isLoggedIn = true; 

  if(!userService.user){
    router.navigate(['/login']);
  }
  
  // if (!isLoggedIn) {
  //   router.navigate(['/login']);
  // }

  return isLoggedIn;
};
