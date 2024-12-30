import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-beneficios-detail',
  templateUrl: './beneficios-detail.component.html',
  standalone: true,
  imports:[ MatDialogModule,
      CommonModule,
    
  
    ]
})
export class BenefitsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string; description: string; imageUrl?: string }) {}
}