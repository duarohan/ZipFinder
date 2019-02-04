import { Component, OnInit } from '@angular/core';

  import {CityToZipService} from '../city-to-zip.service';


@Component({
  selector: 'app-city-to-zip',
  templateUrl: './city-to-zip.component.html',
  styleUrls: ['./city-to-zip.component.css'],
  providers :[CityToZipService]
})
export class CityToZipComponent implements OnInit {
  countryCollection = []
  stateCollection = []
  cityCollection = []
  zipCodeVal;
  HideStateDropDown;
  HideCityDropDown;
  HideZipLabel;

  constructor(private cityToZipService:CityToZipService) { }
  
  ngOnInit() {
    this.cityToZipService.getCountryService().subscribe(data=> this.countryCollection = data);
    this.HideStateDropDown = true;
    this.HideCityDropDown = true;
    this.HideZipLabel = true;
  }

  getState(country){
    this.cityToZipService.getStateService(country).subscribe(data=> this.stateCollection = data);
    this.HideStateDropDown = false;
    this.HideCityDropDown = true;
    this.HideZipLabel = true;
  }

  getCity(state,country){
    this.cityToZipService.getCityService(state,country).subscribe(data=> this.cityCollection = data);
    this.HideCityDropDown = false;
    this.HideZipLabel = true;
  } 

  getZip(city,state,country){
    this.cityToZipService.getZipService(city,state,country).subscribe(data=> this.zipCodeVal = data);
    this.HideZipLabel = false;
  } 

}
