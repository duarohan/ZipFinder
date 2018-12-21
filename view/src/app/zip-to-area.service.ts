import { Injectable } from '@angular/core';
import {ZipCode} from './zipcode';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZipToAreaService {
  selectedZip : ZipCode;  

  constructor(private http:HttpClient) { }

  // getArea(zip){
  //   return this.http.get(`http://localhost:3000/zipToArea/${zip}`);
  // }
  getArea(zip):Observable<ZipCode>
  {
    return this.http.get<ZipCode>(`http://localhost:3000/zipToArea/${zip}`);
  }
}
