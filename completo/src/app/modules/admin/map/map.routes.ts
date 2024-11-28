import { Routes } from '@angular/router';
import { MapContainerComponent } from './mapContainer/map-container.component ';
import { MapComponent } from './map.component';
import { MapPortalComponent } from './mapPortal/map-portal/map-portal.component';
import { MapServiceComponent } from './catalogo-servicios/list.component';





export default [
    {
        path: '',
        component: MapContainerComponent,
        children: [
            {
                path: 'geovisor',
                component: MapComponent
            },
            {
                path: 'portal',
                component: MapPortalComponent
            },
            {
                path: 'catalogo-servicios',
                component: MapServiceComponent
            }
        ]
    },
    
] as Routes;
