import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule,
    UntypedFormBuilder,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { Map } from 'maplibre-gl';


@Component({
    selector: 'formulario-urs',
    templateUrl: './formulario-urs.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatButtonModule,
        MatCheckboxModule,
        MatRadioModule,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioURSComponent {
    @ViewChild('map')
    private mapContainer: ElementRef<HTMLElement>;
    
  
    private map: Map;

    /**
     * Constructor
     */
    constructor(private _formBuilder: UntypedFormBuilder,
        private _router: Router
    ) {
        
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
   
    back(): void {
        this._router.navigate(['/portal/land']);
    }
    ngAfterViewInit() {
        const myAPIKey = '8c31c50c46834e5aaa1a7d1246c6e9d7'; 
        const mapStyle = 'https://maps.geoapify.com/v1/styles/osm-bright/style.json';
    
        const initialState = {
          lng: -80,
          lat: -2,
          zoom: 5
        };
    
        this.map = new Map({
          container: this.mapContainer.nativeElement,
          style: `${mapStyle}?apiKey=${myAPIKey}`,
          center: [initialState.lng, initialState.lat],
          zoom: initialState.zoom
        });
      }
}
