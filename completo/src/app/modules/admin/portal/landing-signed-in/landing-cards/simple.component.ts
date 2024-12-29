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
import { FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';


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
        private _fuseNavigationService: FuseNavigationService,
    ){

    }

    navTo(name:string): void{
        if(this.router.url == '/portal/land-so'){
           
            this.router.navigate(['/portal/autoregistro'] ).then(() => {
                // Scroll to top after navigation
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });; 
        }else{

        this.router.navigate([name]).then(() => {
            this.toggleNavigation('mainNavigation')
            // Scroll to top after navigation
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });; 
    }
    }
    toggleNavigation(name: string): void {
        // Get the navigation
        const navigation =
            this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(
                name
            );

        if (navigation) {
            // Toggle the opened status
            navigation.toggle();
        }
    }
    
}
