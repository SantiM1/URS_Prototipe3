import { Component } from "@angular/core";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { InfoRCComponent } from "./info-rc/info-rc.component";
import { FuseFullscreenComponent } from "@fuse/components/fullscreen";
import { FuseNavigationService, FuseVerticalNavigationComponent } from "@fuse/components/navigation";
import { SearchComponent } from "app/layout/common/search/search.component";
import { UserComponent } from 'app/layout/common/user/user.component';

import { MatIconModule } from "@angular/material/icon";
import { QueryComponent } from "./query/query.component";
import { MessagesComponent } from "../portal-servicios/landing-signed-in/landing-messages/messages.component";
import { NotificationsComponent } from "../portal-servicios/landing-signed-in/landing-notifications/notifications.component";
import { FuseCardComponent } from '@fuse/components/card';
import { MatButtonModule } from '@angular/material/button';
import { NgClass } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ViewEncapsulation,
    CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';

@Component({
    selector: 'seguimiento-place',
    templateUrl: './seguimientoNom.component.html',
    styleUrl: 'simple.css',
    standalone: true,
    imports: [
        RouterOutlet,
        InfoRCComponent,
        UserComponent,
        NotificationsComponent,
        MessagesComponent,
        SearchComponent,
        FuseFullscreenComponent,
        MatIconModule,
        QueryComponent,
        FuseCardComponent,
        MatButtonModule,
        NgClass,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class ActivitiesPlace {

    constructor(
        router: Router,
        private _fuseNavigationService: FuseNavigationService,

    ) { }

    navTo(name: string){
    }

    toggleNavigation(name: string): void {
        // Get the navigation
        const navigation =
            this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(
                name
            );

        if (navigation) {
            // Toggle the opened status
            navigation.toggle();
        }
    }
}
