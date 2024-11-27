import { Routes } from '@angular/router';
import { MapContainerComponent } from './mapContainer/map-container.component ';
import { MapComponent } from './map.component';

export default [
    {
        path: '',
        component: MapContainerComponent,
        children: [
            {
                path: 'geovisor',
                component: MapComponent
            }
        ]
    },
    
] as Routes;
