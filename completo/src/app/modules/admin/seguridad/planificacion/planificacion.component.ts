import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import {RouterOutlet } from '@angular/router';

@Component({
  selector: 'planificacion',
  templateUrl: './planificacion.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterOutlet],
})
export class PlanificacionComponent {
  /**
   * Constructor
   */
  constructor(
      
  ) {
     
  }
}