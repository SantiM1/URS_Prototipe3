import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  standalone: true
})
export class CertificateComponent {

    constructor(
        private router:Router,
        private activeRoute: ActivatedRoute,
    ){

    }
    navBack(){
        this.router.navigate(['../'], {relativeTo: this.activeRoute}).then(() => {
            // Scroll to top after navigation
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });;
    }
}
