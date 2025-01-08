import { Component } from "@angular/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { FuseNavigationService } from "@fuse/components/navigation";

@Component({
    selector: 'query-box',
    templateUrl: 'query.component.html',
    standalone: true,
    imports: [
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        FormsModule, 
        CommonModule,
    ],
})
export class QueryComponent {

    constructor(
            private router: Router,
            private activeRoute: ActivatedRoute,
            private _fuseNavigationService: FuseNavigationService,
    
        ) { }
    
        navTo(name: string):void {
            this.router.navigate([name],{relativeTo: this.activeRoute}).then(() => {
                // Scroll to top after navigation
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
        navDirect(name: string, scroll: number):void {
            this.router.navigate([name]).then(() => {
                // Scroll to top after navigation
                window.scrollTo({ top: scroll, behavior: 'smooth' });
            });
        }
    searchType: string = 'cedula'; // Default selected option
    inputValue: string = '';       // Holds value for Cédula or No. Certificado
    firstName: string = '';        // First Name for Nombres y Apellidos
    secondName: string = '';       // Second Name for Nombres y Apellidos
    firstLastName: string = '';    // First Last Name for Nombres y Apellidos
    secondLastName: string = '';   // Second Last Name for Nombres y Apellidos

    // Dynamically change placeholder based on search type
    getPlaceholder(): string {
        switch (this.searchType) {
            case 'cedula':
                return 'Enter Cédula...';
            case 'certificado':
                return 'Enter No. Certificado...';
            default:
                return '';
        }
    }

    // Handle form submission
    submitForm(): void {
        if (this.searchType === 'nombres') {
            console.log({
                firstName: this.firstName,
                secondName: this.secondName,
                firstLastName: this.firstLastName,
                secondLastName: this.secondLastName,
            });
        } else {
            console.log({
                searchType: this.searchType,
                inputValue: this.inputValue,
            });
        }
    }
}
