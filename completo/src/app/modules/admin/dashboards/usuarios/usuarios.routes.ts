import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { UsuarioComponent } from 'app/modules/admin/dashboards/usuarios/usuarios.component';
import { UsuarioService } from 'app/modules/admin/dashboards/usuarios/usuarios.service';
import { UsuarioListComponent } from 'app/modules/admin/dashboards/usuarios/usuarios/list/usuarios.component';
import { UsuariosCrearComponent } from './usuarios-crear/usuarios-crear.component';

export default [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'us',
    },
    {
        path: '',
        component: UsuarioComponent,
        children: [
            {
                path: '',
                component: UsuarioListComponent,
                resolve: {
                    products: () => inject(UsuarioService).getProducts(),
                },
                
                
            },
            {
                path: 'crear',
                component: UsuariosCrearComponent
            }
        ],
    },
] as Routes;
