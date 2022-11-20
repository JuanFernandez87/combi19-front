import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../models/Register';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  URL = environment.url + "users/";

  constructor(private httpClient: HttpClient) { }

  public save(Register: Register): Observable<any> {
    console.log('Contenido registro', Register)
    return this.httpClient.post<Register>(this.URL + 'user/', Register);
  }
}