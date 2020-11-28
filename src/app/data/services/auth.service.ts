import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AuthResponseV1 } from '../schemas/response/auth-response-v1';
import { UserRequestV1 } from '../schemas/request/user-request-v1';
import { ResponseBase } from '../schemas/base/response-base';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authResponse: AuthResponseV1;
  public get authResponse(): AuthResponseV1 {
    this._authResponse = JSON.parse(
      localStorage.getItem('authResponse'),
    ) as AuthResponseV1;
    return this._authResponse;
  }
  public set authResponse(value: AuthResponseV1) {
    localStorage.setItem('authResponse', JSON.stringify(value));
    this._authResponse = value;
  }

  constructor(private http: HttpClient, private router: Router) {}

  login(request: UserRequestV1): Observable<ResponseBase<AuthResponseV1>> {
    return this.http.post<ResponseBase<AuthResponseV1>>(
      `${environment.url}/Auth/Login`,
      request,
    );
  }

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl('/auth/login');
  }

  validateRole(roles: Array<number>): boolean {
    if (roles.includes(this.authResponse?.user?.roleId)) {
      return true;
    }
    return false;
  }
}
