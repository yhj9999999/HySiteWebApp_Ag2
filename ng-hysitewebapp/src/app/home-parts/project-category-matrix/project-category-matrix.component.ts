import { Component, OnInit, Input } from '@angular/core';
import { ProjectCategoryMatrixItem } from '@app/model/project-category-matrix-item';

@Component({
    selector: 'app-project-category-matrix',
    templateUrl: './project-category-matrix.component.html',
    styleUrls: ['./project-category-matrix.component.css'],
})
export class ProjectCategoryMatrixComponent implements OnInit {
    @Input() matrixItems: ProjectCategoryMatrixItem[];
    constructor() {}

    ngOnInit() {}
}
