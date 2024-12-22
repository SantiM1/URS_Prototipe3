import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NavigationEnd, Router } from '@angular/router';
import { FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { FuseNavigationItem } from '@fuse/components/navigation/navigation.types';

@Component({
    selector: 'form-sidebar',
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
                [name]="'form-sidebar-navigation'"
                [opened]="true"
                [autoCollapse]="false"
            >
                 <div fuseVerticalNavigationContentHeader>
                    <div class="mx-6 text-3xl font-bold tracking-tighter">
                    Preguntas
                    </div>
                    <!-- Storage -->
                    <div class="mx-6 mt-2">
                        <div class="flex items-center">
                            <mat-icon
                            class="mr-2 icon-size-5"
                            [svgIcon]="'heroicons_solid:academic-cap'"
                        ></mat-icon>
                        <div class="text-lg font-semibold">Progreso</div>
                    </div>
                        <div class="mt-4 flex flex-auto flex-col">
                            <span class="mb-3 text-sm leading-none"
                            >{{qnum}} de 24 preguntas completadas</span
                        >
                        <mat-progress-bar
                            [mode]="'determinate'"
                            [color]="'primary'"
                            value={{qvalue}}
                        ></mat-progress-bar>
                        </div>
                    </div>
                </div>
    </fuse-vertical-navigation>

        </div>
    `,
    styles: [
        `
            form-sidebar
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
export class FormSidebarComponent {
    menuData: FuseNavigationItem[];
    public currentScreen: string;
    public qnum = 0
    public qvalue = this.qnum/24*100;
    qnums = [0, 7, 14, 16, 24]

    
    constructor(
        private router: Router
        
    ) {
        this.menuData = [
            {
                type: 'divider',
            },
            {
                title: 'Aceptación de declaración',
                subtitle: 'del Formulario del Registro Social',
                type: 'basic',
                link: 'p0',
                
                function: () => {
                    this.qnum = 0
                    this.qvalue = this.qnum/24*100;
                   
                }
            },
            {
                title: 'Sección I',
                subtitle: 'Identificación y Ubicación Geográfica de la Vivienda',
                type: 'group',
                children: [
                    {
                        title: 'Datos Generales',
                        type: 'basic',
                        icon: 'heroicons_outline:cog-8-tooth',
                        link: 'p1',
                        function: () => {
                            this.qnum = 7
                            this.qvalue = this.qnum/24*100;
                        }
                    },
                    {
                        title: 'Identificación Censal',
                        type: 'basic',
                        icon: 'heroicons_outline:user-circle',

                    },
                    {
                        title: 'Dirección',
                        type: 'basic',
                        icon: 'heroicons_outline:user-circle',


                    },
                ],

            },
            {
                title: 'Sección II',
                subtitle: 'Condición de Ocupación',
                type: 'group',
                children: [
                    {
                        title: 'Datos Generales',
                        type: 'basic',
                        icon: 'heroicons_outline:cog-8-tooth',

                    },

                ],
            },
            {
                title: 'Sección III',
                subtitle: 'Datos de la vivienda',
                type: 'group',
                children: [
                    {
                        title: 'Datos Generales',
                        type: 'basic',
                        icon: 'heroicons_outline:cog-8-tooth',
                    },
                    {
                        title: 'Materiales de la vivienda',
                        type: 'basic',
                        icon: 'heroicons_outline:user-circle',
                        link: 'p2',
                        function: () => {
                            this.qnum = 14
                            this.qvalue = this.qnum/24*100;
                        }
                    },
                ],
            },
            {
                title: 'Sección IV',
                subtitle: 'Datos del Hogar',
                type: 'group',
                children: [
                    {
                        title: 'Datos Generales',
                        type: 'basic',
                        icon: 'heroicons_outline:cog-8-tooth',

                    },
                    {
                        title: 'Cuartos',
                        type: 'basic',
                        icon: 'heroicons_outline:user-circle',
                        link: 'p3',
                        function: () => {
                            this.qnum = 16
                            this.qvalue = this.qnum/24*100;
                        }

                    },
                    {
                        title: 'Servicios',
                        type: 'basic',
                        icon: 'heroicons_outline:user-circle',
                    },
                ],
            },
            {
                title: 'Finalizar Encuesta',
                type: 'basic',
                link: 'p4',
                function: () => {
                    this.qnum = 24
                    this.qvalue = this.qnum/24*100;
                }
                //disabled: true,
            },

        ];
        router.events.subscribe((val) => {
            // see also 
            console.log(this.router.url.slice(-1));
            this.qnum = this.qnums[+this.router.url.slice(-1)];
            this.qvalue = this.qnum/24*100
        });
    }
}


