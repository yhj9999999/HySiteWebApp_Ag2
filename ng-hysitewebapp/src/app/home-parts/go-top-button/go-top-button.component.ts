import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'app-go-top-button',
    templateUrl: './go-top-button.component.html',
    styleUrls: ['./go-top-button.component.css'],
})
export class GoTopButtonComponent implements OnInit {
    public showButton: boolean;
    private timerID: any = null;
    private _isBrowser(): boolean {
        return typeof window !== 'undefined';
    }
    private _getCurrentScrollTop() {
        if (typeof window.scrollY !== 'undefined' && window.scrollY >= 0) {
            return window.scrollY;
        }

        if (
            typeof window.pageYOffset !== 'undefined' &&
            window.pageYOffset >= 0
        ) {
            return window.pageYOffset;
        }

        if (
            typeof document.body.scrollTop !== 'undefined' &&
            document.body.scrollTop >= 0
        ) {
            return document.body.scrollTop;
        }

        if (
            typeof document.documentElement.scrollTop !== 'undefined' &&
            document.documentElement.scrollTop >= 0
        ) {
            return document.documentElement.scrollTop;
        }

        return 0;
    }
    public scrollTop(event: any) {
        if (!this._isBrowser()) {
            return;
        }
        event.preventDefault();
        if (this.timerID !== null) {
            return;
        }
        let initialSpeed = 100;
        const that = this;
        this.timerID = setInterval(function() {
            window.scrollBy(0, -initialSpeed);
            initialSpeed = initialSpeed + 2;
            if (that._getCurrentScrollTop() === 0) {
                clearInterval(that.timerID);
                that.timerID = null;
            }
        }, 15);
    }
    @HostListener('window:scroll', [])
    onWindowScroll() {
        if (this._isBrowser()) {
            this.showButton = this._getCurrentScrollTop() > 100 ? true : false;
        }
    }
    constructor() {}

    ngOnInit() {
        this.showButton = false;
    }
}
