import { Component, OnInit } from '@angular/core';

import {CityToZipService} from '../city-to-zip.service';


@Component({
  selector: 'app-city-to-zip',
  templateUrl: './city-to-zip.component.html',
  styleUrls: ['./city-to-zip.component.css'],
  providers :[CityToZipService]
})
export class CityToZipComponent implements OnInit {


  constructor(private cityToZipService:CityToZipService) { }
  countryCollection = []
  stateCollection = []
  cityCollection = []
  zipCodeVal;
  ngOnInit() {
    this.cityToZipService.getCountryService().subscribe(data=> this.countryCollection = data);
  }

  getState(country){
    this.cityToZipService.getStateService(country).subscribe(data=> this.stateCollection = data);
  }

  getCity(state,country){
    this.cityToZipService.getCityService(state,country).subscribe(data=> this.cityCollection = data);
  } 

  getZip(city,state,country){
    this.cityToZipService.getZipService(city,state,country).subscribe(data=> this.zipCodeVal = data);
  } 

}
