import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meta, Title } from '@angular/platform-browser';
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
      img: '../../../assets/images/about-us/spotlight/spotlight 1.png',
      alt: 'Spotlight image',
    },
    {
      title: 'CHEERS TO NEW BEGINNINGS',
      description:
        'The campus resonates with cheerful laughter, enthusiasm and vigour',
      img: '../../../assets/images/about-us/spotlight/spotlight 2.png',
      alt: 'Spotlight image',
    },
    {
      title: 'ART EXHIBIT',
      description:
        'The campus resonates with cheerful laughter, enthusiasm and vigour',
      img: '../../../assets/images/about-us/spotlight/spotlight 3.png',
      alt: 'Spotlight image',
    },
    {
      title: 'DESIGN THINKING PROCESS',
      description:
        'The campus resonates with cheerful laughter, enthusiasm and vigour',
      img: '../../../assets/images/about-us/spotlight/spotlight 1.png',
      alt: 'Spotlight image',
    },
    {
      title: 'CHEERS TO NEW BEGINNINGS',
      description:
        'The campus resonates with cheerful laughter, enthusiasm and vigour',
      img: '../../../assets/images/about-us/spotlight/spotlight 2.png',
      alt: 'Spotlight image',
    },
    {
      title: 'ART EXHIBIT',
      description:
        'The campus resonates with cheerful laughter, enthusiasm and vigour',
      img: '../../../assets/images/about-us/spotlight/spotlight 3.png',
      alt: 'Spotlight image',
    },
  ];
  news: any[] = [
    {
      description:
        'Head of Centre Monthly Newsletter for the month of May 2022. Newsletter -Head of Centre.',
      image: '../../../assets/images/home/news-2.png',
      alt: 'News image',
    },
    {
      description:
        'Head of Centre Monthly Newsletter for the month of April 2022. Newsletter -Head of Centre.',
      image: '../../../assets/images/home/news-1.png',
      alt: 'News image',
    },
    {
      description:
        'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent ferme.',
      image: '../../../assets/images/home/news-2.png',
      alt: 'News image',
    },
    {
      description:
        'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent ferme.',
      image: '../../../assets/images/home/news-2.png',
      alt: 'News image',
    },
    {
      description:
        'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent ferme.',
      image: '../../../assets/images/home/news-1.png',
      alt: 'News image',
    },
    {
      description:
        'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent ferme.',
      image: '../../../assets/images/home/news-2.png',
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
    this.contentView = this.route.snapshot.queryParamMap.get('contentView');
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.titleService.setTitle(data.title);
      this.meta.updateTag({ name: 'description', content: data.description });
    });
    AOS.init();
    if (this.contentView) {
      setTimeout(() => {
        this.onscroll();
      }, 1000);
    }
  }
  viewLeadershipFullDetails(id: number) {
    this.dialog.open(LeadershipFullDetailsComponent, {
      // width: '1000px',
      data: id,
    });
  }
  onscroll() {
    document
      .getElementById(this.contentView)
      .scrollIntoView({ behavior: 'smooth' });
  }
}
