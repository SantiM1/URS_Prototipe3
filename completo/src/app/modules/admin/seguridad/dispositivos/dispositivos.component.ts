import { ChangeDetectorRef, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher/media-watcher.service';
import { Subject, takeUntil } from 'rxjs';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FuseFullscreenComponent } from '@fuse/components/fullscreen';
import { FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { NotificationsComponent } from 'app/layout/common/notifications/notifications.component';
import { SearchComponent } from 'app/layout/common/search/search.component';
import { UserComponent } from 'app/layout/common/user/user.component';
import { MessagesComponent } from '../../portal/landing-signed-in/landing-messages/messages.component';


@Component({
  selector: 'dispositivos',
  standalone: true,
  imports: [
    MatDrawer,
    CommonModule,
    MatIcon,
    MatSidenavModule,
    RouterModule,
     UserComponent,
        NotificationsComponent,
        MessagesComponent,
        SearchComponent,
        FuseFullscreenComponent,
  
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
 private _fuseNavigationService: FuseNavigationService,

  ){}
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

  async ngOnInit(){

    this.paneles = [
      {
        id: 'registro',
        icon: 'heroicons_outline:user-circle',
        title: 'Registros de Dispositivos'
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
      this.router.navigate([panel, this.uuid_fp], { relativeTo: this.route }).then(() => {
        // Scroll to top after navigation
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });; ;
    } else {
        this.router.navigate([panel], { relativeTo: this.route }).then(() => {
          // Scroll to top after navigation
          window.scrollTo({ top: 0, behavior: 'smooth' });
      });; ;
    }   
  }
  
  getPanelInfo(id: string): any {
    return this.paneles.find(panel => panel.id === id);
  }
}
