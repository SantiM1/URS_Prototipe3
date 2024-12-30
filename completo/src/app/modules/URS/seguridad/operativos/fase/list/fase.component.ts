import {
    AsyncPipe,
    CurrencyPipe,
    NgClass,
    NgTemplateOutlet,
} from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    inject,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule,
    UntypedFormBuilder,
    UntypedFormControl,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
    MatCheckboxChange,
    MatCheckboxModule,
} from '@angular/material/checkbox';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertService } from '@fuse/components/alert';
import { FuseFullscreenComponent } from '@fuse/components/fullscreen';
import { FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { NotificationsComponent } from 'app/layout/common/notifications/notifications.component';
import { SearchComponent } from 'app/layout/common/search/search.component';
import { UserComponent } from 'app/layout/common/user/user.component';
import { MessagesComponent } from 'app/modules/URS/portal-servicios/landing-signed-in/landing-messages/messages.component';
import { FaseService } from 'app/modules/URS/seguridad/operativos/fase.service';
import {
    FasePagination,
    FaseProduct,
} from 'app/modules/URS/seguridad/operativos/operativos.types';
import {
    Observable,
    Subject,
    debounceTime,
    map,
    merge,
    switchMap,
    takeUntil,
} from 'rxjs';

@Component({
    selector: 'fases-list',
    templateUrl: './fase.component.html',
    styles: [
        /* language=SCSS */ // Table sizes 
        `
            .fase-grid {
                grid-template-columns: 48px auto 40px;

                @screen sm {
                    grid-template-columns: 10px auto 112px 72px;
                }

                @screen md {
                    grid-template-columns: 10px 112px 300px 112px 72px;
                }

                @screen lg {
                    grid-template-columns: 0px 10px 75px 75px auto 100px 35px 100px 100px 50px 100px;
                }
            }
        `,
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: fuseAnimations,
    standalone: true,
    imports: [
        MatProgressBarModule,
        MatFormFieldModule,
        MatExpansionModule,
        MatIconModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatAccordion,
        MatButtonModule,
        MatSortModule,
        NgTemplateOutlet,
        MatPaginatorModule,
        NgClass,
        MatSlideToggleModule,
        MatSelectModule,
        MatOptionModule,
        MatCheckboxModule,
        MatRippleModule,
        AsyncPipe,
        CurrencyPipe,
        
    ],
})
export class FaseListComponent
    implements OnInit, AfterViewInit, OnDestroy
{
    @ViewChild(MatPaginator) private _paginator: MatPaginator;
    @ViewChild(MatSort) private _sort: MatSort;
    
    products$: Observable<FaseProduct[]>;
   
    flashMessage: 'success' | 'error' | null = null;
    isLoading: boolean = false;
    pagination: FasePagination;
    searchInputControl: UntypedFormControl = new UntypedFormControl();
    selectedProduct: FaseProduct | null = null;
    selectedProductForm: UntypedFormGroup;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    private _fuseAlertService = inject(FuseAlertService);
    crearSegment:boolean=false;
    isChecked=false;

    toggleCheck(){
        this.isChecked = !this.isChecked;
    }
    /**
     * Constructor
     */
    constructor(
        
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseConfirmationService: FuseConfirmationService,
        private _formBuilder: UntypedFormBuilder,
        private _faseService: FaseService,
        private router: Router,
        private route: ActivatedRoute,
        
    ) {}

     
    
    crearFase() {
       this.crearSegment = true
       //this.router.navigate(['crear'], { relativeTo: this.route });
    }
    cancelar(){
        /* Open the confirmation dialog
        const confirmation = this._fuseConfirmationService.open({
            title: 'Cancelar creación de fase',
            message:
                '',
            actions: {
                confirm: {
                    label: 'Borrar',
                },
            },
            
        icon: {
            show: true,
            name: 'heroicons_outline:exclamation-triangle',
            color: 'error',
        },
        });*/
        this.crearSegment = false
    }
    crear(name: string):void{
        // Open the confirmation dialog
        const confirmation = this._fuseConfirmationService.open({
            title: 'Creación de fase exitosa',
            message:
                'El fase fue creado de manera exitosa',
            actions: {
                confirm: {
                    label: 'Confirmar',
                    color: 'accent',
                },
            },
            
        icon: {
            show: true,
            name: 'heroicons_outline:check-circle',
            color: 'success',
        },
        });
        this.crearSegment = false
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Create the selected product form
        this.selectedProductForm = this._formBuilder.group({
            id: [''],
            inst:[''],
            op: [''],
            mod: [''],
            nomf: [''],
            idf: [''],
            f_ini: [''],
            f_fin:[''],
            f_ing: [''],
            f_des: [''],
            active: ['']
        
        });

        

        // Get the pagination
        this._faseService.pagination$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((pagination: FasePagination) => {
                // Update the pagination
                this.pagination = pagination;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Get the products
        this.products$ = this._faseService.products$;

        // Subscribe to search input field value changes
        this.searchInputControl.valueChanges
            .pipe(
                takeUntil(this._unsubscribeAll),
                debounceTime(300),
                switchMap((query) => {
                    this.closeDetails();
                    this.isLoading = true;
                    return this._faseService.getProducts(
                        0,
                        10,
                        'name',
                        'asc',
                        query
                    );
                }),
                map(() => {
                    this.isLoading = false;
                })
            )
            .subscribe();
    }

    /**
     * After view init
     */
    ngAfterViewInit(): void {
        if (this._sort && this._paginator) {
            // Set the initial sort
            this._sort.sort({
                id: 'name',
                start: 'asc',
                disableClear: true,
            });

            // Mark for check
            this._changeDetectorRef.markForCheck();

            // If the user changes the sort order...
            this._sort.sortChange
                .pipe(takeUntil(this._unsubscribeAll))
                .subscribe(() => {
                    // Reset back to the first page
                    this._paginator.pageIndex = 0;

                    // Close the details
                    this.closeDetails();
                });

            // Get products if sort or page changes
            merge(this._sort.sortChange, this._paginator.page)
                .pipe(
                    switchMap(() => {
                        this.closeDetails();
                        this.isLoading = true;
                        return this._faseService.getProducts(
                            this._paginator.pageIndex,
                            this._paginator.pageSize,
                            this._sort.active,
                            this._sort.direction
                        );
                    }),
                    map(() => {
                        this.isLoading = false;
                    })
                )
                .subscribe();
        }
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle product details
     *
     * @param productId
     */
    toggleDetails(productId: string): void {
        // If the product is already selected...
        if (this.selectedProduct && this.selectedProduct.id === productId) {
            // Close the details
            this.closeDetails();
            return;
        }

        // Get the product by id
        this._faseService
            .getProductById(productId)
            .subscribe((product) => {
                // Set the selected product
                this.selectedProduct = product;

                // Fill the form
                this.selectedProductForm.patchValue(product);

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });
    }

    /**
     * Close the details
     */
    closeDetails(): void {
        this.selectedProduct = null;
    }

    /**
     * Cycle through images of selected product
     */
    cycleImages(forward: boolean = true): void {
        // Get the image count and current image index
        const count = this.selectedProductForm.get('images').value.length;
        const currentIndex =
            this.selectedProductForm.get('currentImageIndex').value;

        // Calculate the next and previous index
        const nextIndex = currentIndex + 1 === count ? 0 : currentIndex + 1;
        const prevIndex = currentIndex - 1 < 0 ? count - 1 : currentIndex - 1;

        // If cycling forward...
        if (forward) {
            this.selectedProductForm
                .get('currentImageIndex')
                .setValue(nextIndex);
        }
        // If cycling backwards...
        else {
            this.selectedProductForm
                .get('currentImageIndex')
                .setValue(prevIndex);
        }
    }

    /**
     * Create product
     */
    createProduct(): void {
        // Create the product
        this._faseService.createProduct().subscribe((newProduct) => {
            // Go to new product
            this.selectedProduct = newProduct;

            // Fill the form
            this.selectedProductForm.patchValue(newProduct);

            // Mark for check
            this._changeDetectorRef.markForCheck();
        });
    }

    /**
     * Update the selected product using the form data
     */
    updateSelectedProduct(): void {
        // Get the product object
        const product = this.selectedProductForm.getRawValue();

        // Remove the currentImageIndex field
        delete product.currentImageIndex;

        // Update the product on the server
        this._faseService
            .updateProduct(product.id, product)
            .subscribe(() => {
                // Show a success message
                this.showFlashMessage('success');
            });
    }

    /**
     * Delete the selected product using the form data
     */
    deleteSelectedProduct(): void {
        // Open the confirmation dialog
        const confirmation = this._fuseConfirmationService.open({
            title: 'Borrar fase',
            message:
                '¿Estás seguro que deseas borrar este fase? Esta acción es permanente',
            actions: {
                confirm: {
                    label: 'Borrar',
                },
            },
        });

        // Subscribe to the confirmation dialog closed action
        confirmation.afterClosed().subscribe((result) => {
            // If the confirm button pressed...
            if (result === 'confirmed') {
                // Get the product object
                const product = this.selectedProductForm.getRawValue();

                // Delete the product on the server
                this._faseService
                    .deleteProduct(product.id)
                    .subscribe(() => {
                        // Close the details
                        this.closeDetails();
                    });
            }
        });
    }
    /**
     * Delete the selected product using the form data
     */
    deleteProduct(productId: string): void {
        // Open the confirmation dialog
        const confirmation = this._fuseConfirmationService.open({
            title: 'Borrar fase',
            message:
                '¿Estás seguro que deseas borrar este fase? Esta acción es permanente',
            actions: {
                confirm: {
                    label: 'Borrar',
                },
            },
        });

        // Subscribe to the confirmation dialog closed action
        confirmation.afterClosed().subscribe((result) => {
            // If the confirm button pressed...
            if (result === 'confirmed') {
                
                // Delete the product on the server
                this._faseService
                    .deleteProduct(productId)
                    .subscribe(() => {
                        // Close the details
                        this.closeDetails();
                    });
            }
        });
    }


    /**
     * Show flash message
     */
    showFlashMessage(type: 'success' | 'error'): void {
        // Show the message
        this.flashMessage = type;

        // Mark for check
        this._changeDetectorRef.markForCheck();

        // Hide it after 3 seconds
        setTimeout(() => {
            this.flashMessage = null;

            // Mark for check
            this._changeDetectorRef.markForCheck();
        }, 3000);
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }
}
