import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
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
                            >7 de 24 preguntas completadas</span
                        >
                        <mat-progress-bar
                            [mode]="'determinate'"
                            [color]="'primary'"
                            [value]="34.3"
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
    /**
     * Constructor
     */
    changeScreen(name: string) {
        this.currentScreen = name;
    }
    constructor(

    ) {
        this.menuData = [
            /*
            {
                title: 'Actions',
                subtitle: 'Task, project & team',
                type: 'group',
                children: [
                    {
                        title: 'Create task',
                        type: 'basic',
                        icon: 'heroicons_outline:plus-circle',
                    },
                    {
                        title: 'Create team',
                        type: 'basic',
                        icon: 'heroicons_outline:user-group',
                    },
                    {
                        title: 'Create project',
                        type: 'basic',
                        icon: 'heroicons_outline:briefcase',
                    },
                    {
                        title: 'Create user',
                        type: 'basic',
                        icon: 'heroicons_outline:user-plus',
                    },
                    {
                        title: 'Assign user or team',
                        subtitle: 'Assign to a task or a project',
                        type: 'basic',
                        icon: 'heroicons_outline:check-badge',
                    },
                ],
            },
            {
                title: 'Tasks',
                type: 'group',
                children: [
                    {
                        title: 'All tasks',
                        type: 'basic',
                        icon: 'heroicons_outline:clipboard-document-list',
                        badge: {
                            title: '49',
                            classes:
                                'px-2 bg-primary text-on-primary rounded-full',
                        },
                    },
                    {
                        title: 'Ongoing tasks',
                        type: 'basic',
                        icon: 'heroicons_outline:clipboard-document-check',
                    },
                    {
                        title: 'Completed tasks',
                        type: 'basic',
                        icon: 'heroicons_outline:clipboard-document-check',
                    },
                    {
                        title: 'Abandoned tasks',
                        type: 'basic',
                        icon: 'heroicons_outline:clipboard',
                    },
                    {
                        title: 'Assigned to me',
                        type: 'basic',
                        icon: 'heroicons_outline:user',
                    },
                    {
                        title: 'Assigned to my team',
                        type: 'basic',
                        icon: 'heroicons_outline:users',
                    },
                ],
            },
            */
            {
                type: 'divider',
            },
            {
                title: 'Aceptación de declaración',
                subtitle: 'del Formulario del Registro Social',
                type: 'basic',
                link: 'declaracion',

            },
            {
                title: 'Sección I',
                subtitle: 'Identificación y Ubicación Geográfica de la Vivienda',
                type: 'collapsable',
                children: [
                    {
                        title: 'Datos Generales',
                        type: 'basic',
                        icon: 'heroicons_outline:cog-8-tooth',
                        link: 'datos-generales'
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
                type: 'collapsable',
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
                type: 'collapsable',
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
                        link: 'materiales-vivienda'
                    },
                ],
            },
            {
                title: 'Sección IV',
                subtitle: 'Datos del Hogar',
                type: 'collapsable',
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
                        link: 'cuartos-hogar'

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
                link: 'finalizar'
                //disabled: true,
            },

        ];
    }
}
