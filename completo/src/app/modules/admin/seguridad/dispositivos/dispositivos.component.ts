import { ChangeDetectorRef, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher/media-watcher.service';
import { Subject, takeUntil } from 'rxjs';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';


@Component({
  selector: 'dispositivos',
  standalone: true,
  imports: [
    MatDrawer,
    CommonModule,
    MatIcon,
    MatSidenavModule,
    RouterModule,
  
],
  templateUrl: './dispositivos.component.html',
})

export class DispositivosComponent {

  @ViewChild('drawer') drawer: MatDrawer;
  drawerMode: 'over' | 'side' = 'side';
  drawerOpened: boolean = true;
  selectedPanel: string = 'account';
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  fotografia: boolean = true;

  paneles: any[] = [];

  uuid_fp: string; // Variable que almacena el uuid de la ficha principal para redirigir en las demas opciones

  @Output() completoOperacion = new EventEmitter<boolean>();


  constructor(
    private _fuseMediaWatcherService: FuseMediaWatcherService,
    private _changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,    

  ){}

  async ngOnInit(){

    this.paneles = [
      {
        id: 'registro',
        icon: 'heroicons_outline:user-circle',
        title: 'Registro'
      },
      {
        id: 'reporte-historial',
        icon: 'heroicons_outline:user-circle',
        title: 'Reporte Historial'
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
