import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { OperativoComponent } from 'app/modules/URS/seguridad/operativos/operativos.component';
import { OperativoService } from 'app/modules/URS/seguridad/operativos/operativos.service';
import { OperativoListComponent } from 'app/modules/URS/seguridad/operativos/operativos/list/operativos.component';
import { FaseListComponent } from './fase/list/fase.component';
import { FaseService } from './fase.service';


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
                component: OperativoComponent
                
                
            },
            {
                path: 'operativos',
                component: OperativoListComponent,
                resolve: {
                    products: () => inject(OperativoService).getProducts(),

                },
            },
            {
                path: 'fase',
                component: FaseListComponent,
                resolve: {
                    products: () => inject(FaseService).getProducts(),

                },
            }
        ],
    },
] as Routes;
