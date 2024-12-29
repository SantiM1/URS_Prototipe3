import { Routes } from '@angular/router';
import { FormularioComponent } from 'app/modules/URS/portal/forms/formulario/formulario.component';
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
                path: 'p0',
                component: DeclaracionComponent,
                              
            },
            {
                path: 'p1',
                component: FormularioURSComponent,
                              
            },
            {
                path: 'p2',
                component: FormularioP2Component,
                              
            },
            {
                path: 'p3',
                component: FormularioP3Component,
                              
            },
            {
                path: 'p4',
                component: FinalizarComponent,
                              
            },
        ]
    },
    
] as Routes;
