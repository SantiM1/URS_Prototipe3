import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { Map } from 'maplibre-gl';

@Component({
  selector: 'app-table-dialog',
  templateUrl: './location-hogar.component.html',
  standalone:true,
  imports:[ MatDialogModule,
    CommonModule

  ]
})
export class LocationHogarComponent implements  AfterViewInit {
 
  @ViewChild('map')
  private mapContainer: ElementRef<HTMLElement>;


  private map: Map;


  ngAfterViewInit() {
    
    const myAPIKey = '8c31c50c46834e5aaa1a7d1246c6e9d7'; 
    const mapStyle = 'https://maps.geoapify.com/v1/styles/osm-bright/style.json';

    const initialState = {
      lng: -80,
      lat: 0,
      zoom: 12
    };

    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
    });
  }
}