import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { Router, ActivatedRoute } from '@angular/router';
import { FuseNavigationService } from '@fuse/components/navigation';

@Component({
    selector: 'activity',
    templateUrl: './info-rs.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [TitleCasePipe, DatePipe, CommonModule, MatChipsModule],
})
export class InfoRSComponent implements OnInit {

    constructor(
        private router: Router,
        private activeRoute: ActivatedRoute,
        private _fuseNavigationService: FuseNavigationService,

    ) { }


    navTo(name: string):void {
        this.router.navigate([name],{relativeTo: this.activeRoute}).then(() => {
                // Scroll to top after navigation
                window.scrollTo({ top: 850, behavior: 'smooth' });
            });
    }
    activities = [
        {
            id: 1,
            title: 'No Pobre',
            date: "RC 2022",
            color: 'green',
            benefits: ['BDH'],
            points: '8',
        },
        {
            id: 2,
            title: 'Extremo Pobre',
            date: "RC 2018",
            color: 'red',
            benefits: ['BDH', 'CDH'],
            points: '2',
        },
        {
            id: 3,
            title: 'Pobre',
            date: "RC 2014",
            color: 'amber',
            benefits: ['BDH', 'CDH'],
            points: '5',
        },
        {
            id: 4,
            title: 'Pobre',
            date: "RC 2011",
            color: 'amber',
            benefits: ['BDH', 'CDH'],
            points: '5',
        },
    ];

    ngOnInit(): void {}

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
