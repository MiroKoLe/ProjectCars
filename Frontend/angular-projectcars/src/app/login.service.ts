import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl = 'http://localhost:5000/Api/Auth/Login'

  constructor(private http: HttpClient) { }

  post(data: any): Observable<any>{
    return this.http.post(this.apiUrl, data, {headers: new HttpHeaders({"ContentType": "application/json"})})  }
}
