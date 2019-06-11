import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dayLeft',
})
export class DayLeftPipe implements PipeTransform {
    transform(value: string): string {
        const now = new Date().getTime();
        const input = new Date(value).getTime();
        const dateDiff = input - now;
        const seconds = Math.floor(Math.abs(dateDiff) / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        if (days > 1) {
            return days + ' days';
        }
        if (days === 1) {
            return '1 day';
        }
        if (hours > 1) {
            return hours + ' hours';
        }
        if (hours === 1) {
            return '1 hour';
        }
        if (minutes > 1) {
            return minutes + ' minutes';
        }
        if (minutes === 1) {
            return '1 minute';
        }
        if (seconds > 1) {
            return seconds + ' seconds';
        }
        if (seconds === 1) {
            return '1 second';
        }
        return 'less than 1 second';
    }
}
