import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, ActivatedRoute } from '@angular/router';
import { FuseCardComponent } from '@fuse/components/card';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';

@Component({
  selector: 'app-descargas',
  standalone: true,
  imports: [
    FuseCardComponent,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './descargas.component.html',
})
export class DescargasComponent {

   constructor(
          private router: Router,
          private route: ActivatedRoute
      ) {}
      navNormativa(): void {
        this.router.navigate(['../pdf'], { relativeTo: this.route });
      }
      navManuales(): void {
        this.router.navigate(['../manuales'], { relativeTo: this.route });
      }
      navBase(): void {
        this.router.navigate(['../base'], { relativeTo: this.route });
      }
}
