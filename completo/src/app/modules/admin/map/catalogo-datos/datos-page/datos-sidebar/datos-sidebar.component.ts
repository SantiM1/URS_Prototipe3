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
                    Filtros de Búsqueda
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
                title: 'Filtros de Capas Geográficas',
                subtitle: 'Filtrar las capas disponibles en el geoportal',
                type: 'collapsable',
                children: [
                    {
                        title: '☐ Nombre de la capa',
                        type: 'basic',
                    },
                    {
                        title: '☐ Tipo de geometría',
                        type: 'basic',
                    },
                    {
                        title: '☐ Fuente de datos',
                        type: 'basic',
                    },
                    {
                        title: '☐ Fecha de publicación',
                        type: 'basic',
                    },
                ],
            },
            {
                title: 'Filtros de Datos Espaciales',
                subtitle: 'Buscar información basada en atributos espaciales',
                type: 'collapsable',
                children: [
                    {
                        title: '☐ Extensión geográfica',
                        type: 'basic',
                    },
                    {
                        title: '☐ Sistema de coordenadas',
                        type: 'basic',
                    },
                    {
                        title: '☐ Escala de resolución',
                        type: 'basic',
                    },
                ],
            },
            {
                title: 'Filtros Avanzados',
                subtitle: 'Opciones avanzadas para refinar los resultados',
                type: 'collapsable',
                children: [
                    {
                        title: '☐ Palabras clave',
                        type: 'basic',
                    },
                    {
                        title: '☐ Categoría temática',
                        type: 'basic',
                    },
                    {
                        title: '☐ Estado de disponibilidad',
                        type: 'basic',
                    },
                    {
                        title: '☐ Última actualización',
                        type: 'basic',
                    },
                ],
            },
        ];
        
    }
}
