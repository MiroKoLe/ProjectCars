import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  apiUrl = 'https://localhost:44391/api/Cars'

  constructor(private http: HttpClient) { }

  get(): Observable<Car[]>{
    return this.http.get<Car[]>(this.apiUrl)
  }

  getById(id): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  add(data): Observable<any>{
    return this.http.post(this.apiUrl, data)
  }

  update(car){
    return this.http.put(this.apiUrl, car);
  }

  delete(id: string): Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
