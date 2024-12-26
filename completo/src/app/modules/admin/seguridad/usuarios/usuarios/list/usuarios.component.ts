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
import { SearchComponent } from 'app/layout/common/search/search.component';
import { UserComponent } from 'app/layout/common/user/user.component';
import { MessagesComponent } from 'app/modules/admin/portal/landing-signed-in/messages/messages.component';
import { NotificationsComponent } from 'app/modules/admin/portal/landing-signed-in/notifications/notifications.component';
import { UsuarioService } from 'app/modules/admin/seguridad/usuarios/usuarios.service';
import {
    UsuarioPagination,
    UsuarioProduct,
} from 'app/modules/admin/seguridad/usuarios/usuarios.types';
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
    selector: 'usuarios-list',
    templateUrl: './usuarios.component.html',
    styles: [
        /* language=SCSS */ // Table sizes 
        `
            .usuario-grid {
                grid-template-columns: 48px auto 40px;

                @screen sm {
                    grid-template-columns: 10px auto 112px 72px;
                }

                @screen md {
                    grid-template-columns: 10px 112px 300px 112px 72px;
                }

                @screen lg {
                    grid-template-columns: 10px 35px auto 150px 200px 150px 100px 150px;
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
        UserComponent,
        NotificationsComponent,
        MessagesComponent,
        SearchComponent,
        FuseFullscreenComponent,

    ],
})
export class UsuarioListComponent
    implements OnInit, AfterViewInit, OnDestroy
{
    @ViewChild(MatPaginator) private _paginator: MatPaginator;
    @ViewChild(MatSort) private _sort: MatSort;
    
    products$: Observable<UsuarioProduct[]>;
   

    flashMessage: 'success' | 'error' | null = null;
    isLoading: boolean = false;
    pagination: UsuarioPagination;
    searchInputControl: UntypedFormControl = new UntypedFormControl();
    selectedProduct: UsuarioProduct | null = null;
    selectedProductForm: UntypedFormGroup;
    isChecked = false;

    private _unsubscribeAll: Subject<any> = new Subject<any>();
    private _fuseAlertService = inject(FuseAlertService);
    crearSegment:boolean=false;
    /**
     * Constructor
     */
    constructor(
        
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseConfirmationService: FuseConfirmationService,
        private _formBuilder: UntypedFormBuilder,
        private _usuarioService: UsuarioService,
        private router: Router,
        private route: ActivatedRoute,
        private _fuseNavigationService: FuseNavigationService,
    ) {}

    
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

    crearUsuario() {
       this.crearSegment = true
       //this.router.navigate(['crear'], { relativeTo: this.route });
    }
    cancelar(){
        /* Open the confirmation dialog
        const confirmation = this._fuseConfirmationService.open({
            title: 'Cancelar creación de usuario',
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
            title: 'Creación de usuario exitosa',
            message:
                'El usuario fue creado de manera exitosa',
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
            ced:[''],
            name: ['', [Validators.required]],
            tel: [''],
            active:[''],
            email: [''],
            
        });

        
        // Get the pagination
        this._usuarioService.pagination$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((pagination: UsuarioPagination) => {
                // Update the pagination
                this.pagination = pagination;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Get the products
        this.products$ = this._usuarioService.products$;

        // Subscribe to search input field value changes
        this.searchInputControl.valueChanges
            .pipe(
                takeUntil(this._unsubscribeAll),
                debounceTime(300),
                switchMap((query) => {
                    this.closeDetails();
                    this.isLoading = true;
                    return this._usuarioService.getProducts(
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
                        return this._usuarioService.getProducts(
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
        this._usuarioService
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
        this._usuarioService.createProduct().subscribe((newProduct) => {
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
        this._usuarioService
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
            title: 'Borrar usuario',
            message:
                '¿Estás seguro que deseas borrar este usuario? Esta acción es permanente',
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
                this._usuarioService
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
            title: 'Borrar usuario',
            message:
                '¿Estás seguro que deseas borrar este usuario? Esta acción es permanente',
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
                this._usuarioService
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

    toggleCheck(){
        this.isChecked = !this.isChecked;
    }
    
}
