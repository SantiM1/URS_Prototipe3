import { CdkScrollable } from '@angular/cdk/scrolling';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';


import { MatPseudoCheckboxModule } from '@angular/material/core';

import { MatChip } from '@angular/material/chips';


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
        MatChip
    ],
})
export class MapContainerComponent {
 
    constructor(private _fuseMediaWatcherService: FuseMediaWatcherService,
        private _router: Router,
        private route: ActivatedRoute
    ) {}

    signOut(): void {
        this._router.navigate(['/sign-out']);
    }
    register(): void {
        this._router.navigate(['/portal/autoregistro']);
    }
}
