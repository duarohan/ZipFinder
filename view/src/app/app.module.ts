import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { CityToZipComponent } from './city-to-zip/city-to-zip.component';
import { ZipToAreaComponent } from './zip-to-area/zip-to-area.component';

@NgModule({
  declarations: [
    AppComponent,
    CityToZipComponent,
    ZipToAreaComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
