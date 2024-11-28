import { Routes } from '@angular/router';
import { MapContainerComponent } from './mapContainer/map-container.component ';
import { MapComponent } from './map.component';
import { MapPortalComponent } from './mapPortal/map-portal/map-portal.component';
import { MapServiceComponent } from './catalogos-servicios/list.component';
import { MapDatosComponent } from './catalogo-datos/list.component';
import { MapDetailsComponent } from './catalogo-datos/datos-page/details.component';
import { MapAppsComponent } from './geo-apps/list.component';
import { DescargasComponent } from './descargas/descargas.component';






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
            },
            {
                path: 'catalogo-datos',
                component: MapDatosComponent,
            },
            {
                path: 'detalle',
                component: MapDetailsComponent,
            },
            {
                path: 'geo-apps',
                component: MapAppsComponent,
            },
            {
                path: 'descargas',
                component: DescargasComponent,
            }
        
        ]
    },
    
] as Routes;
