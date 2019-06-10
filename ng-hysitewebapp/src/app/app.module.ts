import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgProgressModule.withConfig({ spinner: false, color: 'red' }),
        NgProgressHttpModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
