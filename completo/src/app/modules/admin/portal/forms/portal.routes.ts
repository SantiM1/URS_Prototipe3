import { Routes } from '@angular/router';
import { FormularioComponent } from 'app/modules/admin/portal/forms/formulario/formulario.component';
import { FormularioURSComponent } from './formulario-urs/formulario-urs.component';
import { DeclaracionComponent } from './declaracion/declaracion.component';

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
        ]
    },
    
] as Routes;
