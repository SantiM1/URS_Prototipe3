import { CdkScrollable } from '@angular/cdk/scrolling';
import { I18nPluralPipe, NgClass, PercentPipe } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
    MatSlideToggleModule,
} from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import {  ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { FuseCardComponent } from '@fuse/components/card';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { filter, Subject, takeUntil } from 'rxjs';
import { DatosSidebarComponent } from './datos-sidebar/datos-sidebar.component';


@Component({
    selector: 'datos-list',
    templateUrl: './details.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        CdkScrollable,
        MatFormFieldModule,
        MatSelectModule,
        MatOptionModule,
        MatIconModule,
        MatInputModule,
        MatSlideToggleModule,
        NgClass,
        MatTooltipModule,
        MatProgressBarModule,
        MatButtonModule,
        RouterLink,
        FuseCardComponent,
        MatTooltipModule,
        MatSidenavModule,
        DatosSidebarComponent
    ],
})
export class MapDetailsComponent {
    drawerMode: 'over' | 'side' = 'side';
    drawerOpened: boolean = true;
    drawerClosed: boolean = false;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    @Input() currentScreen: string = 'declaracion';
    //private pages: string[] = ['declaracion', 'datos-generales', 'materiales-vivienda','cuartos-hogar', 'finalizar'];
    private pageIndex: number = 0;
    /**
     * Constructor
     */
    constructor(private _fuseMediaWatcherService: FuseMediaWatcherService,
        private _activatedRoute: ActivatedRoute,
    
        private _router: Router,
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit(): void {
        // Subscribe to media changes
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({ matchingAliases }) => {
                // Set the drawerMode and drawerOpened
                if (matchingAliases.includes('lg')) {
                    this.drawerMode = 'side';
                    this.drawerOpened = true;
                } else {
                    this.drawerMode = 'over';
                    this.drawerOpened = false;
                }
            });
          
            this._router.events.pipe(
                filter(event => event instanceof NavigationEnd)  // Filter for NavigationEnd events
              ).subscribe((event: NavigationEnd) => {
                 // Get the current URL
                this.pageIndex = Number(event.urlAfterRedirects.slice(-1));
                //console.log('Current URL:', this.pageIndex);
              });
                // Get the current URL using the Router service
                
        
    }
    

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
    navPage(){
        this._router.navigate(['../page'], {relativeTo: this._activatedRoute,});   
     }
}