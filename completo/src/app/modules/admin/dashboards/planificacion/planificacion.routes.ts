import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { PlanificacionComponent } from 'app/modules/admin/dashboards/planificacion/planificacion.component';
import { PlanificacionService } from 'app/modules/admin/dashboards/planificacion/planificacion.service';
import { PlanificacionListComponent } from 'app/modules/admin/dashboards/planificacion/planificacion/list/planificacion.component';




export default [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'us',
    },
    {
        path: '',
        component: PlanificacionComponent,
        children: [
            {
                path: '',
                component: PlanificacionListComponent,
                resolve: {
                    products: () => inject(PlanificacionService).getProducts(),
                },
                
                
            },
        ],
    },
] as Routes;
