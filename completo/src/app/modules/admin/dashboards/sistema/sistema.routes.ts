import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { SistemaComponent } from 'app/modules/admin/dashboards/sistema/sistema.component';
import { AplicacionesListComponent } from 'app/modules/admin/dashboards/sistema/aplicaciones/list/aplicaciones.component';
import { InstitucionesListComponent } from './instituciones/list/instituciones.component';
import { ServiciosWebListComponent } from './serviciosweb/list/servicios-web.component';
import { ServiciosWebService } from './servicios-web.service';
import { InstitucionesService } from './instituciones.service';
import { AplicacionesService } from './aplicaciones.service';
import { tipoDocumentoListComponent } from './tipoDocumento/list/tipo-documento.component';
import { TipoDocumentoService } from './tipoDocumento.service';



export default [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'us',
    },
    {
        path: '',
        component: SistemaComponent,
        children: [
            {
                path: '',
                component: SistemaComponent
                
                
            },
            {
                path: 'aplicaciones',
                component: AplicacionesListComponent,
                resolve: {
                    products: () => inject(AplicacionesService).getProducts(),

                },
            },
            {
                path: 'instituciones',
                component: InstitucionesListComponent,
                resolve: {
                    products: () => inject(InstitucionesService).getProducts(),

                },
            },
            {
                path: 'servicios-web',
                component: ServiciosWebListComponent,
                resolve: {
                    products: () => inject(ServiciosWebService).getProducts(),

                },
            },
            {
                path: 'tipo-documento',
                component: tipoDocumentoListComponent,
                resolve: {
                    products: () => inject(TipoDocumentoService).getProducts(),

                },
            },
            
        ],
    },
] as Routes;
