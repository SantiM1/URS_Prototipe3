import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
    selector: 'usuarios',
    templateUrl: './usuarios.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [RouterOutlet],
})
export class InventoryComponent {
    /**
     * Constructor
     */
    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {
       
    }
    crearUsuario() {
        this.router.navigate(['crear-editar'], { relativeTo: this.route });
    }
}
