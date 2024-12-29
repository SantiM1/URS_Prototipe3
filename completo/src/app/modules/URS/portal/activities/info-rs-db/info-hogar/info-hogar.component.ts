import { Component } from "@angular/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'info-hogar',
    templateUrl: 'info-hogar.component.html',
    standalone: true,
    imports: [
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        FormsModule, 
        CommonModule,
        MatButtonModule, 
        MatIconModule,
    ],
})
export class InfoHogarComponent {
   constructor(private activeRoute: ActivatedRoute, private router: Router) {}
   
       
     
       // Navigate back to the previous page
       goBack(): void {
        this.router.navigate(['../'], {relativeTo: this.activeRoute})
       }
}