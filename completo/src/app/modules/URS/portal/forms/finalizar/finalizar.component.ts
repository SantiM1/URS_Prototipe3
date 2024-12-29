import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';
import { FuseConfirmationService } from '@fuse/services/confirmation';

@Component({
  selector: 'app-finalizar',
  standalone: true,
  imports: [MatRadioModule,
    MatIconModule,
    MatButtonModule
    
  ],
  templateUrl: './finalizar.component.html',
})
export class FinalizarComponent {
  constructor(
    private _fuseConfirmationService: FuseConfirmationService,
    private _router: Router
  ){

  }
  confirm(): void {
    this._router.navigate(['/portal/land']).then(() => {
      // Scroll to top after navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });; ;
  }
  cancelar(): void {
    this._router.navigate(['/portal/land']).then(() => {
      // Scroll to top after navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });; ;
  }
  confirmar():void{
    const confirmation = this._fuseConfirmationService.open({
      title: 'Atención',
      message:
          '¿Está seguro de registrar sus respuestas?',
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
