import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FuseCardComponent } from '@fuse/components/card';

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

}
