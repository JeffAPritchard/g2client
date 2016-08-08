import * as ROUTER from "@angular/router";    // Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, provideRouter

export const APP_ROUTES = [
  ROUTER.provideRouter([
    { path: 'foo', redirectTo: '/foobar' }
  ])
];
