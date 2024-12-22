import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Router } from '@angular/router';
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
                    Ayuda
                    </div>
                    <div class="mx-6 mb-6 text-lg tracking-tighter"> 
                    {{helpText}}
                    </div>
                     <div class="mx-6 text-2xl font-bold tracking-tighter">
                    {{title}}
                    </div>
                    <div class="mx-6 text-lg tracking-tighter"> 
                    {{helpText2}}
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
    title ='x'
    helpText = 'y';
    helpText2 = 'z'
    
    text = ['El proceso de aceptación de términos y condiciones es crucial para asegurar la transparencia y el cumplimiento de las normativas legales. Este mecanismo también garantiza que solo se procesen los datos de usuarios que han dado su consentimiento explícito, evitando malentendidos y asegurando la responsabilidad en el manejo de la información.',
        'Encuentra la ubicación del hogar, anotando la provincia, cantón y parroquia en la que se encuentra, considerando si esta es rural o urbana. Puedes utilizar el mapa interactivo como guía.',
        'Selecciona el tipo de material que más se acerque al que existe en el hogar, buscando el de mayor proporción. Si hay varios materiales, seleccionar el de mayor calidad y costo.',
        'En un hogar, un cuarto es un espacio con cuatro paredes que puede tener una variedad de propósitos. En esta categoría no se consideran cuartos de cocina, baño, garajes o aquellos dedicados a negocios. ',
        'Asegura de completar las preguntas correctamente antes de finalizar la encuesta. Puedes actualizar las respuestas en el futuro.'
    ]
    titles = ['Tomar en cuenta', 
        'Tomar en cuenta: Rural o Urbano',
        'Tomar en cuenta: Calidad del Material',
        'Tomar en cuenta: Dormitorios'
    ]
    text2 = ['Si no acepta los términos y condiciones, no se podrá realizar el ingreso o modificación de datos, y por tanto no asumimos responsabilidad sobre los datos ingresados sin su consentimiento explícito.',
       `Se considera urbano cuando existen características de amanzamaniento o agrupaciones de viviendas en 10 o más manzanas. Zonas más disperas y con menos viviendas se consideran rurales. `,
        'La calidad del material se clasifica en Malo, Regular y Bueno con el indicador a la derecha. Si no tiene rasgos de desgaste se considera Bueno, si tiene desgaste, pero este no presenta daño estructural o peligro inminente es Regular y las características son dañinas para los habitantes, se considera como Malo.',
        'Son cuartos exclusivos para dormir, en los que no se comparte con otra actividad. Por ejemplo, si es un hogar donde se cocina y duerme en un mismo cuarto (no se consideran divisiones temporales como cartones o biombos como cuartos distintos) los cuartos exclusivos para dormir son 0. ',
        '¡Bienvenido a la Unidad del Registro Social!'
    
    ]
    /**
     * Constructor
     */
    changeScreen(name: string) {
        this.currentScreen = name;
    }
    constructor(
    private router: Router
    ) {
        router.events.subscribe((val) => {
            // see also 
            console.log(this.router.url.slice(-1));
            this.helpText = this.text[+this.router.url.slice(-1)];
            this.title = this.titles[+this.router.url.slice(-1)];
            this.helpText2 = this.text2[+this.router.url.slice(-1)];
        });
    }
}
