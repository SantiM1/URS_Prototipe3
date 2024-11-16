import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { InventoryComponent } from 'app/modules/admin/dashboards/usuarios/usuarios.component';
import { InventoryService } from 'app/modules/admin/dashboards/usuarios/usuarios.service';
import { InventoryListComponent } from 'app/modules/admin/dashboards/usuarios/usuarios/list/usuarios.component';
import { UsuariosCrearComponent } from './usuarios-crear/usuarios-crear.component';

export default [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'us',
    },
    {
        path: '',
        component: InventoryComponent,
        children: [
            {
                path: '',
                component: InventoryListComponent,
                resolve: {
                    products: () => inject(InventoryService).getProducts(),
                },
                
                
            },
            {
                path: 'crear',
                component: UsuariosCrearComponent
            }
        ],
    },
] as Routes;
