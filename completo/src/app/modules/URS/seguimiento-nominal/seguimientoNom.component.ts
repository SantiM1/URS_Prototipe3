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


@Component({
    selector: 'seguimiento-place',
    templateUrl: './seguimientoNom.component.html',
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
    ]
})

export class ActivitiesPlace {

    constructor(
        router: Router,
        private _fuseNavigationService: FuseNavigationService,

    ) { }
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