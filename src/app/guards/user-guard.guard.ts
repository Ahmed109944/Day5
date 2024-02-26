import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const userGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isUserLogged) {
    return true;
  } else {
    alert('please login first');

    router.navigate(['/join/login']);
    return false;
  }
};