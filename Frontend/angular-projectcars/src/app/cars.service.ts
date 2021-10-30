import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  apiUrl = 'http://localhost:5000/api/Cars'

  constructor(private http: HttpClient) { }

  get(): Observable<Car[]>{
    return this.http.get<Car[]>(this.apiUrl, {headers: new HttpHeaders({"ContentType": "application/jsonn"})})
  }

  getById(id): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`)
    .pipe(catchError(this.errorHandler))
  }

  add(data): Observable<any>{
    return this.http.post(this.apiUrl, data)
    .pipe(catchError(this.errorHandler))
  }

  update(car){
    return this.http.put(this.apiUrl, car)
    .pipe(catchError(this.errorHandler))
  }

  delete(id: string): Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');
  }
}
