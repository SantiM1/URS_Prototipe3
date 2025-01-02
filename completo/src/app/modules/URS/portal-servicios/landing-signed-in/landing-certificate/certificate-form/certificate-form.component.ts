import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FuseConfirmationService } from "@fuse/services/confirmation";

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate-form.component.html',
  standalone: true
})
export class CertificateFormComponent{
    crearSegment:boolean=false;

    constructor(
        private _fuseConfirmationService: FuseConfirmationService,
        private router: Router,
    ){
        
    }

    crear():void{
        // Open the confirmation dialog
        const confirmation = this._fuseConfirmationService.open({
            title: '¿La información es correcta?',
            message:
                'Obten tu certificado',
            actions: {
                confirm: {
                    label: 'Confirmar',
                    color: 'accent',
                },
                cancel: {
                    label: 'Cancelar',
                    
                },
            },
            
        icon: {
            show: true,
            name: 'heroicons_outline:check-circle',
            color: 'success',
        },
        });
        this.crearSegment = false
         // Subscribe to the confirmation dialog closed action
         confirmation.afterClosed().subscribe((result) => {
            // If the confirm button pressed...
            if (result === 'confirmed') {
                this.navTo('/portal/land/certificado')
            }
        });
    }
    navTo(name: string){
        this.router.navigate([name]).then(() => {
            // Scroll to top after navigation
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });; ;   
    }
}