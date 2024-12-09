import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '@services/token.service';

export const RedirectGuard: CanActivateFn = () => {
  const isValidToken = inject(TokenService).isValidRefreshToken();
  const router = inject(Router);

  if (isValidToken) {
    router.navigate(['/app']);
  }
  return true;
};
