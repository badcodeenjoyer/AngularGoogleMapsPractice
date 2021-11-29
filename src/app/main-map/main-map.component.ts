import { Component, OnInit } from '@angular/core';
import  {MapService} from "../services/map.service";
import  {Marker} from "../interfaces/marker";

@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.css']
})

export class MainMapComponent{
  zoom: number = 5;
  constructor(private service:MapService) { }
  markers:Marker[] =this.getMarkers()
  queryString:string=''
  getMarkers(){
   return this.service.getMarkers();
  }
  clickedMarker(id:number){
    let wp = document.getElementById(''+id)
    if (wp!==null)
    if (wp.style.backgroundColor!=='yellow'){
      wp.style.backgroundColor='yellow'
    }
    else {
      wp.style.backgroundColor='white'
    }
  }

}
