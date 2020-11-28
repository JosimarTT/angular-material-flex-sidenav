import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseBase } from '../schemas/base/response-base';
import { ScheduleRequestV1 } from '../schemas/request/schedule-request-v1';
import { ScheduleResponseV1 } from '../schemas/response/schedule-response-v1';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  constructor(private http: HttpClient) {}

  insert(
    request: ScheduleRequestV1,
  ): Observable<ResponseBase<ScheduleResponseV1>> {
    return this.http.post<ResponseBase<ScheduleResponseV1>>(
      `${environment.url}/Schedule/Insert`,
      request,
    );
  }

  update(
    request: ScheduleRequestV1,
  ): Observable<ResponseBase<ScheduleResponseV1>> {
    return this.http.put<ResponseBase<ScheduleResponseV1>>(
      `${environment.url}/Schedule/Update`,
      request,
    );
  }
}
