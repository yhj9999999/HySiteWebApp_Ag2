import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';

const APP_TITLE = 'Hycrowd';
const SEPARATOR = ' > ';

@Injectable({
    providedIn: 'root',
})
export class TitleService {
    static ucFirst(someString: string) {
        if (!someString) {
            return someString;
        }
        return someString.charAt(0).toUpperCase() + someString.slice(1);
    }
    init() {
        this._router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                map(() => this._activatedRoute),
                map(() => {
                    let route = this._activatedRoute.firstChild;
                    let child = route;
                    while (child) {
                        if (child.firstChild) {
                            child = child.firstChild;
                            route = child;
                        } else {
                            child = null;
                        }
                    }
                    return route;
                }),
                switchMap(route => route.data),
                map(data => {
                    if (data.title) {
                        // If a route has a title set (e.g. data: {title: "Foo"}) then we use it
                        return data.title;
                    } else {
                        // If not, we do a little magic on the url to create an approximation
                        return this._router.url
                            .split('/')
                            .reduce((acc, frag) => {
                                if (acc && frag) {
                                    acc += SEPARATOR;
                                }
                                return this._router.url
                                    .split('/')
                                    .reduce((acc, frag) => {
                                        if (acc && frag) {
                                            acc += SEPARATOR;
                                        }
                                        return acc + TitleService.ucFirst(frag);
                                    });
                            });
                    }
                })
            )
            .subscribe(pathString =>
                this._titleService.setTitle(`${APP_TITLE} ${pathString}`)
            );
    }
    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _titleService: Title
    ) {}
}
