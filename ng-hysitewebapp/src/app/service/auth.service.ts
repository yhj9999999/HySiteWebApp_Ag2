import { Injectable } from '@angular/core';
import { UserManager, User, WebStorageStateStore } from 'oidc-client';
import { Constants } from './constants';

@Injectable()
export class AuthService {
    private _userManager: UserManager;
    private _user: User;

    login(): Promise<any> {
        return this._userManager.signinRedirect();
    }

    logout(): Promise<any> {
        return this._userManager.signoutRedirect();
    }

    isLoggedIn(): boolean {
        return this._user && this._user.access_token && !this._user.expired;
    }

    getAccessToken(): string {
        return this._user ? this._user.access_token : '';
    }

    signoutRedirectCallback(): Promise<any> {
        return this._userManager.signoutRedirectCallback();
    }

    getUserName(): string {
        return this._user.profile.name;
    }

    getUserId(): string {
        return this._user.profile.sub;
    }

    constructor() {
        const config = {
            authority: Constants.idpEndPoint,
            client_id: Constants.idpClientId,
            redirect_uri: Constants.idpRedirectEndPoint,
            scope: Constants.idpScopes,
            response_type: Constants.idpResponseType,
            post_logout_redirect_uri: Constants.idpPostLogoutEndPoint,
            userStore: new WebStorageStateStore({ store: window.localStorage }),
            automaticSilentRenew: true,
            silent_redirect_uri: Constants.idpSilentRenewEndPoint,
        };
        this._userManager = new UserManager(config);
        this._userManager.getUser().then(user => {
            if (user && !user.expired) {
                this._user = user;
            }
        });
        this._userManager.events.addUserLoaded(args => {
            this._userManager.getUser().then(user => {
                this._user = user;
            });
        });
    }
}
