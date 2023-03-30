import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Data } from '@angular/router';
import * as AOS from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { EnquireFormComponent } from '../shared/enquire-form/enquire-form.component';
import { LeadershipFullDetailsComponent } from '../shared/leadership-full-details/leadership-full-details.component';
import { SpotlightDetailsComponent } from '../shared/spotlight-details/spotlight-details.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  spotlight: any[] = [
    {
      id: 1,
      title: 'DESIGN THINKING PROCESS',
      description:
      'The campus resonates with cheerful laughter, enthusiasm and vigour',
      img: '../../../assets/images/about-us/spotlight/spotlight 1.png',
      alt: 'Spotlight image',
    },
    {
      id:2,
      title: 'CHEERS TO NEW BEGINNINGS',
      description:
        'The campus resonates with cheerful laughter, enthusiasm and vigour',
      img: '../../../assets/images/about-us/spotlight/spotlight 2.png',
      alt: 'Spotlight image',
    },
    {
      id:3,
      title: 'ART EXHIBIT',
      description:
        'The campus resonates with cheerful laughter, enthusiasm and vigour',
      img: '../../../assets/images/about-us/spotlight/spotlight 3.png',
      alt: 'Spotlight image',
    },
    {
      id:4,
      title: 'DESIGN THINKING PROCESS',
      description:
        'The campus resonates with cheerful laughter, enthusiasm and vigour',
      img: '../../../assets/images/about-us/spotlight/spotlight 1.png',
      alt: 'Spotlight image',
    },
    {
      id:5,
      title: 'IELC CARNIVAL',
      description:
        'IELC Pune celebrated the season of giving- Christmas by organising a fantastic Christmas carnival on the sprawling lawns in Aundh which was much enjoyed by our students and their family and friends. The carnival hosted a lot of exciting rides, games and food. Our enthusiastic parent community also put up very interesting and innovative games at the carnival. The whole ambience brought about the feel of Xmas while everyone enjoyed spending a beautiful evening.',
      img: './/.//.//..//..//..//../assets/images/banner-images/chrima1.png',
      alt: 'Spotlight image',
    },
    {
      id:6,
      title: 'IELC Sports day',
      description:
        'IELC Pune hosted their Sports Fiesta with a lot of excitement and vigour while focusing on the sustainable planet theme. The students were dressed in the Indus Tshirts while demonstrating the true sports men spirit participating enthusiastically in all the races. Under the guidance of the PE team, students demonstrated the various yoga postures efficiently and several gymnastic movements too. Each class race showcased a way of being sustainable while encouraging students as well parents to be mindful of how to lessen the damage to the planet. The parents tug of war game was the highlight of the day where parents enthusiastically fought to win.',
        img: './/.//..//..//../assets/images/banner-images/sports.png',
        alt: 'Spotlight image',
    },
  
    
    
    
    
    // {
    //   title: 'DESIGN THINKING PROCESS',
    //   description:
    //     'The campus resonates with cheerful laughter, enthusiasm and vigour',
    //   img: '../../../assets/images/about-us/spotlight/spotlight 1.png',
    //   alt: 'Spotlight image',
    // },
    // {
    //   title: 'CHEERS TO NEW BEGINNINGS',
    //   description:
    //     'The campus resonates with cheerful laughter, enthusiasm and vigour',
    //   img: '../../../assets/images/about-us/spotlight/spotlight 2.png',
    //   alt: 'Spotlight image',
    // },
    // {
    //   title: 'ART EXHIBIT',
    //   description:
    //     'The campus resonates with cheerful laughter, enthusiasm and vigour',
    //   img: '../../../assets/images/about-us/spotlight/spotlight 3.png',
    //   alt: 'Spotlight image',
    // },
    // {
    //   title: 'DESIGN THINKING PROCESS',
    //   description:
    //     'The campus resonates with cheerful laughter, enthusiasm and vigour',
    //   img: '../../../assets/images/about-us/spotlight/spotlight 1.png',
    //   alt: 'Spotlight image',
    // },
    // {
    //   title: 'CHEERS TO NEW BEGINNINGS',
    //   description:
    //     'The campus resonates with cheerful laughter, enthusiasm and vigour',
    //   img: '../../../assets/images/about-us/spotlight/spotlight 2.png',
    //   alt: 'Spotlight image',
    // },
    // {
    //   title: 'ART EXHIBIT',
    //   description:
    //     'The campus resonates with cheerful laughter, enthusiasm and vigour',
    //   img: '../../../assets/images/about-us/spotlight/spotlight 3.png',
    //   alt: 'Spotlight image',
    // },
    // {
    //   title: 'IELC CARNIVAL',
    //   description:
    //     'IELC Pune celebrated the season of giving- Christmas by organising a fantastic Christmas carnival on the sprawling lawns in Aundh which was much enjoyed by our students and their family and friends. The carnival hosted a lot of exciting rides, games and food. Our enthusiastic parent community also put up very interesting and innovative games at the carnival. The whole ambience brought about the feel of Xmas while everyone enjoyed spending a beautiful evening.',
    //   img: './/.//..//../../assets/images/banner-images/chrimas.JPG',
    //   alt: 'Spotlight image',
    // },
    

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

  enquireForm() {
    this.dialog.open(EnquireFormComponent, {
      width: '900px'
    })
  }

  openDialog(id): void {
    this.dialog.open(SpotlightDetailsComponent, {
      data: id,
    });
  }
}
