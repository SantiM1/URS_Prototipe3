import { DatePipe, NgClass } from '@angular/common';
import {
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from 'app/modules/admin/portal/inbox-notification/inbox-notification.component';
import { UserService } from 'app/modules/admin/portal/inbox-notification/inbox-notification.service';
import {
    Mail,
    MailCategory,
} from 'app/modules/admin/portal/inbox-notification/inbox-notification.types';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'inbox-list',
    templateUrl: './list.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        MatButtonModule,
        MatIconModule,
        RouterLink,
        MatProgressBarModule,
        NgClass,
        RouterOutlet,
        DatePipe,
    ],
})
export class UserListComponent implements OnInit, OnDestroy {
    @ViewChild('mailList') mailList: ElementRef;

    category: MailCategory;
    mails: Mail[];
    mailsLoading: boolean = false;
    pagination: any;
    selectedMail: Mail;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        public inboxComponent: UserComponent,
        private _inboxService: UserService,
        private router: Router,
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */

    navPortal(){
        this.router.navigate(['/portal/land']).then(() => {
            // Scroll to top after navigation
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });; 
    }
    ngOnInit(): void {
        // Category
        this._inboxService.category$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((category: MailCategory) => {
                this.category = category;
            });

        // Mails
        this._inboxService.mails$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((mails: Mail[]) => {
                this.mails = mails;
            });

        // Mails loading
        this._inboxService.mailsLoading$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((mailsLoading: boolean) => {
                this.mailsLoading = mailsLoading;

                // If the mail list element is available & the mails are loaded...
                if (this.mailList && !mailsLoading) {
                    // Reset the mail list element scroll position to top
                    this.mailList.nativeElement.scrollTo(0, 0);
                }
            });

        // Pagination
        this._inboxService.pagination$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((pagination) => {
                this.pagination = pagination;
            });

        // Selected mail
        this._inboxService.mail$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((mail: Mail) => {
                this.selectedMail = mail;
            });
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
     * On mail selected
     *
     * @param mail
     */
    onMailSelected(mail: Mail): void {
        // If the mail is unread...
        if (mail.unread) {
            // Update the mail object
            mail.unread = false;

            // Update the mail on the server
            this._inboxService
                .updateMail(mail.id, { unread: false })
                .subscribe();
        }
        console.log(mail)

        // Execute the mailSelected observable
        this._inboxService.selectedMailChanged.next(mail);
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