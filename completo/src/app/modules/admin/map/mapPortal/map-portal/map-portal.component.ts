import { TextFieldModule } from '@angular/cdk/text-field';
import { NgClass, TitleCasePipe } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
    MatButtonToggleModule,
} from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FuseCardComponent } from '@fuse/components/card';
import { FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';

@Component({
    selector: 'map-portal',
    templateUrl: './map-portal.component.html',
    styles: [
        `
            cards fuse-card {
                margin: 16px;
            }
        `,
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatButtonToggleModule,
        FormsModule,
        FuseCardComponent,
        MatButtonModule,
        MatIconModule,
        RouterLink,
        NgClass,
        MatMenuModule,
        MatCheckboxModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatInputModule,
        TextFieldModule,
        MatDividerModule,
        MatTooltipModule,
        TitleCasePipe,
    ],
})
export class MapPortalComponent  {
 

  constructor( private _fuseNavigationService: FuseNavigationService,
    private _activatedRoute: ActivatedRoute,

    private _router: Router,

) {}
 toggleNavigation(name: string): void {
        // Get the navigation
        const navigation =
            this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(
                name
            );
        
        navigation.opened = false
    }
  navGeovisor(){
    this._router.navigate(['../geovisor'], {relativeTo: this._activatedRoute,});   
    this.toggleNavigation('mainNavigation')
  }
  navServicios(){
    this._router.navigate(['../catalogo-servicios'], {relativeTo: this._activatedRoute,});   
    this.toggleNavigation('mainNavigation')
  }
  navDatos(){
    this._router.navigate(['../catalogo-datos'], {relativeTo: this._activatedRoute,});   
    this.toggleNavigation('mainNavigation')
  }
  navApps(){
    this._router.navigate(['../geo-apps'], {relativeTo: this._activatedRoute,}); 
    this.toggleNavigation('mainNavigation')  
  }
  navDescargas(){
    this._router.navigate(['../descargas'], {relativeTo: this._activatedRoute,});   
    this.toggleNavigation('mainNavigation')
  }
 
 
 
}
