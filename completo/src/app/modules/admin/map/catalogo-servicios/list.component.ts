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
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { FuseCardComponent } from '@fuse/components/card';
import { FormSidebarComponent } from './form-sidebar/form-sidebar.component';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { filter, Subject, takeUntil } from 'rxjs';


@Component({
    selector: 'academy-list',
    templateUrl: './list.component.html',
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
        FormSidebarComponent
    ],
})
export class MapServiceComponent implements OnInit, OnDestroy {
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
        private router: Router,
        private route: ActivatedRoute
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    navFormNext():void{
        /*this.pageIndex = this.pages.indexOf(this.currentScreen);
        if(this.pageIndex < this.pages.length-1){
            this.pageIndex += 1
        }
        this.router.navigate([this.pages[this.pageIndex]], { relativeTo: this.route });*/
        if(this.pageIndex < 4){
            this.pageIndex += 1
        }
        this.router.navigate([`portal/formulario-urs/p${this.pageIndex}`]);
    }
    navFormPrev():void{
        /*this.pageIndex = this.pages.indexOf(this.currentScreen);
        if(this.pageIndex > 0 ){
            this.pageIndex -= 1
        }
        this.router.navigate([this.pages[this.pageIndex]], { relativeTo: this.route });*/
        if(this.pageIndex > 0 ){
            this.pageIndex -= 1
        }
        this.router.navigate([`portal/formulario-urs/p${this.pageIndex}`]);
    }
    navInit(){
        this.router.navigate(['../land'], { relativeTo: this.route });
    }

    changeBtn(){
        if(this.pageIndex === 4){
            return true
        }
    }
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
          
            this.router.events.pipe(
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
}
