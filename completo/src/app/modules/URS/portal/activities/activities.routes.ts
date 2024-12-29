import { Routes } from '@angular/router';
import { InfoRSDBComponent } from './info-rs-db/info-rs-db.component';
import { ActivitiesPlace } from './activities.component';
import { InfoRSComponent } from './info-rs/info-rs.component';
import { ActivitiesEmptyPlace } from './empty-act/empty.component';
import { NamesComponent } from './empty-act/names/names.component';


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
                loadChildren: () => import('app/modules/URS/portal/activities/info-rs-db/info-rs-db.routes')
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
