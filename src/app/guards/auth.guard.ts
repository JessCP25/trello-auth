import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '@services/token.service';

export const AuthGuard: CanActivateFn = () => {
  const idValidToken = inject(TokenService).isValidToken();
  const router = inject(Router);

  if (!idValidToken) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
