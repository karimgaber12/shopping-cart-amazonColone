import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class APIService {
  private _urlJson = "assets/DATA/Products.json"

  constructor(private http:HttpClient) { }

  getJson():Observable<any>{
    return this.http.get(this._urlJson);
  }
}
