import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseBase } from '../schemas/base/response-base';
import { DashboardRequestV1 } from '../schemas/request/dashboard-request-v1';
import { DashboardResponseV1 } from '../schemas/response/dashboard-response-v1';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getByFilters(
    request: DashboardRequestV1,
  ): Observable<ResponseBase<DashboardResponseV1>> {
    return this.http.post<ResponseBase<DashboardResponseV1>>(
      `${environment.url}/Dashboard/GetByFilters`,
      request,
    );
  }
}
