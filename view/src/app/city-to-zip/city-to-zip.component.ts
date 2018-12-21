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

  ngOnInit() {
  }

}
