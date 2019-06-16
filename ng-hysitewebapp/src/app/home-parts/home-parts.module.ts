import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CustomPipesModule } from '@app/custom-pipes/custom-pipes.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectCategoryMatrixComponent } from './project-category-matrix/project-category-matrix.component';
import { FooterComponent } from './footer/footer.component';
import { GoTopButtonComponent } from './go-top-button/go-top-button.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';

@NgModule({
    declarations: [
        HomeComponent,
        ProjectCategoryMatrixComponent,
        FooterComponent,
        GoTopButtonComponent,
        HeaderNavComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NgbModule,
        CustomPipesModule,
    ],
    exports: [FooterComponent, GoTopButtonComponent, HeaderNavComponent],
})
export class HomePartsModule {}
