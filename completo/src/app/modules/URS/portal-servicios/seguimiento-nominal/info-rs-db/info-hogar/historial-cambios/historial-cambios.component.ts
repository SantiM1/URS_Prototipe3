
import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-table-dialog',
  templateUrl: './historial-cambios.component.html',
  standalone:true,
  imports:[ MatDialogModule,
    CommonModule,
    MatIconModule,

  ]
})
export class HistorialCambiosComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  tableData = [
    {
      no: 1,
      tipoCambio: 'Actualización',
      fechaCambio: '2022-06-15',
      certificado: '123456',
    },
    {
      no: 2,
      tipoCambio: 'Ingreso',
      fechaCambio: '2021-03-10',
      certificado: '654321',
    },
    {
      no: 3,
      tipoCambio: 'Nacimiento',
      fechaCambio: '2020-11-20',
      certificado: '789012',
    },
    {
      no: 4,
      tipoCambio: 'Defunción',
      fechaCambio: '2019-05-30',
      certificado: '345678',
    },
    {
      no: 5,
      tipoCambio: 'Beneficios',
      fechaCambio: '2023-01-12',
      certificado: '890123',
    },
  ];
}