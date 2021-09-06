import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor, HttpErrorResponse 
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  return next.handle(request)
  .pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMsg: '';
      if(error.status === 500){
        errorMsg = error.error; 
      }
      return throwError(errorMsg);
    })
  )
}}