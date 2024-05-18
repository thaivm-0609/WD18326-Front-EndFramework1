import { CanActivateFn } from '@angular/router';

export const canActivateGuardGuard: CanActivateFn = (route, state) => {
  let test = '1231';
  if (test == '123') { 
    return true; //đk thỏa mãn thì được truy cập
  }
  
  return false; //đk false thì không được truy cập
};
