import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CustomPipesModule } from '@app/custom-pipes/custom-pipes.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectCategoryMatrixComponent } from './project-category-matrix/project-category-matrix.component';

@NgModule({
    declarations: [HomeComponent, ProjectCategoryMatrixComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NgbModule,
        CustomPipesModule,
    ],
})
export class HomePartsModule {}
