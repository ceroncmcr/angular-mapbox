import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'
})
export class MiniMapComponent implements AfterViewInit{

  @ViewChild('map')
  public divMap?: ElementRef;

  @Input()
  public lngLat?: [number, number];

  ngAfterViewInit(): void {
    if( !this.divMap?.nativeElement ) throw 'El elemento HTML no fue encontrado';
    if( !this.lngLat ) throw 'LngLat no existe';

    const map = new Map({
      //accessToken: 'pk.eyJ1IjoiY21jZXJvbiIsImEiOiJjbHhzNWlidm8wc3Q3Mmpvb2lyczZrMzl3In0.iY-tnDg6gWoqri5H6JQsJg',
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive: false
    });

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const marker = new Marker({
      color: color,
      draggable: true,
    })
    .setLngLat(this.lngLat)
    .addTo(map);

  }
}
