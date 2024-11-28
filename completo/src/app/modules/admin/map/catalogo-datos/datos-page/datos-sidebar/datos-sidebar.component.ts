import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { FuseNavigationItem } from '@fuse/components/navigation/navigation.types';

@Component({
    selector: 'datos-sidebar',
    template: `
        <div class="py-10">
            <!-- Add any extra content that might be supplied with the component -->
            <div class="extra-content">
                <ng-content></ng-content>
            </div>

            <!-- Fixed datos sidebar -->
            
            
            <!-- NAV -->
            <fuse-vertical-navigation
                [appearance]="'default'"
                [navigation]="menuData"
                [inner]="true"
                [mode]="'side'"
                [name]="'datos-sidebar-navigation'"
                [opened]="true"
                [autoCollapse]="false"
            >
                 <div fuseVerticalNavigationContentHeader>
                    <div class="mx-6 text-3xl font-bold tracking-tighter">
                    Tipos de GeoServicios
                    </div>
                    
                       
                </div>
    </fuse-vertical-navigation>

        </div>
    `,
    styles: [
        `
            datos-sidebar
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
export class DatosSidebarComponent {
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
                type: 'divider',
            },

            {
                title: 'Filtro',
                subtitle: 'Filtro de Mapas Web',
                type: 'collapsable',
                children: [
                    {
                        title: 'Opción 1',
                        type: 'basic',
                    },
                    {
                        title: 'Opción 2',
                        type: 'basic',
                    },
                    {
                        title: 'Opción 3',
                        type: 'basic',
                    },

                ],
            },
            {
                title: 'Filtro',
                subtitle: 'Filtro de Mapas Web',
                type: 'collapsable',
                children: [
                    {
                        title: 'Opción 1',
                        type: 'basic',
                    },
                    {
                        title: 'Opción 2',
                        type: 'basic',
                    },
                    {
                        title: 'Opción 3',
                        type: 'basic',
                    },

                ],
            },
            {
                title: 'Filtro',
                subtitle: 'Filtro de Mapas Web',
                type: 'collapsable',
                children: [
                    {
                        title: 'Opción 1',
                        type: 'basic',
                    },
                    {
                        title: 'Opción 2',
                        type: 'basic',
                    },
                    {
                        title: 'Opción 3',
                        type: 'basic',
                    },

                ],
            },

            

        ];
    }
}
