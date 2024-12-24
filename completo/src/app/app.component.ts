import { Component, OnInit } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { CustomMatPaginatorIntl } from './custom-mat-paginator-int';
// register Swiper custom elements
register();
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet],
    providers: [{
        provide: MatPaginatorIntl, 
        useClass: CustomMatPaginatorIntl
      }]
})
export class AppComponent implements OnInit {
    /**
     * Constructor
     */
    constructor() {}
    ngOnInit(): void {
        initFlowbite(); 
    }
}
