import { TextFieldModule } from '@angular/cdk/text-field';

import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
    FormsModule,
    NgForm,
    ReactiveFormsModule,
    UntypedFormBuilder,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { RouterLink } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertComponent } from '@fuse/components/alert';

@Component({
    selector: 'landing-support',
    templateUrl: './soporte.component.html',
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
    ],
})
export class LandingSupportComponent implements OnInit {
    @ViewChild('supportNgForm') supportNgForm: NgForm;

    alert: any;
    supportForm: UntypedFormGroup;
    messageLabel = 'Message';
    cat = ''
    isCategorySelected = true; // Initialize as false to hide textarea by default
    viewButtons = false;

    constructor(private _formBuilder: UntypedFormBuilder) {}

    ngOnInit(): void {
        // Create the support form
        this.supportForm = this._formBuilder.group({
            category: ['', Validators.required], // Add category field
            message: ['', Validators.required],
        });
    }

    onCategoryChange(selectedCategory: string): void {
        this.viewButtons = true;
        this.isCategorySelected = false;
        this.cat = selectedCategory;
        // Update visibility of textarea
        switch (selectedCategory) {
            case 'preguntas':
                this.messageLabel = '¿Tienes una pregunta específica? No olvides revisar la sección de preguntas frecuentes!';
                break;
            case 'quejas':
                this.messageLabel = 'Describe el problema encontrado. Haremos lo posible para solucionarlo!';
                break;
            case 'sugerencias':
                this.messageLabel = '¿Como podemos mejorar? Nos encanta escuchar sugerencias!';
                break;
            default:
                this.messageLabel = 'Message';
                break;
        }
    }

    clearForm(): void {
        // Reset the form
        this.supportNgForm.resetForm();
        this.messageLabel = 'Message'; // Reset label
    }

    sendForm(): void {
        if (this.supportForm.valid) {
            // Send your form here using an HTTP request
            console.log('Your message has been sent!', this.supportForm.value);

            // Show a success message
            this.alert = {
                type: 'success',
                message:
                    'Sus ' + this.cat + ' fueron recibidas correctamente! Si el caso requiere seguimiento, se enviará una respuesta a su buzón institucional ',
            };

            setTimeout(() => {
                this.alert = null;
            }, 7000);

            // Clear the form
            this.clearForm();
        }
    }
}
