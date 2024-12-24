import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { LandingComponent } from 'app/modules/admin/portal/landing-signed-in/landing-main/landing.component';
import { LandingService } from 'app/modules/admin/portal/landing-signed-in/landing.service';
import { LandingSupportComponent } from './support-landing/support.component';
import { LandingFaqsComponent } from './faqs-landing/faqs.component';
import { LandingPlace } from './landing-place.component';
import { ServiciosSupportComponent } from './support-servicios/support-servicios.component';

export default [
    {
        path: '',
        component: LandingPlace,
        resolve: {
            data: () => inject(LandingService).getData(),
        },
        children: [
            {
                path:'',
                component: LandingComponent
            },
            {
                path:'soporte',
                component: LandingSupportComponent
            },
            {
                path:'faqs',
                component: LandingFaqsComponent
            },
            {
                path:'servicios',
                component: ServiciosSupportComponent
            }

        ]
        
    },
    
] as Routes;
