import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';
import {City} from './city';
import {Country} from './country';
import {State} from './state';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CityToZipService {
  countries : Country[];
  cities : City[];
  states : State[];
  constructor(private http:HttpClient) { }

  //retriving Country
  getCountry(){
    return this.http.get('http://localhost:3000/cityToZip/loadCountry');
  }
  //retriving State Based on Country
  getState(country){
    return this.http.get(`http://localhost:3000/cityToZip/${country}/getState`);
  }
  //retriving City Based on State(Country)
  getCity(state){
    return this.http.get(`http://localhost:3000/cityToZip/${state}/getCity`);
  }
  //retriving Zip Based on City(State(Country))
  getZip(city){
    return this.http.get(`http://localhost:3000/cityToZip/${city}/getZip`);
  }
}
