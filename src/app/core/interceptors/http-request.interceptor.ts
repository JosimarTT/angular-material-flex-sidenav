import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/data/services/auth.service';
import { SwalBasic } from 'src/app/helpers/swal-helper';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestInterceptor implements HttpInterceptor {
  private totalRequest = 0;

  constructor(
    private authService: AuthService,
    private spinnerService: SpinnerService,
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    // console.log('hit http interceptor');
    this.totalRequest++;

    const timer = setTimeout(() => {
      this.spinnerService.show();
    }, 1000);
    let requestClone = request;
    const { authResponse } = this.authService;
    if (authResponse?.accessToken && authResponse?.tokenType) {
      requestClone = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authResponse.accessToken}`,
        },
      });
    }

    return next.handle(requestClone).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          console.log('this is client side error');
          errorMsg = `Error: ${error.error.message}`;
        } else {
          console.log('this is server side error');
          errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        }
        if (error.status === 401) {
          SwalBasic(
            2,
            'Your session has expired',
            'You will be redirected to the Login window',
          ).then(() => this.authService.logOut());
        } else {
          SwalBasic(
            2,
            'An unexpected error occurred',
            'Concact your administrator',
          );
        }
        console.log(errorMsg);
        return throwError(errorMsg);
      }),
      finalize(() => {
        this.totalRequest--;
        if (this.totalRequest === 0) {
          clearTimeout(timer);
          this.spinnerService.hide();
        }
      }),
    );
  }
}
