import { NgClass } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
    CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseCardComponent } from '@fuse/components/card';


@Component({
    selector: 'pricing-simple',
    templateUrl: './simple.component.html',
    styleUrl: 'simple.css',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatButtonModule, NgClass, FuseCardComponent, MatIconModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PricingSimpleComponent  {

    constructor(
        private router:Router,
        private route: ActivatedRoute,
    ){

    }
    navServicios(){
        if(this.router.url == '/portal/land-so'){
           
            this.router.navigate(['/portal/autoregistro'] ).then(() => {
                // Scroll to top after navigation
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });; 
        }else{
        this.router.navigate(['./servicios'],{ relativeTo: this.route } ).then(() => {
            // Scroll to top after navigation
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });; 
    }
    }
    navForm(){
        if(this.router.url == '/portal/land-so'){
           
            this.router.navigate(['/portal/autoregistro'] ).then(() => {
                // Scroll to top after navigation
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });; 
        }else{
        this.router.navigate(['../formulario-urs/p0'],{ relativeTo: this.route } ).then(() => {
            // Scroll to top after navigation
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });; 
    }
    }
    navGeoportal(){
        if(this.router.url == '/portal/land-so'){
           
            this.router.navigate(['/portal/autoregistro'] ).then(() => {
                // Scroll to top after navigation
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });; 
        }else{
            
        this.router.navigate(['/apps/maps/portal-geografico'] ).then(() => {
            // Scroll to top after navigation
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });; 
    }
    }
}
