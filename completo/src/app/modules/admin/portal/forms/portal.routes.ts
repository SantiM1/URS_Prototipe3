import { Routes } from '@angular/router';
import { FormularioComponent } from 'app/modules/admin/portal/forms/formulario/formulario.component';
import { FormularioURSComponent } from './formulario-datos-generales/formulario-urs.component';
import { DeclaracionComponent } from './declaracion/declaracion.component';
import { FormularioP2Component } from './formulario-materiales-vivienda/formulario-p2.component';
import { FinalizarComponent } from './finalizar/finalizar.component';
import { FormularioP3Component } from './formulario-cuartos/formulario-p3.component';

export default [
    {
        path: '',
        component: FormularioComponent,
        children: [
            {
                path: 'declaracion',
                component: DeclaracionComponent,
                              
            },
            {
                path: 'datos-generales',
                component: FormularioURSComponent,
                              
            },
            {
                path: 'materiales-vivienda',
                component: FormularioP2Component,
                              
            },
            {
                path: 'cuartos-hogar',
                component: FormularioP3Component,
                              
            },
            {
                path: 'finalizar',
                component: FinalizarComponent,
                              
            },
        ]
    },
    
] as Routes;
