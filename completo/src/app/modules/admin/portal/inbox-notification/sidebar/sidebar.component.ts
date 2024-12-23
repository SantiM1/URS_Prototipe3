import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {
    FuseNavigationItem,
    FuseNavigationService,
    FuseVerticalNavigationComponent,
} from '@fuse/components/navigation';
import { UserComposeComponent } from 'app/modules/admin/portal/inbox-solititud/compose/compose.component';
import { labelColorDefs } from 'app/modules/admin/portal/inbox-solititud/inbox.constants';
import { UserService } from 'app/modules/admin/portal/inbox-solititud/inbox.service';
import {
    MailFilter,
    MailFolder,
    MailLabel,
} from 'app/modules/admin/portal/inbox-solititud/inbox.types';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'inbox-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [MatButtonModule, MatIconModule, FuseVerticalNavigationComponent],
})
export class UserSidebarComponent implements OnInit, OnDestroy {
    filters: MailFilter[];
    folders: MailFolder[];
    labels: MailLabel[];
    menuData: FuseNavigationItem[] = [];
    private _filtersMenuData: FuseNavigationItem[] = [];
    private _foldersMenuData: FuseNavigationItem[] = [];
    private _labelsMenuData: FuseNavigationItem[] = [];
    private _otherMenuData: FuseNavigationItem[] = [];
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _inboxService: UserService,
        private _matDialog: MatDialog,
        private _fuseNavigationService: FuseNavigationService
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        
        // Folders
        this._inboxService.folders$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((folders: MailFolder[]) => {
                this.folders = folders;

                // Generate menu links
                this._generateFoldersMenuLinks();

                // Update navigation badge
                this._updateNavigationBadge(folders);
            });

        // Labels
        this._inboxService.labels$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((labels: MailLabel[]) => {
                this.labels = labels;

                // Generate menu links
                this._generateLabelsMenuLinks();
            });

        // Generate other menu links
        this._generateOtherMenuLinks();
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
     * Open compose dialog
     */
    openComposeDialog(): void {
        // Open the dialog
        const dialogRef = this._matDialog.open(UserComposeComponent);

        dialogRef.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Generate menus for folders
     *
     * @private
     */
    private _generateFoldersMenuLinks(): void {
        // Reset the folders menu data
        this._foldersMenuData = [];

        // Iterate through the folders
        this.folders.forEach((folder) => {
            // Generate menu item for the folder
            const menuItem: FuseNavigationItem = {
                id: folder.id,
                title: folder.title,
                type: 'basic',
                icon: folder.icon,
                link: '/portal/inbox/' + folder.slug,
            };

            // If the count is available and is bigger than zero...
            if (folder.count && folder.count > 0) {
                // Add the count as a badge
                menuItem['badge'] = {
                    title: folder.count + '',
                };
            }

            // Push the menu item to the folders menu data
            this._foldersMenuData.push(menuItem);
        });

        // Update the menu data
        this._updateMenuData();
    }

    
    /**
     * Generate menus for labels
     *
     * @private
     */
    private _generateLabelsMenuLinks(): void {
        // Reset the labels menu
        this._labelsMenuData = [];

        // Iterate through the labels
        this.labels.forEach((label) => {
            // Generate menu item for the label
            this._labelsMenuData.push({
                id: label.id,
                title: label.title,
                type: 'basic',
                icon: 'heroicons_outline:tag',
                classes: {
                    icon: labelColorDefs[label.color].text,
                },
                link: '/portal/inbox/label/' + label.slug,
            });
        });

        // Update the menu data
        this._updateMenuData();
    }

    /**
     * Generate other menus
     *
     * @private
     */
    private _generateOtherMenuLinks(): void {
        // Settings menu
        this._otherMenuData.push({
            title: 'Settings',
            type: 'basic',
            icon: 'heroicons_outline:cog-8-tooth',
            link: '/portal/inbox/settings',
        });

        // Update the menu data
        this._updateMenuData();
    }

    /**
     * Update the menu data
     *
     * @private
     */
    private _updateMenuData(): void {
        this.menuData = [
            {
                title: 'Solicitudes',
                type: 'group',
                children: [...this._foldersMenuData],
            },
           
            
        ];
    }

    /**
     * Update the navigation badge using the
     * unread count of the inbox folder
     *
     * @param folders
     * @private
     */
    private _updateNavigationBadge(folders: MailFolder[]): void {
        // Get the inbox folder
        const inboxFolder = this.folders.find(
            (folder) => folder.slug === 'inbox'
        );

        // Get the component -> navigation data -> item
        const mainNavigationComponent =
            this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(
                'mainNavigation'
            );

        // If the main navigation component exists...
        if (mainNavigationComponent) {
            const mainNavigation = mainNavigationComponent.navigation;
            const menuItem = this._fuseNavigationService.getItem(
                'portal.inbox',
                mainNavigation
            );

            // Update the badge title of the item
            //menuItem.badge.title = inboxFolder.count + '';

            // Refresh the navigation
            mainNavigationComponent.refresh();
        }
    }
}
