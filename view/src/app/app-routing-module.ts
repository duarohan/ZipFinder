import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZipToAreaComponent } from './zip-to-area/zip-to-area.component';
import { CityToZipComponent } from './city-to-zip/city-to-zip.component';
import { MainPageComponent } from './main-page/main-page.component';
  
const routes: Routes = [
    {path:'cityToZip',component:CityToZipComponent},
    {path:'zipToArea',component:ZipToAreaComponent},
    {path:'',component:MainPageComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CityToZipComponent,ZipToAreaComponent,MainPageComponent]