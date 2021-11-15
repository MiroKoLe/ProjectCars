import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor, HttpErrorResponse, HttpResponse 
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { LoadingService } from '../loading.service';


@Injectable()
export class LoadingSpinnerComponent implements HttpInterceptor{
    private totalRequests = 0; 

    constructor(private _loading: LoadingService){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this._loading.setLoading(true, request.url);
        return next.handle(request)
          .pipe(catchError((err) => {
            this._loading.setLoading(false, request.url);
            return err;
          }))
          .pipe(map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
            if (evt instanceof HttpResponse) {
              this._loading.setLoading(false, request.url);
            }
            return evt;
          }));
      }
}