import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { OperativoComponent } from 'app/modules/admin/dashboards/operativos/operativos.component';
import { OperativoService } from 'app/modules/admin/dashboards/operativos/operativos.service';
import { OperativoListComponent } from 'app/modules/admin/dashboards/operativos/operativos/list/operativos.component';


export default [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'us',
    },
    {
        path: '',
        component: OperativoComponent,
        children: [
            {
                path: '',
                component: OperativoListComponent,
                resolve: {
                    products: () => inject(OperativoService).getProducts(),

                },
                
                
            },
        ],
    },
] as Routes;
