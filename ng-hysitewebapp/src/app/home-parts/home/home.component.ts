import { Component, OnInit } from '@angular/core';
import { CarouselIn } from '@app/model/carousel-in';
import { HighLightIn } from '@app/model/high-light-in';
import { ProjectCategoryMatrixItem } from '@app/model/project-category-matrix-item';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    public homeSlides: CarouselIn[] = [
        {
            headerId: 1,
            imageUrl: 'https://static.hycrowd.com/images/base/slide1.jpeg',
            imageAlt: 'Hycrowd',
            headerText: 'Welcome to Hycrowd',
            subHeaderText: 'A starting point for everyone',
            linkToState: '/',
            linkToStateParaName: '',
            linkToStateParaVal: '',
        },
    ];
    public homeHighLights: HighLightIn[] = [
        {
            highLightId: 1,
            imageUrl:
                'https://static.hycrowd.com/images/base/backercampusicon.jpeg',
            imageAlt: 'Backer Campus',
            headerText: 'Backer Campus',
            subHeaderText: 'Join the crowd',
            linkToState: '/learn/investEdu',
            linkToStateParaName: '',
            linkToStateParaVal: '',
        },
        {
            highLightId: 2,
            imageUrl:
                'https://static.hycrowd.com/images/base/pathfindercampusicon.jpeg',
            imageAlt: 'Pathfinder Campus',
            headerText: 'Pathfinder Campus',
            subHeaderText: 'Bring it alive',
            linkToState: '/learn/issueEdu/welcome',
            linkToStateParaName: '',
            linkToStateParaVal: '',
        },
        {
            highLightId: 3,
            imageUrl:
                'https://static.hycrowd.com/images/base/insuranceicon.jpeg',
            imageAlt: 'Crowdfunding Insurance',
            headerText: 'Peace in mind',
            subHeaderText: 'Intro to crowdfunding insurance',
            linkToState: '/',
            linkToStateParaName: '',
            linkToStateParaVal: '',
        },
    ];
    public categoryMatrixItems: ProjectCategoryMatrixItem[] = [
        {
            toLink: '/search/projectList/art_design',
            hoverContent: 'Expression of Beauty',
            hoverMag: true,
            imageSrc: 'https://static.hycrowd.com/images/base/art.jpeg',
            captionContent: 'Art & Design',
        },
        {
            toLink: '/search/projectList/civil_social',
            hoverContent: 'Society with People',
            hoverMag: true,
            imageSrc: 'https://static.hycrowd.com/images/base/social.jpeg',
            captionContent: 'Civil & Social',
        },
        {
            toLink: '/search/projectList/food_medical',
            hoverContent: 'Care for Better Life',
            hoverMag: true,
            imageSrc: 'https://static.hycrowd.com/images/base/food.jpeg',
            captionContent: 'Food & Medical',
        },
        {
            toLink: '/search/projectList/technology',
            hoverContent: 'Back to The Future',
            hoverMag: true,
            imageSrc: 'https://static.hycrowd.com/images/base/technology.jpeg',
            captionContent: 'Technology',
        },
        {
            toLink: '/search/projectList/local_community',
            hoverContent: 'You and Me',
            hoverMag: true,
            imageSrc: 'https://static.hycrowd.com/images/base/community.jpeg',
            captionContent: 'Local Community',
        },
        {
            toLink: '/search/projectList/other',
            hoverContent: 'Colorful Creativity',
            hoverMag: true,
            imageSrc: 'https://static.hycrowd.com/images/base/roundicons.jpeg',
            captionContent: 'Everything Else',
        },
    ];
    public highLightLink(url: string): void {
        this._router.navigateByUrl(url);
    }

    constructor(private _router: Router) {}

    ngOnInit() {}
}
