import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-beneficios-detail',
  templateUrl: './beneficios-detail.component.html',
  standalone: true,
  imports:[ MatDialogModule,
      CommonModule,
      MatIconModule,
    
  
    ]
})
export class BenefitsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string; description: string; imageUrl?: string }) {}
  tableData = [
    {
      no: 1,
      tipoCambio: 'Mensualidad',
      fechaCambio: '2019-04-01',
      certificado: '123456',
    },
    {
      no: 2,
      tipoCambio: 'Actualización de datos',
      fechaCambio: '2019-03-24',
      certificado: '654321',
    },
    {
      no: 3,
      tipoCambio: 'Mensualidad',
      fechaCambio: '2019-03-01',
      certificado: '789012',
    },
    {
      no: 4,
      tipoCambio: 'Mensualidad',
      fechaCambio: '2019-02-01',
      certificado: '345678',
    },
    {
      no: 5,
      tipoCambio: 'Ingreso',
      fechaCambio: '2019-01-12',
      certificado: '890123',
    },
  ];}