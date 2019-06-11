import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort',
})
export class ArraySortPipe implements PipeTransform {
    transform(array: any[], field: string, reverse: boolean): any[] {
        if (!array || array.length < 1) {
            return array;
        }
        if (reverse) {
            array.sort((a: any, b: any) => {
                if (a[field] < b[field]) {
                    return 1;
                } else if (a[field] > b[field]) {
                    return -1;
                } else {
                    return 0;
                }
            });
        } else {
            array.sort((a: any, b: any) => {
                if (a[field] < b[field]) {
                    return -1;
                } else if (a[field] > b[field]) {
                    return 1;
                } else {
                    return 0;
                }
            });
        }
        return array;
    }
}
