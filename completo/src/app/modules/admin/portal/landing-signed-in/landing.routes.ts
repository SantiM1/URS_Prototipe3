import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { LandingComponent } from 'app/modules/admin/portal/landing-signed-in/landing.component';
import { LandingService } from 'app/modules/admin/portal/landing-signed-in/landing.service';

export default [
    {
        path: '',
        component: LandingComponent,
        resolve: {
            data: () => inject(LandingService).getData(),
        },
        
    },
] as Routes;
