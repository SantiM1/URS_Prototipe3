import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { DispositivosComponent } from 'app/modules/admin/seguridad/dispositivos/dispositivos.component';
import { DispositivosService } from 'app/modules/admin/seguridad/dispositivos/dispositivos.service';
import { RegistroListComponent } from 'app/modules/admin/seguridad/dispositivos/registro/list/registro.component';
import { ReporteHistorialListComponent } from './reporte-historial/list/reporte-historial.component';



export default [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'us',
    },
    {
        path: '',
        component: DispositivosComponent,
        children: [
            {
                path: '',
                component: DispositivosComponent
                
                
            },
            {
                path: 'registro',
                component: RegistroListComponent,
                resolve: {
                    products: () => inject(DispositivosService).getProducts(),

                },
            },
            {
                path: 'reporte-historial',
                component: ReporteHistorialListComponent,
                resolve: {
                    products: () => inject(DispositivosService).getProducts(),

                },
            },
            
        ],
    },
] as Routes;
