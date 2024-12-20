import { Routes } from '@angular/router';
import { MapComponent } from './map.component';
import { MapPortalComponent } from './mapPortal/map-portal/map-portal.component';
import { MapServiceComponent } from './catalogos-servicios/list.component';
import { MapDatosComponent } from './catalogo-datos/list.component';
import { MapDetailsComponent } from './catalogo-datos/datos-page/details.component';
import { MapAppsComponent } from './geo-apps/list.component';
import { DescargasComponent } from './descargas/descargas.component';
import { MapContainerComponent } from './mapContainer/map-container.component';
import { MapPageComponent } from './catalogo-datos/datos-page/mapPage/mapPage.component';
import { PdfViewerComponent } from './descargas/normativa/pdf.component';
import { ManualesComponent } from './descargas/manuales/manuales.component';
import { BaseDatosComponent } from './descargas/baseDeDatos/baseDatos.component';






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
                path: 'portal-geografico',
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
                path: 'page',
                component: MapPageComponent,
            },
            {
                path: 'geo-apps',
                component: MapAppsComponent,
            },
            {
                path: 'descargas',
                component: DescargasComponent,
            },
            {
                path: 'pdf',
                component: PdfViewerComponent,
            },
            {
                path: 'manuales',
                component: ManualesComponent,
            },
            {
                path: 'base',
                component: BaseDatosComponent,
            },
        
        ]
    },
    
] as Routes;
