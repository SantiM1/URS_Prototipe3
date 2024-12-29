import { Component } from "@angular/core";
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from "@angular/router";

import { FuseFullscreenComponent } from "@fuse/components/fullscreen";
import { FuseNavigationService, FuseVerticalNavigationComponent } from "@fuse/components/navigation";
import { SearchComponent } from "app/layout/common/search/search.component";
import { UserComponent } from 'app/layout/common/user/user.component';

import { MatIconModule } from "@angular/material/icon";
import { InfoRCComponent } from "../info-rc/info-rc.component";
import { NotificationsComponent } from "app/layout/common/notifications/notifications.component";
import { MessagesComponent } from "../../landing-signed-in/landing-messages/messages.component";
import { QueryComponent } from "../query/query.component";



@Component({
    selector: 'activities-place',
    templateUrl: './empty.component.html',
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

export class ActivitiesEmptyPlace {

    constructor(
        private router: Router,
        private activeRoute: ActivatedRoute,
        private _fuseNavigationService: FuseNavigationService,

    ) { }

    navTo(name: string):void {
        this.router.navigate([name],{relativeTo: this.activeRoute}).then(() => {
            // Scroll to top after navigation
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
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