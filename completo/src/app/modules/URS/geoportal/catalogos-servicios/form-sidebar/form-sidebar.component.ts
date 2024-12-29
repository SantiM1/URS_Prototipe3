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
                    Tipos de GeoServicios
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

            {
                type: 'divider',
            },

            {
                title: 'WMS',
                subtitle: 'Servicio de Mapas Web',
                type: 'collapsable',
                children: [
                    {
                        title: 'Es un estándar que define un “mapa” como una representación de la información geográfica en forma de un archivo de imagen digital, conveniente para la exhibición en una pantalla del computador. Los mapas producidos se generan normalmente en un formato de imagen como PNG, GIF o JPEG.',
                        type: 'basic',


                    },

                ],
            },

            {
                title: 'WFS',
                subtitle: 'Servicio de Entidades Web',
                type: 'collapsable',
                children: [
                    {
                        title: 'Es un estándar que ofrece acceso de lectura a datos vectoriales utilizando el Lenguaje de Marcas Geográficas (GML) como protocolo subyacente para realizar consultas espaciales, recuperar los datos y manipular su geometría.',
                        type: 'basic',


                    },

                ],
            },
            {
                title: 'WMTS',
                subtitle: 'Servicio de Mapas Teselados Web',
                type: 'collapsable',
                children: [
                    {
                        title: 'Es un estándar que proporciona un enfoque complementario al WMS y mejora su rendimiento mediante un pre-renderizado y almacenamiento (caché) de las teselas de mapa (tiles) para dar una respuesta más rápida a las solicitudes de los clientes, agilizando la carga de las teselas en pantalla.',
                        type: 'basic',


                    },

                ],
            },
            {
                title: 'KML',
                subtitle: 'Keyhole Markup Language',
                type: 'collapsable',
                children: [
                    {
                        title: 'Es un estándar basado en lenguaje XML que está orientado a la visualización geográfica e incluye anotaciones de mapas e imágenes. Generalmente utilizados en Google Earth y otros aplicativos de captura móvil de datos.',
                        type: 'basic',


                    },

                ],
            },
            {
                title: 'CSW',
                subtitle: 'Servicio de Catálogo Web',
                type: 'collapsable',
                children: [
                    {
                        title: 'Es un estándar que define una interfaz común para la búsqueda y consulta de metadatos relacionados a datos, servicios y recursos geográficos.',
                        type: 'basic',


                    },

                ],
            },


        ];
    }
}
