import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Router,
    RouterStateSnapshot,
    Routes,
    UrlMatchResult,
    UrlSegment,
} from '@angular/router';
import { UserDetailsComponent } from 'app/modules/admin/portal/inbox-solicitud/details/details.component';
import { UserEmptyDetailsComponent } from 'app/modules/admin/portal/inbox-solicitud/empty-details/empty-details.component';
import { UserListComponent } from 'app/modules/admin/portal/inbox-solicitud/list/list.component';
import { UserComponent } from 'app/modules/admin/portal/inbox-solicitud/inbox-solicitud.component';
import { UserService } from 'app/modules/admin/portal/inbox-solicitud/inbox-solicitud.service';
import { UserSettingsComponent } from 'app/modules/admin/portal/inbox-solicitud/settings/settings.component';
import { isEqual } from 'lodash-es';
import { catchError, finalize, forkJoin, throwError } from 'rxjs';

/**
 * User custom route matcher
 *
 * @param url
 */
const inboxRouteMatcher: (url: UrlSegment[]) => UrlMatchResult = (
    url: UrlSegment[]
) => {
    // Prepare consumed url and positional parameters
    let consumed = url;
    const posParams = {};

    // Settings
    if (url[0].path === 'settings') {
        // Do not match
        return null;
    }
    // Filter or label
    else if (url[0].path === 'filter' || url[0].path === 'label') {
        posParams[url[0].path] = url[1];
        posParams['page'] = url[2];

        // Remove the id if exists
        if (url[3]) {
            consumed = url.slice(0, -1);
        }
    }
    // Folder
    else {
        posParams['folder'] = url[0];
        posParams['page'] = url[1];

        // Remove the id if exists
        if (url[2]) {
            consumed = url.slice(0, -1);
        }
    }

    return {
        consumed,
        posParams,
    };
};

/**
 * User custom guards and resolvers runner
 *
 * @param from
 * @param to
 */
const inboxRunGuardsAndResolvers: (
    from: ActivatedRouteSnapshot,
    to: ActivatedRouteSnapshot
) => boolean = (from: ActivatedRouteSnapshot, to: ActivatedRouteSnapshot) => {
    // If we are navigating from mail to mails, meaning there is an id in
    // from's deepest first child and there isn't one in the to's, we will
    // trigger the resolver

    // Get the current activated route of the 'from'
    let fromCurrentRoute = from;
    while (fromCurrentRoute.firstChild) {
        fromCurrentRoute = fromCurrentRoute.firstChild;
    }

    // Get the current activated route of the 'to'
    let toCurrentRoute = to;
    while (toCurrentRoute.firstChild) {
        toCurrentRoute = toCurrentRoute.firstChild;
    }

    // Trigger the resolver if the condition met
    if (
        fromCurrentRoute.paramMap.get('id') &&
        !toCurrentRoute.paramMap.get('id')
    ) {
        return true;
    }

    // If the from and to params are equal, don't trigger the resolver
    const fromParams = {};
    const toParams = {};

    from.paramMap.keys.forEach((key) => {
        fromParams[key] = from.paramMap.get(key);
    });

    to.paramMap.keys.forEach((key) => {
        toParams[key] = to.paramMap.get(key);
    });

    if (isEqual(fromParams, toParams)) {
        return false;
    }

    // Trigger the resolver on other cases
    return true;
};

/**
 * Mails resolver
 *
 * @param route
 * @param state
 */
const mailsResolver = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const inboxService = inject(UserService);
    const router = inject(Router);

    // Don't allow page param to go below 1
    if (
        route.paramMap.get('page') &&
        parseInt(route.paramMap.get('page'), 10) <= 0
    ) {
        // Get the parent url
        const url = state.url.split('/').slice(0, -1).join('/') + '/1';

        // Navigate to there
        router.navigateByUrl(url);

        // Don't allow request to go through
        return false;
    }

    // Create and build the sources array
    const sources = [];

    // If folder is set on the parameters...
    if (route.paramMap.get('folder')) {
        sources.push(
            inboxService.getMailsByFolder(
                route.paramMap.get('folder'),
                route.paramMap.get('page')
            )
        );
    }

    // If filter is set on the parameters...
    if (route.paramMap.get('filter')) {
        sources.push(
            inboxService.getMailsByFilter(
                route.paramMap.get('filter'),
                route.paramMap.get('page')
            )
        );
    }

    // If label is set on the parameters...
    if (route.paramMap.get('label')) {
        sources.push(
            inboxService.getMailsByLabel(
                route.paramMap.get('label'),
                route.paramMap.get('page')
            )
        );
    }

    // Fork join all the sources
    return forkJoin(sources).pipe(
        finalize(() => {
            // If there is no selected mail, reset the mail every
            // time mail list changes. This will ensure that the
            // mail will be reset while navigating between the
            // folders/filters/labels, but it won't reset on page
            // reload if we are reading a mail.

            // Try to get the current activated route
            let currentRoute = route;
            while (currentRoute.firstChild) {
                currentRoute = currentRoute.firstChild;
            }

            // Make sure there is no 'id' parameter on the current route
            if (!currentRoute.paramMap.get('id')) {
                // Reset the mail
                inboxService.resetMail().subscribe();
            }
        }),

        // Error here means the requested page is not available
        catchError((error) => {
            // Log the error
            console.error(error.message);

            // Get the parent url and append the last possible page number to the parent url
            const url =
                state.url.split('/').slice(0, -1).join('/') +
                '/' +
                error.pagination.lastPage;

            // Navigate to there
            router.navigateByUrl(url);

            // Throw an error
            return throwError(error);
        })
    );
};

/**
 * Mail resolver
 *
 * @param route
 * @param state
 */
const mailResolver = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const inboxService = inject(UserService);
    const router = inject(Router);

    return inboxService.getMailById(route.paramMap.get('id')).pipe(
        // Error here means the requested mail is either
        // not available on the requested page or not
        // available at all
        catchError((error) => {
            // Log the error
            console.error(error);

            // Get the parent url
            const parentUrl = state.url.split('/').slice(0, -1).join('/');

            // Navigate to there
            router.navigateByUrl(parentUrl);

            // Throw an error
            return throwError(error);
        })
    );
};

export default [
    {
        path: '',
        redirectTo: 'inbox/1',
        pathMatch: 'full',
    },
    {
        path: 'filter/:filter',
        redirectTo: 'filter/:filter/1',
        pathMatch: 'full',
    },
    {
        path: 'label/:label',
        redirectTo: 'label/:label/1',
        pathMatch: 'full',
    },
    {
        path: ':folder',
        redirectTo: ':folder/1',
        pathMatch: 'full',
    },
    {
        path: '',
        component: UserComponent,
        resolve: {
            filters: () => inject(UserService).getFilters(),
            folders: () => inject(UserService).getFolders(),
            labels: () => inject(UserService).getLabels(),
        },
        children: [
            {
                component: UserListComponent,
                matcher: inboxRouteMatcher,
                runGuardsAndResolvers: inboxRunGuardsAndResolvers,
                resolve: {
                    mails: mailsResolver,
                },
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        component: UserEmptyDetailsComponent,
                    },
                    {
                        path: ':id',
                        component: UserDetailsComponent,
                        resolve: {
                            mail: mailResolver,
                        },
                    },
                ],
            },
            {
                path: 'settings',
                component: UserSettingsComponent,
            },
        ],
    },
] as Routes;
