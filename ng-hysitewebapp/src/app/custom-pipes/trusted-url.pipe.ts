import { Pipe, PipeTransform } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'trustedUrl',
})
export class TrustedUrlPipe implements PipeTransform {
    transform(url: string): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    constructor(private sanitizer: DomSanitizer) {}
}
