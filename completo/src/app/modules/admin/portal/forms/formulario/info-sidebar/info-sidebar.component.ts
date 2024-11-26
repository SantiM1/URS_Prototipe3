import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { FuseNavigationItem } from '@fuse/components/navigation/navigation.types';

@Component({
    selector: 'info-sidebar',
    template: `
        <div class="py-10">
            <!-- Add any extra content that might be supplied with the component -->
            <div class="extra-content">
                <ng-content></ng-content>
            </div>

            <!-- Fixed form sidebar -->
            
            
            <!-- NAV -->
            <fuse-vertical-navigation
                [appearance]="'default'"
                [navigation]="menuData"
                [inner]="true"
                [mode]="'side'"
                [name]="'info-sidebar-navigation'"
                [opened]="true"
                [autoCollapse]="false"
            >
                 <div fuseVerticalNavigationContentHeader>
                    <div class="mx-6 text-3xl font-bold tracking-tighter">
                    Información
                    </div>
                    <img src='images/URS/house.jpg'/>
                    <div class="video-container">
                    <iframe 
                   
                    src="https://youtu.be/JLVAYRq-tJA" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                    </iframe>
                </div>
                </div>
                
            </fuse-vertical-navigation>

        </div>
    `,
    styles: [
        `
            info-sidebar
                fuse-vertical-navigation
                .fuse-vertical-navigation-wrapper {
                box-shadow: none !important;
            }
        `,
    ],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        FuseVerticalNavigationComponent,
        MatIconModule,
        MatProgressBarModule,
    ],
})
export class InfoSidebarComponent {
    menuData: FuseNavigationItem[];
    public currentScreen: string;
    /**
     * Constructor
     */
    changeScreen(name: string) {
        this.currentScreen = name;
    }
    constructor(

    ) {
        this.menuData = [
            {
                title: 'Texto Explicativo',
                subtitle: 'Texto explicativo para cada',
                type: 'basic',
                link: 'p0',

            },
        ]
    }
}
