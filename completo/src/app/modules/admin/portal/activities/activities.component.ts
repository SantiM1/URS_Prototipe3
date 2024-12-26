import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
    selector: 'activity',
    templateUrl: './activities.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [TitleCasePipe, DatePipe, CommonModule, MatChipsModule],
})
export class ActivitiesComponent implements OnInit {
    activities = [
        {
            id: 1,
            title: 'RS 2002',
            date: new Date().toISOString(),
            icon: 'bg-green-500',
            benefits: ['BDH'],
        },
        {
            id: 2,
            title: 'RS 2002',
            date: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString(),
            icon: 'bg-red-500',
            benefits: ['BDH', 'CDH'],
        },
        {
            id: 3,
            title: 'RS 2002',
            date: new Date(new Date().setDate(new Date().getDate() - 2)).toISOString(),
            icon: 'bg-amber-500',
            benefits: ['BDH', 'CDH'],
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
