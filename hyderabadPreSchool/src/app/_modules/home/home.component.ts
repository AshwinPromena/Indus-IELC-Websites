import { ActivatedRoute, Data } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HomeService } from './../../../../build/openapi/api/home.service';
import { DropDownService } from './../../../../build/openapi/api/dropDown.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StarRatingComponent } from 'ng-starrating';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as AOS from 'aos';
import { AcademiYearModel } from 'build/openapi/model/models';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  funClassSubmissionForm: FormGroup;
  rating = 4;
  readMore2 = false;

  grades: any[] = [
    { gradeName: 'Grade: Pre-Nursery', year: '1 to 2 years', image: '../../../assets/images/home/grade-pre-nursery.png', alt: 'Pre-Nursery image' },
    { gradeName: 'Grade: Nursery', year: '2 to 3 years', image: '../../../assets/images/home/grade-nursery.png', alt: 'Nursery image' },
    { gradeName: 'Grade: Reception', year: '3 to 4 years', image: '../../../assets/images/home/grade-pre-nursery.png', alt: 'Reception image' },
    { gradeName: 'Grade: Prep One', year: '4 to 5 years', image: '../../../assets/images/home/grade-prep-one.png', alt: 'Prep One image' },
    { gradeName: 'Grade: Prep Two', year: '5 to 6 years', image: '../../../assets/images/home/grade-prep-two.png', alt: 'Prep Two image' },
  ]
  happyEnvironment: any[] = [
    { image: '../../../assets/images/home/environ-1.png', alt: 'Happy Environment 1' },
    { image: '../../../assets/images/home/environ-2.png', alt: 'Happy Environment 2' },
    { image: '../../../assets/images/home/environ-3.png', alt: 'Happy Environment 3' },
    { image: '../../../assets/images/home/environ-4.png', alt: 'Happy Environment 4' },
    { image: '../../../assets/images/home/environ-5.png', alt: 'Happy Environment 5' },
    { image: '../../../assets/images/home/environ-6.png', alt: 'Happy Environment 6' },
  ]
  testimonials: any[] = [
    { name: 'Victoria Parker', description: 'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent fermentum.In id pellent volutpat In id pellent fermentum In id pellent In volutpat In id pellent fermentum.', image: '../../../assets/images/home/person.png', alt: 'person' },
    { name: 'Victoria Parker', description: 'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent fermentum.In id pellent volutpat In id pellent fermentum In id pellent In volutpat In id pellent fermentum.', image: '../../../assets/images/home/person.png', alt: 'person' },
    { name: 'Victoria Parker', description: 'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent fermentum.In id pellent volutpat In id pellent fermentum In id pellent In volutpat In id pellent fermentum.', image: '../../../assets/images/home/person.png', alt: 'person' },
    { name: 'Victoria Parker', description: 'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent fermentum.In id pellent volutpat In id pellent fermentum In id pellent In volutpat In id pellent fermentum.', image: '../../../assets/images/home/person.png', alt: 'person' },
    { name: 'Victoria Parker', description: 'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent fermentum.In id pellent volutpat In id pellent fermentum In id pellent In volutpat In id pellent fermentum.', image: '../../../assets/images/home/person.png', alt: 'person' },
    { name: 'Victoria Parker', description: 'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent fermentum.In id pellent volutpat In id pellent fermentum In id pellent In volutpat In id pellent fermentum.', image: '../../../assets/images/home/person.png', alt: 'person' },
  ]
  news: any[] = [
    { description: 'HOC Monthly Newsletter for the month of May 2022. Newsletter -HOC.', image: '../../../assets/images/home/news.png', alt: 'News image' },
    { description: 'HOC Monthly Newsletter for the month of April 2022. Newsletter -HOC.', image: '../../../assets/images/home/news-1.png', alt: 'News image' },
    { description: 'HOC Monthly Newsletter for the month of March 2022. Newsletter -HOC.', image: '../../../assets/images/home/news-3.png', alt: 'News image' },
  ]
  isLoading = false;
  testimonialOptions: OwlOptions = {
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
        items: 2,
      },
      940: {
        items: 2,
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
  AcademicYear: AcademiYearModel[];
  constructor(
    private fb: FormBuilder,
    private dropDownService : DropDownService,
    private homeService : HomeService,
    private snackbar : MatSnackBar,
    private route : ActivatedRoute,
    private meta: Meta,
    private titleService : Title
    ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.titleService.setTitle(data.title);
      this.meta.updateTag({ name: 'description', content: data.description });
    });
    AOS.init();
    this.funClassSubmissionForm = this.fb.group({
      parentsName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      mobileNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('^[6-9]{1}[0-9]{9}$'),
        ],
      ],
      emailId: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      academicYearId: ['', Validators.required],
      messageBox: ['']
    });
    this.dropDownService.apiDropDownGetAcademicYearGet().subscribe(data => {
      this.AcademicYear = data;
    });
  }
  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
    // this.feedbackForm.get(formcontrolName).patchValue($event.newValue);
  }
  onSubmit() {
    if (this.funClassSubmissionForm.valid) {
      this.isLoading = true;
      this.homeService.apiHomeEnquiryFormPost(7, this.funClassSubmissionForm.value)
        .subscribe((data) => {
          if (data.statusCode === 200) {
            this.isLoading = false;
            this.snackbar.open(data.message, null, { duration: 2000 });
            this.funClassSubmissionForm.reset();
          } else {
            this.isLoading = false;
            this.snackbar.open(data.message, null, { duration: 2000 });
          }
        });
    } else {
      this.snackbar.open('please fill all required fields', null, { duration: 2000 });
    }
  }
}
