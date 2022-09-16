import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Data } from '@angular/router';
import * as AOS from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AdmissionTestimonialsComponent } from '../shared/admission-testimonials/admission-testimonials.component';

@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.scss']
})
export class AdmissionsComponent implements OnInit {
  testimonials: any[] = [
    { name: 'Muskaan Toshniwal', description: 'I joined Indus International School Pune in MYP 4 (Grade 9) and one of the first things I was taught is that no question is silly or irrelevant. We should never be conscious or afraid of asking questions. The teachers here are extremely polite and patient. They are always there for you. You must reach out to them if you have any doubts and they will do their best to help you.', image: '../../../assets/images/admissions/testinomails/testimonials-1.png', alt: 'person' },
    { name: 'Muskaan Toshniwal', description: 'I joined Indus International School Pune in MYP 4 (Grade 9) and one of the first things I was taught is that no question is silly or irrelevant. We should never be conscious or afraid of asking questions. The teachers here are extremely polite and patient. They are always there for you. You must reach out to them if you have any doubts and they will do their best to help you.', image: '../../../assets/images/admissions/testinomails/testimonials-1.png', alt: 'person' },
    { name: 'Muskaan Toshniwal', description: 'I joined Indus International School Pune in MYP 4 (Grade 9) and one of the first things I was taught is that no question is silly or irrelevant. We should never be conscious or afraid of asking questions. The teachers here are extremely polite and patient. They are always there for you. You must reach out to them if you have any doubts and they will do their best to help you.', image: '../../../assets/images/admissions/testinomails/testimonials-1.png', alt: 'person' },
    // { name: 'Victoria Parker', description: 'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent fermentum.In id pellent volutpat In id pellent fermentum In id pellent In volutpat In id pellent fermentum.', image: '../../../assets/images/home/person.png', alt: 'person' },
    // { name: 'Victoria Parker', description: 'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent fermentum.In id pellent volutpat In id pellent fermentum In id pellent In volutpat In id pellent fermentum.', image: '../../../assets/images/home/person.png', alt: 'person' },
    // { name: 'Victoria Parker', description: 'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent fermentum.In id pellent volutpat In id pellent fermentum In id pellent In volutpat In id pellent fermentum.', image: '../../../assets/images/home/person.png', alt: 'person' },
    // { name: 'Victoria Parker', description: 'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent fermentum.In id pellent volutpat In id pellent fermentum In id pellent In volutpat In id pellent fermentum.', image: '../../../assets/images/home/person.png', alt: 'person' },
    // { name: 'Victoria Parker', description: 'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent fermentum.In id pellent volutpat In id pellent fermentum In id pellent In volutpat In id pellent fermentum.', image: '../../../assets/images/home/person.png', alt: 'person' },
  ]
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
  contentView: any;
  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private titleService : Title,
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
        this.onscroll()
      }, 1000);
    }
  }
  onscroll() {
    document.getElementById(this.contentView).scrollIntoView({ behavior: 'smooth' });
  }
  readMore(id: number) {
    this.dialog.open(AdmissionTestimonialsComponent, {
      // width: '1000px',
      data: id
    });

  }
}
