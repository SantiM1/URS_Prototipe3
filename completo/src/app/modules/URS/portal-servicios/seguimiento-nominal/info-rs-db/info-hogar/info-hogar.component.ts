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
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MiembrosHogarComponent } from "./miembros-hogar/miembros-hogar.component";
import { HistorialCambiosComponent } from "./historial-cambios/historial-cambios.component";
import { PicturesHogarComponent } from "./picture-hogar/picture-hogar.component";
import { LocationHogarComponent } from "./location-hogar/location-hogar.component";

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
        MatDialogModule,
    ],
})
export class InfoHogarComponent {
   constructor(private activeRoute: ActivatedRoute, private router: Router,
    private dialog: MatDialog
   ) {}
   
       
     
       // Navigate back to the previous page
       goBack(): void {
        this.router.navigate(['../'], {relativeTo: this.activeRoute})
       }

       openMiembrosDialog(): void {
         this.dialog.open(MiembrosHogarComponent, {
           width: '900px', // Adjust width as needed
           data: {}, // Pass any data if needed
         });
       }
       openHistorialDialog(): void {
        this.dialog.open(HistorialCambiosComponent, {
          width: '900px', // Adjust width as needed
          data: {}, // Pass any data if needed
        });
      }
      openImgDialog(): void {
        this.dialog.open(PicturesHogarComponent, {
          width: '900px', // Adjust width as needed
          data: {}, // Pass any data if needed
        });
      }
      openLocationDialog(): void {
        this.dialog.open(LocationHogarComponent, {
          width: '900px', // Adjust width as needed
          data: {}, // Pass any data if needed
        });
      }
}