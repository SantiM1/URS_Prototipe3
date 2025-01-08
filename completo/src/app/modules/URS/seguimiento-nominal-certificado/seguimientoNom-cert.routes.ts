import { Routes } from '@angular/router';
import { ActivitiesPlace } from './seguimientoNom-cert.component';

import { ActivitiesEmptyPlace } from './empty/empty.component';
import { NamesComponent } from './empty/names/names.component';
import { InfoRSComponent } from '../seguimiento-nominal/info-rs/info-rs.component';




export default [
    {
        path: '',
        component: ActivitiesPlace,
        children: [

            {
                path: '',
                component: InfoRSComponent,
            },
            {
                path: 'db',
                loadChildren: () => import('app/modules/URS/seguimiento-nominal/info-rs-db/info-rs-db.routes')
            },
            


        ]
    },{
        path: 'ep',
        component: ActivitiesEmptyPlace,
        children: [
        
                    {
                        path: 'nombres',
                        component: NamesComponent,
                    },
        
                ]
    },
    
] as Routes;
