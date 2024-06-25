import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

//(mapboxgl as any).accessToken = 'pk.eyJ1IjoiY21jZXJvbiIsImEiOiJjbHhzNWlidm8wc3Q3Mmpvb2lyczZrMzl3In0.iY-tnDg6gWoqri5H6JQsJg';

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css'
})
export class FullScreenPageComponent implements AfterViewInit {

  @ViewChild('map')
  public divMap?: ElementRef;

  ngAfterViewInit(): void {

    if( !this.divMap ) throw 'El elemento HTML no fue encontrado';

    const map = new Map({
      //accessToken: 'pk.eyJ1IjoiY21jZXJvbiIsImEiOiJjbHhzNWlidm8wc3Q3Mmpvb2lyczZrMzl3In0.iY-tnDg6gWoqri5H6JQsJg',
      container: this.divMap.nativeElement, // container ID 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-89.21, 13.73], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }


}
