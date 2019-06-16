import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    ngOnInit() {
        if (window.location.href.indexOf('?postLogout=true') > 0) {
            this._authService.signoutRedirectCallback().then(() => {
                let url: string = this._router.url.substring(
                    0,
                    this._router.url.indexOf('?')
                );
                this._router.navigateByUrl(url);
            });
        }
    }

    constructor(private _authService: AuthService, private _router: Router) {}
}
