import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Data } from '@angular/router';
import * as AOS from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { EnquireFormComponent } from '../shared/enquire-form/enquire-form.component';
import { LeadershipFullDetailsComponent } from '../shared/leadership-full-details/leadership-full-details.component';
import { SpotlightFullDetailsComponent } from '../shared/spotlight-full-details/spotlight-full-details.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  spotlight: any[] = [
    {
      id:1,
      title: 'DESIGN THINKING PROCESS',
      description:
        'The campus resonates with cheerful laughter, enthusiasm and vigour',
      img: '../../../assets/images/about-us/spotlight/spot-light1.png',
      alt: 'Spotlight image',
    },
    {
      id:2,
      title: 'CHEERS TO NEW BEGINNINGS',
      description:
        'The campus resonates with cheerful laughter, enthusiasm and vigour',
      img: '../../../assets/images/about-us/spotlight/spot-light2.png',
      alt: 'Spotlight image',
    },
    {
      id:3,
      title: 'ART EXHIBIT',
      description:
        'The campus resonates with cheerful laughter, enthusiasm and vigour',
      img: '../../../assets/images/about-us/spotlight/spot-light3.png',
      alt: 'Spotlight image',
    },
    {
      id:4,
      title: 'DESIGN THINKING PROCESS',
      description:
        'The campus resonates with cheerful laughter, enthusiasm and vigour',
      img: '../../../assets/images/about-us/spotlight/spot-light1.png',
      alt: 'Spotlight image',
    },
    {
      id:5,
      title: 'CHEERS TO NEW BEGINNINGS',
      description:
        'The campus resonates with cheerful laughter, enthusiasm and vigour',
      img: '../../../assets/images/about-us/spotlight/spot-light2.png',
      alt: 'Spotlight image',
    },
    {
      id:6,
      title: 'ART EXHIBIT',
      description:
        'The campus resonates with cheerful laughter, enthusiasm and vigour',
      img: '../../../assets/images/about-us/spotlight/spot-light3.png',
      alt: 'Spotlight image',
    },
  ];
  news: any[] = [
    {
      description:
        'HOC Monthly Newsletter for the month of May 2022. Newsletter -HOC',
      image: '../../../assets/images/home/news.jpg',
      alt: 'News image',
    },
    {
      description:
        'HOC Monthly Newsletter for the month of April 2022. Newsletter -HOC',
      image: '../../../assets/images/home/news.jpg',
      alt: 'News image',
    },
    {
      description:
        'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent ferme.',
      image: '../../../assets/images/home/news.jpg',
      alt: 'News image',
    },
    {
      description:
        'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent ferme.',
      image: '../../../assets/images/home/news.jpg',
      alt: 'News image',
    },
    {
      description:
        'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent ferme.',
      image: '../../../assets/images/home/news.jpg',
      alt: 'News image',
    },
    {
      description:
        'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent ferme.',
      image: '../../../assets/images/home/news.jpg',
      alt: 'News image',
    },
  ];


  spotLightOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin: 30,
    navSpeed: 700,
    navText: [
      '<',
      '>'
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    lazyLoad: true,
  };
  newsOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin: 10,
    navSpeed: 700,
    navText: [],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
    nav: false,
    autoplay: false,
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    lazyLoad: true,
  };
  contentView: string;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private titleService: Title,
    private meta: Meta
  ) {
    this.route.queryParamMap.subscribe(queryParamMap => {
      this.contentView = queryParamMap.get('contentView');
      if (this.contentView) {
        setTimeout(() => {
          this.onscroll(this.contentView);
        }, 1000);
      }
    });
  }

  ngOnInit(): void {

    AOS.init();
    this.route.data.subscribe((data: Data) => {
      this.titleService.setTitle(data.title);
      this.meta.updateTag({ name: 'description', content: data.description });
    });
  }
  viewLeadershipFullDetails(id: number) {
    this.dialog.open(LeadershipFullDetailsComponent, {
      // width: '1000px',
      data: id,
    });
  }
  onscroll(contentView: string) {
    this.contentView = contentView;
    document.getElementById(contentView).scrollIntoView({ behavior: 'smooth' });
  }
  openDialog(id): void{
    this.dialog.open(SpotlightFullDetailsComponent,  {
      data:id
    })
  }

  enquireForm() {
    this.dialog.open(EnquireFormComponent, {
      width: '900px'
    })
  }
}
