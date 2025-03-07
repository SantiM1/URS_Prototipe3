import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, ActivatedRoute } from '@angular/router';
import { FuseCardComponent } from '@fuse/components/card';


@Component({
    selector: 'app-manuales',
    templateUrl: './manuales.component.html',
    imports: [
        FuseCardComponent,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
    ],
    standalone: true
})
export class ManualesComponent {

    constructor(
              private router: Router,
              private route: ActivatedRoute
          ) {}
          navDescargas(): void {
            this.router.navigate(['../descargas'], { relativeTo: this.route }).then(() => {
                // Scroll to top after navigation
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });; ;
          }
    
}
