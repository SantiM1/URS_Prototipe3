import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';
import { FuseConfirmationService } from '@fuse/services/confirmation';

@Component({
  selector: 'app-declaracion',
  standalone: true,
  imports: [MatRadioModule,
    MatIconModule,
    MatButtonModule
    
  ],
  templateUrl: './declaracion.component.html',
})
export class DeclaracionComponent {

  
  constructor(
    private _fuseConfirmationService: FuseConfirmationService,
    private _router: Router
  ){

  }
  confirm(): void {
    this._router.navigate(['/portal/formulario-urs']);
  }
  cancelar(): void {
    this._router.navigate(['/portal/land']);
  }
  confirmar():void{
    const confirmation = this._fuseConfirmationService.open({
      title: 'Atención',
      message:
          '¿Está seguro de registrar su respuesta?',
      actions: {
          confirm: {
              label: 'Confirmar',
              color: 'accent',
          },
      },
      icon: {
        show: true,
        name: 'heroicons_outline:check-circle',
        color: 'success',
    },
  });
  confirmation.afterClosed().subscribe((result) => {
    // If the confirm button pressed...
    if (result === 'confirmed') {
        // Get the current contact's id
       this.confirm()
    }
});
}
}
