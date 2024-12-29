import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { LandingComponent } from 'app/modules/admin/portal/landing-signed-in/landing/landing.component';
import { LandingService } from 'app/modules/admin/portal/landing-signed-in/landing.service';
import { LandingSupportComponent } from './landing-soporte/soporte.component';
import { LandingFaqsComponent } from './landing-faqs/faqs.component';
import { LandingPlace } from './landing-container.component';
import { ServiciosSupportComponent } from './landing-servicios/servicios.component';

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
