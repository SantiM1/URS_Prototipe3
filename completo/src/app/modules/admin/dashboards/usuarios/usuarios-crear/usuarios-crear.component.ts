import { Location } from '@angular/common'
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-crear',
  standalone: true,
  imports: [MatTableModule,
    MatTabsModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatDatepickerModule,
    MatBottomSheetModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatIconModule,],
  templateUrl: './usuarios-crear.component.html',
  
})
export class UsuariosCrearComponent {
  
  constructor(
    private _fuseConfirmationService: FuseConfirmationService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
) {}
  delete() {
    // Open the confirmation dialog
    const confirmation = this._fuseConfirmationService.open({
        title: 'Borrar usuario',
        message:
            '¿Estás seguro que deseas borrar este usuario? Esta acción es permanente',
        actions: {
            confirm: {
                label: 'Borrar',
            },
        },
    });
    this.router.navigate(['..'], { relativeTo: this.route });
  }
  
back ():void{
  this.router.navigate(['..'], { relativeTo: this.route });
}
}
