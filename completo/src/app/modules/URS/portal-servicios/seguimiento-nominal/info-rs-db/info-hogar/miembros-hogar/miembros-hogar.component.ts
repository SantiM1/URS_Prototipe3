import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-table-dialog',
  templateUrl: './miembros-hogar.component.html',
  standalone:true,
  imports:[ MatDialogModule,
    CommonModule

  ]
})
export class MiembrosHogarComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  tableData = [
    {
      no: 1,
      cedula: '1234567890',
      nombre: 'Juan Pérez',
      fechaNacimiento: '1990-05-15',
      nacionalidad: 'Ecuatoriana',
      discapacidad: 'No',
      parentesco: 'Hermano',
      puntaje: 4.1,
    },
    {
      no: 2,
      cedula: '0987654321',
      nombre: 'María Gómez',
      fechaNacimiento: '1987-11-22',
      nacionalidad: 'Mexicana',
      discapacidad: 'Sí',
      parentesco: 'Madre',
      puntaje: 3.8,
    },
    {
      no: 3,
      cedula: '1122334455',
      nombre: 'Carlos Martínez',
      fechaNacimiento: '1995-08-19',
      nacionalidad: 'Colombiana',
      discapacidad: 'No',
      parentesco: 'Primo',
      puntaje: 3.7,
    },
    {
      no: 4,
      cedula: '5566778899',
      nombre: 'Lucía Fernández',
      fechaNacimiento: '2000-03-30',
      nacionalidad: 'Argentina',
      discapacidad: 'No',
      parentesco: 'Esposa',
      puntaje: 4.3,
    },
  ];
}