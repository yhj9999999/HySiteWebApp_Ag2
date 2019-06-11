import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArraySortPipe } from './array-sort.pipe';
import { DayLeftPipe } from './day-left.pipe';
import { TrustedHtmlPipe } from './trusted-html.pipe';
import { TrustedUrlPipe } from './trusted-url.pipe';

@NgModule({
    declarations: [ArraySortPipe, DayLeftPipe, TrustedHtmlPipe, TrustedUrlPipe],
    imports: [CommonModule],
    exports: [ArraySortPipe, DayLeftPipe, TrustedHtmlPipe, TrustedUrlPipe],
})
export class CustomPipesModule {}
