import { CdkScrollable } from '@angular/cdk/scrolling';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';


import { MatPseudoCheckboxModule } from '@angular/material/core';

import { MatChip } from '@angular/material/chips';
import { SearchComponent } from 'app/layout/common/search/search.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { FuseFullscreenComponent } from '@fuse/components/fullscreen';
import { LanguagesComponent } from 'app/layout/common/languages/languages.component';

import { ShortcutsComponent } from 'app/layout/common/shortcuts/shortcuts.component';
import { UserComponent } from 'app/layout/common/user/user.component';
import { MessagesComponent } from '../../portal-servicios/landing-signed-in/landing-messages/messages.component';
import { NotificationsComponent } from '../../portal-servicios/landing-signed-in/landing-notifications/notifications.component';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'map-container',
    templateUrl: './map-container.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        MatSidenavModule,
        MatIconModule,
        RouterLink,
        MatButtonModule,
        CdkScrollable,
        MatPseudoCheckboxModule,
        RouterOutlet,
        MatChip,
        SearchComponent,
        MatTabsModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        LanguagesComponent,
                CommonModule,
                ShortcutsComponent,
                MessagesComponent,
                NotificationsComponent,
                UserComponent,
                FuseFullscreenComponent,
    ],
})
export class MapContainerComponent {

    constructor(
        private _fuseNavigationService: FuseNavigationService,
        private _fuseMediaWatcherService: FuseMediaWatcherService,
        private _router: Router,
        private route: ActivatedRoute
    ) {}
    toggleNavigation(name: string): void {
            // Get the navigation
            const navigation =
                this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(
                    name
                );
            
            navigation.opened = true
        }
    home(): void {
        this._router.navigate(['/portal/maps/portal-geografico']).then(() => {
            // Scroll to top after navigation
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });; ;
        this.toggleNavigation('mainNavigation')
    }
    signOut(): void {
        this._router.navigate(['/sign-out']).then(() => {
            // Scroll to top after navigation
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });; ;
    }
    register(): void {
        this._router.navigate(['/portal/autoregistro']).then(() => {
            // Scroll to top after navigation
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });; ;
    }
}
