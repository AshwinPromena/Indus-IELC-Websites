import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Data } from '@angular/router';
import * as AOS from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.scss'],
})
export class AdmissionsComponent implements OnInit {
  testimonials: any[] = [
    {
      name: 'Victoria Parker',
      description:
        'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent fermentum.In id pellent volutpat In id pellent fermentum In id pellent In volutpat In id pellent fermentum.',
      image: '../../../assets/images/home/person.png',
      alt: 'person',
    },
    {
      name: 'Victoria Parker',
      description:
        'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent fermentum.In id pellent volutpat In id pellent fermentum In id pellent In volutpat In id pellent fermentum.',
      image: '../../../assets/images/home/person.png',
      alt: 'person',
    },
    {
      name: 'Victoria Parker',
      description:
        'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent fermentum.In id pellent volutpat In id pellent fermentum In id pellent In volutpat In id pellent fermentum.',
      image: '../../../assets/images/home/person.png',
      alt: 'person',
    },
    {
      name: 'Victoria Parker',
      description:
        'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent fermentum.In id pellent volutpat In id pellent fermentum In id pellent In volutpat In id pellent fermentum.',
      image: '../../../assets/images/home/person.png',
      alt: 'person',
    },
    {
      name: 'Victoria Parker',
      description:
        'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent fermentum.In id pellent volutpat In id pellent fermentum In id pellent In volutpat In id pellent fermentum.',
      image: '../../../assets/images/home/person.png',
      alt: 'person',
    },
    {
      name: 'Victoria Parker',
      description:
        'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent fermentum.In id pellent volutpat In id pellent fermentum In id pellent In volutpat In id pellent fermentum.',
      image: '../../../assets/images/home/person.png',
      alt: 'person',
    },
  ];
  testimonialsOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin: 20,
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
    private titleService: Title,
    private meta: Meta
  ) {
    this.route.queryParamMap.subscribe((queryParamMap) => {
      this.contentView = queryParamMap.get('contentView');
      console.log(this.contentView);

      if (this.contentView) {
        setTimeout(() => {
          this.onscroll(this.contentView);
        }, 1000);
      }
    });
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.titleService.setTitle(data.title);
      this.meta.updateTag({ name: 'description', content: data.description });
    });
    AOS.init();
  }
  onscroll(contentView: string) {
    this.contentView = contentView;
    document.getElementById(contentView).scrollIntoView({ behavior: 'smooth' });
  }
}
