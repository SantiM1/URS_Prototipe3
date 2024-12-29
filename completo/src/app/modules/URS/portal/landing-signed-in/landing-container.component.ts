import { Component } from "@angular/core";
import { Router, RouterLink, RouterOutlet } from "@angular/router";

@Component({
    selector: 'landing-container',
    templateUrl: './landing-container.component.html',
    standalone:true,
    imports:[
        RouterOutlet
    ]
})

export class LandingPlace{

    constructor(
        router: Router
        
    ){

    }
}