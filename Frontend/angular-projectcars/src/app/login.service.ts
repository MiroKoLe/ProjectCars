import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl = 'https://localhost:44391/Api/Auth/Login'

  constructor(private http: HttpClient) { }

  post(data): Observable<any>{
    return this.http.post(this.apiUrl, data)
  }
}
