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
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { Map } from 'maplibre-gl';


@Component({
    selector: 'formulario-p3',
    templateUrl: './formulario-p3.component.html',
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
        MatSliderModule,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioP3Component {
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
    
    
}
