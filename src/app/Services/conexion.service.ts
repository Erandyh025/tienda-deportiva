import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const Url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor(private _http: HttpClient) { }

  getProductos(){
    return this._http.get(`${Url}productos`);
   }
}
