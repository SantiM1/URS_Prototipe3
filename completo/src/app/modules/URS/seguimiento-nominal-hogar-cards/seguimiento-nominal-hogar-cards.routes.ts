import { Routes } from '@angular/router';
import { SeguimientoNominalHogarCardsComponent } from './seguimiento-nominal-hogar-cards.component';
import { InfoDetalleHogarComponent } from './informacion-detalle-hogar/info-detalle-hogar.component';

export default [
    {
        path: '',
        component: SeguimientoNominalHogarCardsComponent,
    },
    {
        path: 'info-detalle-hogar',
        component: InfoDetalleHogarComponent,
    },
] as Routes;
