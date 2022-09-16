import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Data } from '@angular/router';
import * as AOS from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LeadershipFullDetailsComponent } from '../shared/leadership-full-details/leadership-full-details.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  spotlight: any[] = [
    {
      title: 'DESIGN THINKING PROCESS',
      description:
        'The campus resonates with cheerful laughter, enthusiasm and vigour',
      img: '../../../assets/images/about-us/spotlight/spot-light1.jpg',
      alt: 'Spotlight image',
    },
    {
      title: 'CHEERS TO NEW BEGINNINGS',
      description:
        'The campus resonates with cheerful laughter, enthusiasm and vigour',
      img: '../../../assets/images/about-us/spotlight/spot-light2.jpg',
      alt: 'Spotlight image',
    },
    {
      title: 'ART EXHIBIT',
      description:
        'The campus resonates with cheerful laughter, enthusiasm and vigour',
      img: '../../../assets/images/about-us/spotlight/spot-light3.jpg',
      alt: 'Spotlight image',
    },
    {
      title: 'DESIGN THINKING PROCESS',
      description:
        'The campus resonates with cheerful laughter, enthusiasm and vigour',
      img: '../../../assets/images/about-us/spotlight/spot-light1.jpg',
      alt: 'Spotlight image',
    },
    {
      title: 'CHEERS TO NEW BEGINNINGS',
      description:
        'The campus resonates with cheerful laughter, enthusiasm and vigour',
      img: '../../../assets/images/about-us/spotlight/spot-light2.jpg',
      alt: 'Spotlight image',
    },
    {
      title: 'ART EXHIBIT',
      description:
        'The campus resonates with cheerful laughter, enthusiasm and vigour',
      img: '../../../assets/images/about-us/spotlight/spot-light3.jpg',
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
        items: 4,
      },
    },
    nav: false,
    autoplay: false,
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
      data: id,
    });
  }
  onscroll(contentView: string) {
    this.contentView = contentView;
    document.getElementById(contentView).scrollIntoView({ behavior: 'smooth' });
  }
}
