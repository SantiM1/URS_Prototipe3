import { CurrencyPipe, NgClass } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { FuseCardComponent } from '@fuse/components/card';
import { FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { TranslocoModule } from '@ngneat/transloco';
import { LanguagesComponent } from 'app/layout/common/languages/languages.component';
import { MessagesComponent } from 'app/modules/URS/portal-servicios/landing-signed-in/landing-messages/messages.component';
import { NotificationsComponent } from 'app/layout/common/notifications/notifications.component';
import { SearchComponent } from 'app/layout/common/search/search.component';
import { ShortcutsComponent } from 'app/layout/common/shortcuts/shortcuts.component';
import { LandingSOService } from 'app/modules/URS/portal-servicios/landing-signed-out/landingSO.service';
import { ApexOptions, NgApexchartsModule } from 'ng-apexcharts';
import { Subject, takeUntil } from 'rxjs';
import { FuseFullscreenComponent } from '@fuse/components/fullscreen';
import { UserComponent } from 'app/layout/common/user/user.component';
import { PricingSimpleComponent } from '../landing-signed-in/landing-cards/simple.component';


@Component({
    selector: 'landingSO',
    templateUrl: './landingSO.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        TranslocoModule,
        MatIconModule,
        MatButtonModule,
        MatRippleModule,
        MatMenuModule,
        MatTabsModule,
        MatButtonToggleModule,
        NgApexchartsModule,
        MatTableModule,
        NgClass,
        CurrencyPipe,
        MatExpansionModule,
        MatFormFieldModule,
        FuseCardComponent,
        MatSlideToggleModule,
        FormsModule,
        MatInputModule,
        LanguagesComponent,
        SearchComponent,
        ShortcutsComponent,
        MessagesComponent,
        NotificationsComponent,
        UserComponent,
        FuseFullscreenComponent,
        PricingSimpleComponent

    ],
})
export class LandingSOComponent {
    chartGithubIssues: ApexOptions = {};
    chartTaskDistribution: ApexOptions = {};
    chartBudgetDistribution: ApexOptions = {};
    chartWeeklyExpenses: ApexOptions = {};
    chartMonthlyExpenses: ApexOptions = {};
    chartYearlyExpenses: ApexOptions = {};
    data: any;
    selectedLandingSO: string = 'ACME Corp. Backend App';
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    likes = 4;
    dislikes= 0;
    
    /**
     * Constructor
     */
    constructor(
        private _landingSOService: LandingSOService,
        private _router: Router,
        private _fuseNavigationService: FuseNavigationService
    ) {}
    
    slides: string [] = ['images/URS/urs1.png', 'images/URS/fam1.jpg', 'images/URS/urs2.jpg' ]
    i=0;

    

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    
    /**
     * On init
     */
    ngOnInit(): void {
        this.closeNavigation('mainNavigation')
    }

    

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // ----------------------------------------------------------------------------------------------------
    
    addLike(){
        this.likes += 1
    }
    addDislike(){
        this.dislikes += 1
    }
    getSlide() {
        return this.slides[this.i];
    }

    getPrev() {
        this.i = this.i===0 ? this.slides.length-1 : this.i - 1;
    } 
    getNext() {
        this.i = this.i===this.slides.length-1 ? 0 : this.i + 1;
    }
    
    signOut(): void {
        this._router.navigate(['/sign-out']).then(() => {
            // Scroll to top after navigation
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });; ;
    }
    register(): void {
        this._router.navigate(['/portal/autoregistro']).then(() => {
            // Scroll to top after navigation
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });; ;
    }
    forms(): void {
        this._router.navigate(['/portal/autoregistro']).then(() => {
            // Scroll to top after navigation
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });; ;
 
    }
    faqs(): void {
        this._router.navigate(['portal/land/faqs']).then(() => {
            // Scroll to top after navigation
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });; ;
        this.closeNavigation('mainNavigation')
    }
    soporte(): void {
        this._router.navigate(['portal/land/soporte']).then(() => {
            // Scroll to top after navigation
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });; ;
        this.closeNavigation('mainNavigation')
    }
    toggleNavigation(name: string): void {
        // Get the navigation
        const navigation =
            this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(
                name
            );

        if (navigation) {
            // Toggle the opened status
            navigation.toggle();
        }
    }
    closeNavigation(name: string): void {
        // Get the navigation
        const navigation =
            this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(
                name
            );
        
        navigation.opened = false
    }
}
