import { Component } from "@angular/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { MatDialog } from "@angular/material/dialog";
import { BenefitsDialogComponent } from "./beneficios-detail/beneficios-detail.component";

@Component({
    selector: 'benefits-box',
    templateUrl: 'benefits.component.html',
    standalone: true,
    imports: [
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        FormsModule, 
        CommonModule,
        MatIconModule,
    ],
})
export class BenefitsComponent {
    constructor(private activeRoute: ActivatedRoute, 
        private router: Router, 
        private dialog: MatDialog,
    ) {}

    
  
    // Navigate back to the previous page
    goBack(): void {
     this.router.navigate(['../'], {relativeTo: this.activeRoute})
    }
    openInfoDialog(titleName: string, descriptionText: string): void {
        this.dialog.open(BenefitsDialogComponent, {
          width: '900px',
          data: {
            title: titleName,
            description: descriptionText,
            imageUrl: 'images/URS/cat-1.png', // Replace with your actual image URL
          },
        });
      }
}
