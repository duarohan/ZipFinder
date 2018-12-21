import { Component, OnInit } from '@angular/core';

import {ZipToAreaService} from '../zip-to-area.service';

@Component({
  selector: 'app-zip-to-area',
  templateUrl: './zip-to-area.component.html',
  styleUrls: ['./zip-to-area.component.css'],
  providers:[ZipToAreaService]
})
export class ZipToAreaComponent implements OnInit {
  areaVal;  
  constructor(private zipToAreaService:ZipToAreaService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(){
    this.zipToAreaService.selectedZip = {zip:null,area:""}    
  }

  getArea(zip){
    this.zipToAreaService.getAreaService(zip).subscribe(data=> this.areaVal = data); 
  }
}