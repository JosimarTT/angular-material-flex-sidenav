import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { UserService } from 'src/app/data/services/user.service';
import { AuthService } from 'src/app/data/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private _location: Location,
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const roles = next.data.roles as Array<number>;

    if (!this.authService?.authResponse?.accessToken) {
      this.authService.logOut();
      return false;
    }
    if (this.authService.validateRole(roles)) {
      return true;
    }
    this.authService.logOut();
    return false;
  }
}
