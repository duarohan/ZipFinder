import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {City} from './city';
import {Country} from './country';
import {State} from './state';
import {ZipCode} from './zipcode';

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
  zipcode : ZipCode;
  constructor(private http:HttpClient) { }

  //retriving Country
  getCountryService():Observable<Country[]>{
    return this.http.get<Country[]>('http://localhost:3000/cityToZip/loadCountry');
  }
  //retriving State Based on Country
  getStateService(country):Observable<State[]>{
    return this.http.get<State[]>(`http://localhost:3000/cityToZip/${country}/loadState`);
  }
  //retriving City Based on State(Country)
  getCityService(state,country):Observable<City[]>{
    return this.http.get<City[]>(`http://localhost:3000/cityToZip/${country}/${state}/loadCity`);
  }
  //retriving Zip Based on City(State(Country))
  getZipService(city,state,country):Observable<ZipCode>{
    return this.http.get<ZipCode>(`http://localhost:3000/cityToZip/${country}/${state}/${city}/loadZip`);
  }
}
