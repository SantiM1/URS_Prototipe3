import { Injectable } from '@angular/core';
import { FuseMockApiService, FuseMockApiUtils } from '@fuse/lib/mock-api';
import {

    operativos as operativosData,

} from 'app/mock-api/apps/operativos/data';
import { assign, cloneDeep } from 'lodash-es';

@Injectable({ providedIn: 'root' })
export class OperativosMockApi {

    private _operativos: any[] = operativosData;


    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService) {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void {
      
      
        // -----------------------------------------------------------------------------------------------------
        // @ Products - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/operativos/operativos', 300)
            .reply(({ request }) => {
                // Get available queries
                const search = request.params.get('search');
                const sort = request.params.get('sort') || 'name';
                const order = request.params.get('order') || 'asc';
                const page = parseInt(request.params.get('page') ?? '1', 10);
                const size = parseInt(request.params.get('size') ?? '10', 10);

                // Clone the operativos
                let operativos: any[] | null = cloneDeep(this._operativos);

                // Sort the operativos
                if (sort === 'sku' || sort === 'name' || sort === 'active') {
                    operativos.sort((a, b) => {
                        const fieldA = a[sort].toString().toUpperCase();
                        const fieldB = b[sort].toString().toUpperCase();
                        return order === 'asc'
                            ? fieldA.localeCompare(fieldB)
                            : fieldB.localeCompare(fieldA);
                    });
                } else {
                    operativos.sort((a, b) =>
                        order === 'asc' ? a[sort] - b[sort] : b[sort] - a[sort]
                    );
                }

                // If search exists...
                if (search) {
                    // Filter the operativos
                    operativos = operativos.filter(
                        (contact) =>
                            contact.name &&
                            contact.name
                                .toLowerCase()
                                .includes(search.toLowerCase())
                    );
                }

                // Paginate - Start
                const operativosLength = operativos.length;

                // Calculate pagination details
                const begin = page * size;
                const end = Math.min(size * (page + 1), operativosLength);
                const lastPage = Math.max(Math.ceil(operativosLength / size), 1);

                // Prepare the pagination object
                let pagination = {};

                // If the requested page number is bigger than
                // the last possible page number, return null for
                // operativos but also send the last possible page so
                // the app can navigate to there
                if (page > lastPage) {
                    operativos = null;
                    pagination = {
                        lastPage,
                    };
                } else {
                    // Paginate the results by size
                    operativos = operativos.slice(begin, end);

                    // Prepare the pagination mock-api
                    pagination = {
                        length: operativosLength,
                        size: size,
                        page: page,
                        lastPage: lastPage,
                        startIndex: begin,
                        endIndex: end - 1,
                    };
                }

                // Return the response
                return [
                    200,
                    {
                        operativos,
                        pagination,
                    },
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Product - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/operativos/operativo')
            .reply(({ request }) => {
                // Get the id from the params
                const id = request.params.get('id');

                // Clone the operativos
                const operativos = cloneDeep(this._operativos);

                // Find the operativo
                const operativo = operativos.find((item) => item.id === id);

                // Return the response
                return [200, operativo];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Product - POST
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPost('api/apps/operativos/operativo')
            .reply(() => {
                // Generate a new operativo
                const newProduct = {
                    id: FuseMockApiUtils.guid(),
                    name: 'Un nuevo operativo',
                    ced: "",
                    tel: "",
                    email: 'Ingresa tu correo',
                    active: true,
                    thumbnail: 'images/avatars/male-16.jpg',
                };

                // Unshift the new operativo
                this._operativos.unshift(newProduct);

                // Return the response
                return [200, newProduct];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Product - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPatch('api/apps/operativos/operativo')
            .reply(({ request }) => {
                // Get the id and operativo
                const id = request.body.id;
                const operativo = cloneDeep(request.body.operativo);

                // Prepare the updated operativo
                let updatedProduct = null;

                // Find the operativo and update it
                this._operativos.forEach((item, index, operativos) => {
                    if (item.id === id) {
                        // Update the operativo
                        operativos[index] = assign({}, operativos[index], operativo);

                        // Store the updated operativo
                        updatedProduct = operativos[index];
                    }
                });

                // Return the response
                return [200, updatedProduct];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Product - DELETE
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onDelete('api/apps/operativos/operativo')
            .reply(({ request }) => {
                // Get the id
                const id = request.params.get('id');

                // Find the operativo and delete it
                this._operativos.forEach((item, index) => {
                    if (item.id === id) {
                        this._operativos.splice(index, 1);
                    }
                });

                // Return the response
                return [200, true];
            });

        }
}
