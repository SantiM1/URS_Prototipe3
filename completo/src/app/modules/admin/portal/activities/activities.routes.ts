import { Routes } from '@angular/router';
import { InfoRSDBComponent } from './info-rs-db/info-rs-db.component';
import { ActivitiesPlace } from './activities.component';
import { InfoRSComponent } from './info-rs/info-rs.component';


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
                loadChildren: () => import('app/modules/admin/portal/activities/info-rs-db/info-rs-db.routes')
            },

        ]
    },
] as Routes;
