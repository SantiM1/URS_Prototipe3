import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';

@Component({
  selector: 'mapPage', // Selector to use this component in HTML
  templateUrl: './mapPage.component.html', // Path to the HTML template
  standalone:true
})
export class MapPageComponent {
  // Define any properties or methods here as needed
  title: string = 'My Angular Component';
  /**
       * Constructor
       */
      constructor(
          private _activatedRoute: ActivatedRoute,
      
          private _router: Router,
      ) {}
  

  // Example method (optional)
  navDetail(){
    this._router.navigate(['../detalle'], {relativeTo: this._activatedRoute,}).then(() => {
      // Scroll to top after navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });; ;   
  }
  navPortal(){
    this._router.navigate(['../portal-geografico'], {relativeTo: this._activatedRoute,}).then(() => {
      // Scroll to top after navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });; ;   
  }
}