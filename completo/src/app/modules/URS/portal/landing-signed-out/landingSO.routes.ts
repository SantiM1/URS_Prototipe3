import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { LandingSOComponent } from 'app/modules/URS/portal/landing-signed-out/landingSO.component';
import { LandingSOService } from 'app/modules/URS/portal/landing-signed-out/landingSO.service';

export default [
    {
        path: '',
        component: LandingSOComponent,
        resolve: {
            data: () => inject(LandingSOService).getData(),
        },
        
    },
] as Routes;
