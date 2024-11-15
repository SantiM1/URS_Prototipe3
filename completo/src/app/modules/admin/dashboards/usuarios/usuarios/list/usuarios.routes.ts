
import { Routes } from '@angular/router';
import { InventoryComponent } from 'app/modules/admin/dashboards/usuarios/usuarios.component';
import { UsuariosCrearComponent } from '../../usuarios-crear/usuarios-crear.component';


export default [
    
    {
        path: '',
        component: InventoryComponent,
        children: [
            {
                path: 'crear',
                component: UsuariosCrearComponent
            }
        ],
    },
] as Routes;
