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
        MatInputModule 
    ],
})
export class MapContainerComponent {
 
    constructor(private _fuseMediaWatcherService: FuseMediaWatcherService,
        private _router: Router,
        private route: ActivatedRoute
    ) {}
    home(): void {
        this._router.navigate(['/apps/maps/portal-geografico']);
    }
    signOut(): void {
        this._router.navigate(['/sign-out']);
    }
    register(): void {
        this._router.navigate(['/portal/autoregistro']);
    }
}
