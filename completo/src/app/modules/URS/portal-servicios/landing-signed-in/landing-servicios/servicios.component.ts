import { TextFieldModule } from '@angular/cdk/text-field';

import { Component, ViewEncapsulation } from '@angular/core';
import {
    FormsModule,
    
    ReactiveFormsModule,
    
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertComponent } from '@fuse/components/alert';


@Component({
    selector: 'support-servicios',
    templateUrl: './servicios.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
    standalone: true,
    imports: [
        MatButtonModule,
        RouterLink,
        MatIconModule,
        FuseAlertComponent,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        TextFieldModule,
        MatRadioModule,
        MatFormFieldModule,
        MatSelectModule
    ],
})
export class ServiciosSupportComponent  {
    constructor(private _router:Router,
    ) {}

    navTo(name: string): void {
        this._router.navigate([name]).then(() => {
            // Scroll to top after navigation
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });; ;
        
    }
}
