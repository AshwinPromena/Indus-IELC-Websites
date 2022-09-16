import { ActivatedRoute, Data } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StarRatingComponent } from 'ng-starrating';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as AOS from 'aos';
import { AcademiYearModel, DropDownService, HomeService } from 'build/openapi';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  readMore2 = false;
  funClassSubmissionForm: FormGroup;
  rating = 4;
  isLoading = false;
  grades: any[] = [
    {
      gradeName: 'Grade: Pre-Nursery',
      year: '1 to 2 years',
      image: '../../../assets/images/home/grade-pre-nursery.png',
      alt: 'Pre-Nursery image',
    },
    {
      gradeName: 'Grade: Nursery',
      year: '2 to 3 years',
      image: '../../../assets/images/home/grade-nursery.png',
      alt: 'Nursery image',
    },
    {
      gradeName: 'Grade: Reception',
      year: '3 to 4 years',
      image: '../../../assets/images/home/grade-pre-nursery.png',
      alt: 'Reception image',
    },
    {
      gradeName: 'Grade: Prep One',
      year: '4 to 5 years',
      image: '../../../assets/images/home/grade-prep-one.png',
      alt: 'Prep One image',
    },
    {
      gradeName: 'Grade: Prep Two',
      year: '5 to 6 years',
      image: '../../../assets/images/home/grade-prep-two.png',
      alt: 'Prep Two image',
    },
  ];
  happyEnvironment: any[] = [
    {
      image: '../../../assets/images/home/environ-1.png',
      alt: 'Happy Environment 1',
    },
    {
      image: '../../../assets/images/home/environ-2.png',
      alt: 'Happy Environment 2',
    },
    {
      image: '../../../assets/images/home/environ-3.png',
      alt: 'Happy Environment 3',
    },
    {
      image: '../../../assets/images/home/environ-4.png',
      alt: 'Happy Environment 4',
    },
    {
      image: '../../../assets/images/home/environ-5.png',
      alt: 'Happy Environment 5',
    },
    {
      image: '../../../assets/images/home/environ-6.png',
      alt: 'Happy Environment 6',
    },
  ];
  testimonials: any[] = [
    {
      name: 'Ishwari Sheth Kataria',
      description:
        'Dear Ms Amreen & Ms Anjali, I wish to thank the teachers who have taken so much efforts on Aadar to groom him over the last 4 years at IELC. Today I saw a small example of the way the teachers have taught the children to think independently.The children were given a cube activity with sight words.Aadar didnt have a cube toy nor did I find a box to fitthe need.I was wondering if    giving up and informing the teacher that we couldn t do it but then Aadar came to me and said "mom we don t need a toy or block we can use a cheese cube instead".This ability to think and think quick did impress me. Thankyou for doing such a fabulous job with children even in these trying times. Please find attached the images of his idea Regards',
      image: '../../../assets/images/home/person.png',
      alt: 'person',
    },
    {
      name: 'Ms. Aparna Pawar',
      description:
        'We as a parent are really happy that  Dhruv is doing really well with his activities and trying to learn all new skills in his way and becoming a self independent boy and I m sure these all skills will definitely help him in future. Not only his activities but also his communication skills are getting better day by day. We are really thankful to  Ielc faculty . May he gets the best guidance throughout his life.',
      image: '../../../assets/images/home/person.png',
      alt: 'person',
    },
    {
      name: 'Ms. Mrunali Shelke.',
      description:
        'We are part of Indus school from last 7 years It s one of the best preschools in pune. Very happy to be a part of it.',
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
  news: any[] = [
    {
      description:
        'Head of Centre Monthly Newsletter for the month of May 2022',
      image: '../../../assets/images/home/news.png',
      alt: 'News image',
    },
    {
      description:
        'Head of Centre Monthly Newsletter for the month of April 2022',
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
      image: '../../../assets/images/home/news.png',
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
    private dropDownService: DropDownService,
    private homeService: HomeService,
    private snackbar : MatSnackBar,
    private titleService : Title,
    private meta: Meta,
    private route : ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.titleService.setTitle(data.title);
      this.meta.updateTag({ name: 'description', content: data.description });
    });
    AOS.init();
    this.funClassSubmissionForm = this.fb.group({
      parentsName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
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
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      academicYearId: ['', Validators.required],
      messageBox: [''],
    });
    this.dropDownService.apiDropDownGetAcademicYearGet().subscribe((data) => {
      this.AcademicYear = data;
    });
  }
  onRate($event: {
    oldValue: number;
    newValue: number;
    starRating: StarRatingComponent;
  }) {
    // this.feedbackForm.get(formcontrolName).patchValue($event.newValue);
  }
  onSubmit() {
    if (this.funClassSubmissionForm.valid) {
      this.isLoading = true;
      this.homeService
        .apiHomeEnquiryFormPost(8, this.funClassSubmissionForm.value)
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
      this.snackbar.open('please fill all required fields', null, {
        duration: 2000,
      });
    }
  }
}
