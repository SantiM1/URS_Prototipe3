import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { InventoryComponent } from 'app/modules/admin/dashboards/operativos/operativos.component';
import { InventoryService } from 'app/modules/admin/dashboards/operativos/operativos.service';
import { InventoryListComponent } from 'app/modules/admin/dashboards/operativos/operativos/list/operativos.component';


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
