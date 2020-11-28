import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserRequestV1 } from '../schemas/request/user-request-v1';
import { ResponseBase } from '../schemas/base/response-base';
import { PagedResult } from '../schemas/base/paged-result';
import { UserResponseV1 } from '../schemas/response/user-response-v1';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getByFiltersPaginated(
    request: UserRequestV1,
  ): Observable<ResponseBase<PagedResult<UserResponseV1>>> {
    return this.http.post<ResponseBase<PagedResult<UserResponseV1>>>(
      `${environment.url}/User/GetByFiltersPaginated`,
      request,
    );
  }

  getByFilters(
    request: UserRequestV1,
  ): Observable<ResponseBase<UserResponseV1>> {
    return this.http.post<ResponseBase<UserResponseV1>>(
      `${environment.url}/User/GetByFilters`,
      request,
    );
  }

  getById(request: number): Observable<ResponseBase<UserResponseV1>> {
    return this.http.get<ResponseBase<UserResponseV1>>(
      `${environment.url}/User/GetById/${request}`,
    );
  }

  insert(request: UserRequestV1): Observable<ResponseBase<UserResponseV1>> {
    return this.http.post<ResponseBase<UserResponseV1>>(
      `${environment.url}/User/Insert`,
      request,
    );
  }

  resetPassword(
    request: UserRequestV1,
  ): Observable<ResponseBase<UserResponseV1>> {
    return this.http.post<ResponseBase<UserResponseV1>>(
      `${environment.url}/User/ResetPassword`,
      request,
    );
  }

  enabled(id: number): Observable<ResponseBase<UserResponseV1>> {
    return this.http.put<ResponseBase<UserResponseV1>>(
      `${environment.url}/User/Enabled`,
      id,
    );
  }
}
