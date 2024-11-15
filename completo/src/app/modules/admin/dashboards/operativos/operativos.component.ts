import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'operativos',
    templateUrl: './operativos.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [RouterOutlet,
        MatDrawer,
        MatSidenavModule,
        MatIcon,
    ],
})
export class InventoryComponent {
    /**
     * Constructor
     */
    @ViewChild('drawer') drawer: MatDrawer;
    drawerMode: 'over' | 'side' = 'side';
    drawerOpened: boolean = true;
    selectedPanel: string = 'account';
    paneles: any[] = [];
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    uuid_fp: string; 
    
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private _fuseMediaWatcherService: FuseMediaWatcherService,
        private _changeDetectorRef: ChangeDetectorRef,
 
    ) {}
    async ngOnInit(){
        
    
        this.paneles = [
          {
            id: 'fichaPrincipal',
            icon: 'heroicons_outline:user-circle',
            title: 'Ficha Principal'
          },
          {
            id: 'fichaDeIngreso',
            icon: 'heroicons_outline:bell',
            title: 'Ingreso'
          },
          {
            id: 'expediente',
            icon: 'heroicons_outline:lock-closed',
            title: 'Expediente Legal'
          },
          {
            id: 'evaluacionMedica',
            icon: 'heroicons_outline:heart',
            title: 'Evaluación Médica'
          },
          {
            id: 'informes',
            icon: 'heroicons_outline:clipboard',
            title: 'Informes'
          },
          {
            id: 'evaluacionPsicosocial',
            icon: 'heroicons_outline:bell',
            title: 'Evaluación Psicosocial'
          },
          {
            id: 'nivelDeRiesgo',
            icon: 'heroicons_outline:clipboard-document-list',
            title: 'Valoración de Nivel de Riesgo'
          },
          {
            id: 'planTratamiento',
            icon: 'heroicons_outline:clipboard-document-list',
            title: 'Plan tratamiento individual'
          },
          {
            id: 'entregaRecepcionUniformesArticulos',
            icon: 'heroicons_outline:arrows-up-down',
            title: 'Entrega/Retiro de pertenencias'
          },
          {
            id: 'fichaJudicial',
            icon: 'heroicons_outline:bell',
            title: 'Ficha Judicial'
          },
        ];
    
        this.selectedPanel = "fichaPrincipal";
         this._fuseMediaWatcherService.onMediaChange$
         .pipe(takeUntil(this._unsubscribeAll))
         .subscribe(({ matchingAliases }) => {
    
           if (matchingAliases.includes('lg')) {
             this.drawerMode = 'side';
             this.drawerOpened = true;
           }
           else {
             this.drawerMode = 'over';
             this.drawerOpened = false;
           }
    
           this._changeDetectorRef.markForCheck();
         });
    }
    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
      }
    
      trackByFn(index: number, item: any): any {
        return item.id || index;
      }
    
      goToPanel(panel: string): void {
        this.selectedPanel = panel;
        if (this.uuid_fp) {
          this.router.navigate([panel, this.uuid_fp], { relativeTo: this.route });
        } else {
            this.router.navigate([panel], { relativeTo: this.route });
        }   
      }
      
      getPanelInfo(id: string): any {
        return this.paneles.find(panel => panel.id === id);
      }
        
      
}

