import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { LandingComponent } from 'app/modules/URS/portal-servicios/landing-signed-in/landing/landing.component';
import { LandingService } from 'app/modules/URS/portal-servicios/landing-signed-in/landing.service';
import { LandingSupportComponent } from './landing-soporte/soporte.component';
import { LandingFaqsComponent } from './landing-faqs/faqs.component';
import { LandingPlace } from './landing-container.component';
import { ServiciosSupportComponent } from './landing-servicios/servicios.component';
import { CertificateComponent } from './landing-certificate/certificate-end/certificate.component';
import { CertificateFormComponent } from './landing-certificate/certificate-form/certificate-form.component';
import { ServiciosComponent } from './otros-servicios/servicios.component';

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
            },
            {
                path:'otros-servicios',
                component: ServiciosComponent
            },
            {
                path:'certificado',
                component: CertificateComponent
            },
            {
                path:'certificado-form',
                component: CertificateFormComponent
            }

        ]
        
    },
    
] as Routes;
