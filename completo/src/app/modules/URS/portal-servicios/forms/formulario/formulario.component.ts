import { CdkScrollable } from '@angular/cdk/scrolling';
import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { FormSidebarComponent } from './form-sidebar/form-sidebar.component';
import { filter, Subject, takeUntil } from 'rxjs';
import { FormularioURSComponent } from '../formulario-datos-generales/formulario-urs.component';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { DeclaracionComponent } from '../declaracion/declaracion.component';
import { MatChip } from '@angular/material/chips';
import { InfoSidebarComponent } from './info-sidebar/info-sidebar.component';
import { FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';

@Component({
    selector: 'formulario',
    templateUrl: './formulario.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        MatSidenavModule,
        FormSidebarComponent,
        InfoSidebarComponent,
        MatIconModule,
        RouterLink,
        MatButtonModule,
        CdkScrollable,
        FormularioURSComponent,
        MatPseudoCheckboxModule,
        DeclaracionComponent,
        RouterOutlet,
        MatChip
    ],
})
export class FormularioComponent
    implements OnInit, OnDestroy
{
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
        private route: ActivatedRoute,
        private _fuseNavigationService: FuseNavigationService,
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    navFormNext():void{
        if(this.pageIndex < 4){
            this.pageIndex += 1
        }
        this.router.navigate([`portal/formulario-urs/p${this.pageIndex}`]).then(() => {
            // Scroll to top after navigation
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });; ;
    }
    navFormPrev():void{
       
        if(this.pageIndex > 0 ){
            this.pageIndex -= 1
        }
        this.router.navigate([`portal/formulario-urs/p${this.pageIndex}`]).then(() => {
            // Scroll to top after navigation
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });; ;
    }
    navInit(){
        this.router.navigate(['../land'], { relativeTo: this.route }).then(() => {
            // Scroll to top after navigation
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });; ;
        this.openNavigation('mainNavigation')
    }
    openNavigation(name: string): void {
            // Get the navigation
            const navigation =
                this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(
                    name
                );
            
            navigation.opened = true
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
