import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
    DispositivosPagination,
    DispositivosProduct,

} from 'app/modules/URS/seguridad/dispositivos/dispositivos.types';
import {
    BehaviorSubject,
    Observable,
    filter,
    map,
    of,
    switchMap,
    take,
    tap,
    throwError,
} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DispositivosService {
    // Private
    private _pagination: BehaviorSubject<DispositivosPagination | null> =
        new BehaviorSubject(null);
    private _product: BehaviorSubject<DispositivosProduct | null> =
        new BehaviorSubject(null);
    private _products: BehaviorSubject<DispositivosProduct[] | null> =
        new BehaviorSubject(null);


    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------


    /**
     * Getter for pagination
     */
    get pagination$(): Observable<DispositivosPagination> {
        return this._pagination.asObservable();
    }

    /**
     * Getter for product
     */
    get product$(): Observable<DispositivosProduct> {
        return this._product.asObservable();
    }

    /**
     * Getter for products
     */
    get products$(): Observable<DispositivosProduct[]> {
        return this._products.asObservable();
    }
   // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    

    /**
     * Get products
     *
     *
     * @param page
     * @param size
     * @param sort
     * @param order
     * @param search
     */
    getProducts(
        page: number = 0,
        size: number = 10,
        sort: string = 'name',
        order: 'asc' | 'desc' | '' = 'asc',
        search: string = ''
    ): Observable<{
        pagination: DispositivosPagination;
        products: DispositivosProduct[];
    }> {
        return this._httpClient
            .get<{
                pagination: DispositivosPagination;
                products: DispositivosProduct[];
            }>('api/apps/dispositivos/products', {
                params: {
                    page: '' + page,
                    size: '' + size,
                    sort,
                    order,
                    search,
                },
            })
            .pipe(
                tap((response) => {
                    this._pagination.next(response.pagination);
                    this._products.next(response.products);
                })
            );
    }

    /**
     * Get product by id
     */
    getProductById(id: string): Observable<DispositivosProduct> {
        return this._products.pipe(
            take(1),
            map((products) => {
                // Find the product
                const product = products.find((item) => item.id === id) || null;

                // Update the product
                this._product.next(product);

                // Return the product
                return product;
            }),
            switchMap((product) => {
                if (!product) {
                    return throwError(
                        'Could not found product with id of ' + id + '!'
                    );
                }

                return of(product);
            })
        );
    }

    /**
     * Create product
     */
    createProduct(): Observable<DispositivosProduct> {
        return this.products$.pipe(
            take(1),
            switchMap((products) =>
                this._httpClient
                    .post<DispositivosProduct>(
                        'api/apps/dispositivos/product',
                        {}
                    )
                    .pipe(
                        map((newProduct) => {
                            // Update the products with the new product
                            this._products.next([newProduct, ...products]);

                            // Return the new product
                            return newProduct;
                        })
                    )
            )
        );
    }

    /**
     * Update product
     *
     * @param id
     * @param product
     */
    updateProduct(
        id: string,
        product: DispositivosProduct
    ): Observable<DispositivosProduct> {
        return this.products$.pipe(
            take(1),
            switchMap((products) =>
                this._httpClient
                    .patch<DispositivosProduct>(
                        'api/apps/dispositivos/product',
                        {
                            id,
                            product,
                        }
                    )
                    .pipe(
                        map((updatedProduct) => {
                            // Find the index of the updated product
                            const index = products.findIndex(
                                (item) => item.id === id
                            );

                            // Update the product
                            products[index] = updatedProduct;

                            // Update the products
                            this._products.next(products);

                            // Return the updated product
                            return updatedProduct;
                        }),
                        switchMap((updatedProduct) =>
                            this.product$.pipe(
                                take(1),
                                filter((item) => item && item.id === id),
                                tap(() => {
                                    // Update the product if it's selected
                                    this._product.next(updatedProduct);

                                    // Return the updated product
                                    return updatedProduct;
                                })
                            )
                        )
                    )
            )
        );
    }

    /**
     * Delete the product
     *
     * @param id
     */
    deleteProduct(id: string): Observable<boolean> {
        return this.products$.pipe(
            take(1),
            switchMap((products) =>
                this._httpClient
                    .delete('api/apps/dispositivos/product', {
                        params: { id },
                    })
                    .pipe(
                        map((isDeleted: boolean) => {
                            // Find the index of the deleted product
                            const index = products.findIndex(
                                (item) => item.id === id
                            );

                            // Delete the product
                            products.splice(index, 1);

                            // Update the products
                            this._products.next(products);

                            // Return the deleted status
                            return isDeleted;
                        })
                    )
            )
        );
    }

}
