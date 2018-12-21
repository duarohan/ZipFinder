import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import {ZipToAreaService} from '../zip-to-area.service';

@Component({
  selector: 'app-zip-to-area',
  templateUrl: './zip-to-area.component.html',
  styleUrls: ['./zip-to-area.component.css'],
  providers:[ZipToAreaService]
})
export class ZipToAreaComponent implements OnInit {
  
  constructor(private zipToAreaService:ZipToAreaService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form)
      form.reset()
    this.zipToAreaService.selectedZip = {zip:null,area:""}    
  }

  OnSubmit(form:NgForm){
    this.zipToAreaService.getArea(form.value).subscribe(data=> this.zipToAreaService.selectedZip =data);
    // this.zipToAreaService.getArea(form.value).subscribe((res)=>
    // {this.zipToAreaService.selectedZip.area = res as string;})
  }
}