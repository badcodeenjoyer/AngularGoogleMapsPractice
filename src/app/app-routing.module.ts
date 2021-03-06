import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorComponent} from "./error/error.component";
import  {MainMapComponent} from "./main-map/main-map.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'map',component:MainMapComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: 'error'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
