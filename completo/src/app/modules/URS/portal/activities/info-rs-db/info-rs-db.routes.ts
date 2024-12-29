import { Routes } from '@angular/router';
import { InfoRSDBComponent } from './info-rs-db.component';
import { InfoHogarComponent } from './info-hogar/info-hogar.component';
import { BenefitsComponent } from './benefits/benefits.component';


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

        ]
    },
] as Routes;