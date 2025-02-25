    import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
    import {
        ChangeDetectionStrategy,
        Component,
        OnInit,
        ViewEncapsulation,
    } from '@angular/core';
    import { MatChipsModule } from '@angular/material/chips';
    import { MatIconModule } from '@angular/material/icon';
    import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
    @Component({
        selector: 'activity',
        templateUrl: './info-rs-db.component.html',
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        standalone: true,
        imports: [TitleCasePipe,
            DatePipe,
             CommonModule,
             MatChipsModule,
             RouterModule,
            MatIconModule,
        ],
    })
    export class InfoRSDBComponent implements OnInit {

        constructor(
            private router:Router,
            private activeRoute: ActivatedRoute
        ){}


        navTo(name: string): void {
            this.router.navigate([name], { relativeTo: this.activeRoute }).then(() => {
                // Scroll to top after navigation
                window.scrollTo({ top: 850, behavior: 'smooth' });
            });
        }

        ngOnInit(): void {

        }

        activities = [
            {
                id: 1,
                title: 'No Pobre',
                date: new Date().toISOString(),
                color: 'green',
                benefits: ['BDH'],
                points: '8',
            },
            {
                id: 2,
                title: 'Extremo Pobre',
                date: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString(),
                color: 'red',
                benefits: ['BDH', 'CDH'],
                points: '2',
            },
            {
                id: 3,
                title: 'Pobre',
                date: new Date(new Date().setDate(new Date().getDate() - 2)).toISOString(),
                color: 'amber',
                benefits: ['BDH', 'CDH'],
                points: '5',
            },
        ];



        /**
         * Check if two dates fall on the same day
         * @param current
         * @param compare
         */
        isSameDay(current: string, compare: string): boolean {
            const currentDate = new Date(current);
            const compareDate = new Date(compare);
            return (
                currentDate.getFullYear() === compareDate.getFullYear() &&
                currentDate.getMonth() === compareDate.getMonth() &&
                currentDate.getDate() === compareDate.getDate()
            );
        }

        /**
         * Get the relative format of the given date
         * @param date
         */
        getRelativeFormat(date: string): string {
            const diffTime = Math.abs(Date.now() - new Date(date).getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays === 0 ? 'Today' : `${diffDays} day(s) ago`;
    }

    /**
     * Track by function for ngFor loops
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }
}
