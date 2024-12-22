import { Component } from "@angular/core";
import { Router, RouterLink, RouterOutlet } from "@angular/router";

@Component({
    selector: 'landing-place',
    templateUrl: './landing-place.component.html',
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