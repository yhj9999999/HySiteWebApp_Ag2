import { Pipe, PipeTransform } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'trustedHtml',
})
export class TrustedHtmlPipe implements PipeTransform {
    transform(html: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }

    constructor(private sanitizer: DomSanitizer) {}
}
