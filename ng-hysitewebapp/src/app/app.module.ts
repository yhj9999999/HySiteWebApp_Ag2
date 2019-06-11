import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { AppComponent } from './app.component';
import { HomePartsModule } from './home-parts/home-parts.module';
import { HomeComponent } from './home-parts/home/home.component';
import { TitleService } from './service/title.service';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
        data: { title: 'Hycrowd' },
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
    providers: [TitleService],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(private _titleService: TitleService) {
        _titleService.init();
    }
}
