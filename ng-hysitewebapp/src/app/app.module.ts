import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { AppComponent } from './app.component';
import { HomePartsModule } from './home-parts/home-parts.module';
import { HomeComponent } from './home-parts/home/home.component';
import { TitleService } from './service/title.service';
import { AuthService } from './service/auth.service';
import { AuthInterceptor } from './interceptor/auth-interceptor';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
        data: { title: 'Home' },
    },
    { path: '**', redirectTo: '/' },
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgProgressModule.withConfig({ spinner: false, color: 'red' }),
        NgProgressHttpModule,
        HomePartsModule,
        RouterModule.forRoot(appRoutes),
    ],
    providers: [
        TitleService,
        AuthService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(private _titleService: TitleService) {
        _titleService.init();
    }
}
