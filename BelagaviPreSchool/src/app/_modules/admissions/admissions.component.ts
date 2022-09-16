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
  onscroll() {
    document
      .getElementById(this.contentView)
      .scrollIntoView({ behavior: 'smooth' });
  }
}
