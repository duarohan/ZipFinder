import { Injectable } from '@angular/core';
import {ZipCode} from './zipcode';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ZipToAreaService {
  selectedZip : ZipCode;  
  
  constructor(private http:HttpClient) { }

  getAreaService(zip):Observable<ZipCode>
  {
    return this.http.get<ZipCode>(`http://localhost:3000/zipToArea/${zip}`);
  }
}
