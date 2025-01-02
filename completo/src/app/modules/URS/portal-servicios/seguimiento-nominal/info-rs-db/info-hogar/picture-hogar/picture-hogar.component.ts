import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-table-dialog',
  templateUrl: './picture-hogar.component.html',
  standalone:true,
  imports:[ MatDialogModule,
    CommonModule

  ]
})
export class PicturesHogarComponent {
 
}