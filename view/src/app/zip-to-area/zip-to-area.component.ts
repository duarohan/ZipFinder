import { Component, OnInit } from '@angular/core';

import {ZipToAreaService} from '../zip-to-area.service';

@Component({
  selector: 'app-zip-to-area',
  templateUrl: './zip-to-area.component.html',
  styleUrls: ['./zip-to-area.component.css'],
  providers:[ZipToAreaService]
})
export class ZipToAreaComponent implements OnInit {  
  constructor(private zipToAreaService:ZipToAreaService) { }
  areaVal;
  zip;
  ngOnInit() {
    this.reset();
  }

  reset(){
    this.zip = null;
    this.areaVal =null;    
  }

  getArea(zip){
    this.zipToAreaService.getAreaService(zip).subscribe(data=> this.areaVal = data); 
  }
}