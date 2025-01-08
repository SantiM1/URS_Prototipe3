import { Routes } from '@angular/router';
import { InfoRSDBComponent } from './info-rs-db.component';
import { InfoHogarComponent } from './info-hogar/info-hogar.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { MiembrosHogarComponent } from './info-hogar/miembros-hogar/miembros-hogar.component';


export default [
    {
        path: '',
        component: InfoRSDBComponent,
        children: [

            {
                path: 'info-hogar',
                component: InfoHogarComponent,
            },
            {
                path: 'benefits',
                component: BenefitsComponent,
            },
            {
                path:'miembros',
                component: MiembrosHogarComponent
            },
            

        ]
    },
] as Routes;