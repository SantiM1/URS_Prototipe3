import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatTreeModule, MatTreeNode} from '@angular/material/tree'; 
import { Map } from 'maplibre-gl';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { TreeComponent } from './tree/tree.component';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-my-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  imports:[MatTabsModule,
    MatChipsModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatTreeModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatRadioModule,
    TreeComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
 
})

export class MapComponent implements OnInit, AfterViewInit {
  constructor(
    private _activatedRoute: ActivatedRoute,

    private _router: Router,

) {}
  navDatos(){
    this._router.navigate(['../catalogo-datos'], {relativeTo: this._activatedRoute,});   
  }
  navServicios(){
    this._router.navigate(['../catalogo-servicios'], {relativeTo: this._activatedRoute,});   
  }
  navApps(){
    this._router.navigate(['../geo-apps'], {relativeTo: this._activatedRoute,});   
  }

  @ViewChild('map')
  private mapContainer: ElementRef<HTMLElement>;


  private map: Map;

  ngOnInit() {
  }

  ngAfterViewInit() {
    
    const myAPIKey = '8c31c50c46834e5aaa1a7d1246c6e9d7'; 
    const mapStyle = 'https://maps.geoapify.com/v1/styles/osm-bright/style.json';

    const initialState = {
      lng: -80,
      lat: -2,
      zoom: 6
    };

    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
    });
  }
  
}