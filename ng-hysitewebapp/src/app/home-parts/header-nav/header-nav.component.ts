import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/service/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header-nav',
    templateUrl: './header-nav.component.html',
    styleUrls: ['./header-nav.component.css'],
})
export class HeaderNavComponent implements OnInit {
    public hideCross = true;
    public navCollapsed = true;
    public navSearchTerm = '';

    public toggleNav(): void {
        this.navCollapsed = !this.navCollapsed;
        this.hideCross = !this.hideCross;
    }

    public collapseNav(): void {
        this.navCollapsed = true;
        this.hideCross = true;
    }

    public goToSignin(): void {
        this._authService.login();
    }

    public signOut(): void {
        this._authService.logout();
    }

    public hideUserMenu(): boolean {
        return !this._authService.isLoggedIn();
    }

    public getUserName(): string {
        return this._authService.getUserName();
    }

    public goToUserProfile(): void {
        this._route.navigate([
            '/userProfile',
            'profile',
            this._authService.getUserId,
            'home',
        ]);
    }

    public goToSearch(searchTerm: string): void {}

    constructor(private _authService: AuthService, private _route: Router) {}

    ngOnInit() {}
}
