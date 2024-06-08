import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const canActivateGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = new Router();
  if (authService.checkAuthUser()) { 
    return true; //đk thỏa mãn thì được truy cập
  } else {
    router.navigate(['login']);
    return false; //đk false thì không được truy cập
  }  
};
