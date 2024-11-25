import { CdkScrollable } from '@angular/cdk/scrolling';
import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { FormSidebarComponent } from './form-sidebar/form-sidebar.component';
import { Subject, takeUntil } from 'rxjs';
import { FormularioURSComponent } from '../formulario-datos-generales/formulario-urs.component';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { DeclaracionComponent } from '../declaracion/declaracion.component';

@Component({
    selector: 'formulario',
    templateUrl: './formulario.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        MatSidenavModule,
        FormSidebarComponent,
        MatIconModule,
        RouterLink,
        MatButtonModule,
        CdkScrollable,
        FormularioURSComponent,
        MatPseudoCheckboxModule,
        DeclaracionComponent,
        RouterOutlet,
    ],
})
export class FormularioComponent
    implements OnInit, OnDestroy
{
    drawerMode: 'over' | 'side' = 'side';
    drawerOpened: boolean = true;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    @Input() currentScreen: string = 'aceptacion';
    private pages: string[] = ['declaracion', 'datos-generales', 'materiales-vivienda','cuartos-hogar', 'finalizar'];
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
        if(this.pageIndex < this.pages.length-1){
            this.pageIndex += 1
        }else{
            this.pageIndex = 0
        }
        this.router.navigate([this.pages[this.pageIndex]], { relativeTo: this.route });
    }
    navFormPrev():void{
        if(this.pageIndex < this.pages.length-1){
            this.pageIndex -= 1
        }else{
            this.pageIndex = 0
        }
        this.router.navigate([this.pages[this.pageIndex]], { relativeTo: this.route });
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
