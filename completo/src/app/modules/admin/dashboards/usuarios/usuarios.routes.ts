import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { InventoryComponent } from 'app/modules/admin/dashboards/usuarios/usuarios.component';
import { InventoryService } from 'app/modules/admin/dashboards/usuarios/usuarios.service';
import { InventoryListComponent } from 'app/modules/admin/dashboards/usuarios/usuarios/list/usuarios.component';

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
                    brands: () => inject(InventoryService).getBrands(),
                    categories: () => inject(InventoryService).getCategories(),
                    products: () => inject(InventoryService).getProducts(),
                    tags: () => inject(InventoryService).getTags(),
                    vendors: () => inject(InventoryService).getVendors(),
                },
            },
        ],
    },
] as Routes;
