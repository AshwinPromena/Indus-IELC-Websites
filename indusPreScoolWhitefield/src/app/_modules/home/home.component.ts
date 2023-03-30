import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StarRatingComponent } from 'ng-starrating';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as AOS from 'aos';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AcademiYearModel, DropDownService, HomeService } from 'build/openapi';
import { Meta, Title } from '@angular/platform-browser';
import { TestimonialsComponent } from '../shared/testimonials/testimonials.component';
import { EnquireFormComponent } from '../shared/enquire-form/enquire-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  funClassSubmissionForm: FormGroup;
  rating = 4;
  isLoading = false;
  readMore2 = false;
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
    {
      gradeName: 'Grade: One',
      year: '6 to 7 years',
      image: '../../../assets/images/home/grade-reception.png',
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
      id: 1,
      name: 'Aashish Garg',
      description:
        'The Journey for our two children, Aarav and Anika at IELC- Whitefield will always be a sweet memorable one.We still remember we had to be in Aarav’s class for two months to make him settle down, the main reason was that he was an overprotected child. But once he got settled there was no looking back.',
      image:
        '../../../assets/images/admissions/testinomails/Aashish Garg (Parent of Aarav and Anika).png',
      alt: 'person',
    },
    {
      id: 2,
      name: 'Ajinder',
      description:
        'Watching my son transform from a shy 4-year-old to an outgoing, confident and opinion-oriented 6 years old in the past 3 years has been a welcome sight. He joined the Indus Early Learning Centre, in Prep 1 and the school was highly recommended by many of my close friends.',
      image:
        '../../../assets/images/admissions/testinomails/Ajinder (Parent of Angad Grade 1).png',
      alt: 'person',
    },
    {
      id: 3,
      name: 'Claire Monteiller',
      description:
        'We are very happy that Mateo joined IELC Whitefield this year. The school’s friendly environment helped him to feel comfortable very quickly and now he is very happy to go to school. He has made great progress in English and is more confident talking in English to an audience.',
      image:
        '../../../assets/images/admissions/testinomails/Claire Monteiller, Parent of Mateo Gaona Monteiller, Prep1.png',
      alt: 'person',
    },
    {
      id: 4,
      name: 'Gitte Korsholm',
      description:
        'Wilhelm joined IELC in Pre-Nursery when he was 1 year and 5 months. The teachers and assistants were welcoming, and soon Wilhelm was the first one to run around in the morning at home shouting “shoes on, shoes on”, so we could go to school, even on the weekends.',
      image:
        '../../../assets/images/admissions/testinomails/Gitte Korsholm – Mother of Wilhelm Korsholm.png',
      alt: 'person',
    },
    {
      id: 5,
      name: 'Mekhla Gussain ',
      description:
        'It is our firm belief that the hallmarks of a truly exemplary school are professionally committed teachers, a cohesive staff, effective leadership, community involvement, a safe & caring environment, and a holistic curriculum. IELC Whitefield delivers and excels on all these fronts and as a parent,',
      image:
        '../../../assets/images/admissions/testinomails/Mekhla Gussain Parent of Viraat Prep 1.png',
      alt: 'person',
    },
    {
      id: 6,
      name: 'Smiti and Karl',
      description:
        'Indus Early Learning has been a wonderful experience for our son and ourselves. The teachers are passionate and knowledgeable, always taking a deep personal interest in the unique personalities of the children in the class. I have appreciated how they have observed Neil and helped him grow, with very specific and sensitive feedback.',
      image:
        '../../../assets/images/admissions/testinomails/Smiti and Karl - Parent of Neil Bjornfot.png',
      alt: 'person',
    },
    {
      id: 7,
      name: 'Bindushree',
      description:
        'What better way can I describe the feeling we have towards IELC. An apprehensive visit to the centre back in January 2017 turned out to be the most promising one for us, considering our move to Bangalore from a different geological location and for a little person who was distant from the culture she was born into.',
      image: '../../../assets/images/admissions/testinomails/Bindushree.png',
      alt: 'bindushree_image',
    },
    {
      id: 8,
      name: 'Saman Apparanda Subramani',
      description:
        'The first 10 years of your child’s life  decides his/ her future”…being a parent, I come from that school of thought. So, when it was time for my little one to step into the future, I had the heady task of choosing which school would help her nourish and  tap into my child’s potential. The next two months were spent visiting various schools. ',
      image:
        '../../../assets/images/admissions/testinomails/Saman Apparanda Subramani.png',
      alt: 'Saman Apparanda',
    },
    {
      id: 9,
      name: 'Shal and Jamie',
      image:
        '../../../assets/images/admissions/testinomails/Shal and Jamie.png',
      alt: 'Shal and Jamie',
      description:
        'Aisyah joined IELC in August 2019. Our family just relocated from Malaysia to India during that time. Being new to the environment, Aisyah took some time to settle to the new school, especially due to the communication barrier as her mother tongue is Malay and she was not able to communicate in English. ',
    },
    {
      id: 10,
      name: 'Shivali Reddy',
      image:
        '../../../assets/images/admissions/testinomails/Shivali Reddy- Parent of Advika, Prep1.png',
      alt: 'Shivali Reddy',
      description:
        'IELC Whitefield charmed us with the warm team they have. I love how they offer differentiated learning and not rote learning. Each day, Advika is challenged with a new activity. The school believes that every child is capable and they challenge children to the best of their limits. ',
    },
  ];

  // testimonials: any[] = [
  //   {
  //     name: 'Victoria Parker',
  //     description:
  //       'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent fermentum.In id pellent volutpat In id pellent fermentum In id pellent In volutpat In id pellent fermentum.',
  //     image: '../../../assets/images/home/person.png',
  //     alt: 'person',
  //   },
  //   {
  //     name: 'Victoria Parker',
  //     description:
  //       'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent fermentum.In id pellent volutpat In id pellent fermentum In id pellent In volutpat In id pellent fermentum.',
  //     image: '../../../assets/images/home/person.png',
  //     alt: 'person',
  //   },
  //   {
  //     name: 'Victoria Parker',
  //     description:
  //       'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent fermentum.In id pellent volutpat In id pellent fermentum In id pellent In volutpat In id pellent fermentum.',
  //     image: '../../../assets/images/home/person.png',
  //     alt: 'person',
  //   },
  //   {
  //     name: 'Victoria Parker',
  //     description:
  //       'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent fermentum.In id pellent volutpat In id pellent fermentum In id pellent In volutpat In id pellent fermentum.',
  //     image: '../../../assets/images/home/person.png',
  //     alt: 'person',
  //   },
  //   {
  //     name: 'Victoria Parker',
  //     description:
  //       'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent fermentum.In id pellent volutpat In id pellent fermentum In id pellent In volutpat In id pellent fermentum.',
  //     image: '../../../assets/images/home/person.png',
  //     alt: 'person',
  //   },
  //   {
  //     name: 'Victoria Parker',
  //     description:
  //       'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent fermentum.In id pellent volutpat In id pellent fermentum In id pellent In volutpat In id pellent fermentum.',
  //     image: '../../../assets/images/home/person.png',
  //     alt: 'person',
  //   },
  // ];
  news: any[] = [
    {
      description:
        'HOC Monthly Newsletter for the month of july 2022. Newsletter -HOC.',
      image: '../../../assets/images/home/news.jpg',
      link: 'https://indusschools.s3.ap-south-1.amazonaws.com/IndusIelcWhitefield/HOC+NL+-+July+2022.pdf',
      alt: 'News image',
    },
    {
      description:
        'HOC Monthly Newsletter for the month of january 2022. Newsletter -HOC.',
      image: '../../../assets/images/home/news.jpg',
      link: 'https://indusschools.s3.ap-south-1.amazonaws.com/IndusIelcWhitefield/HOC+NL+January+2022.pdf',
      alt: 'News image',
    },
    {
      description:
        'HOC Monthly Newsletter for the month of Nov 2021. Newsletter -HOC.',
      image: '../../../assets/images/home/news.jpg',
      link: 'https://indusschools.s3.ap-south-1.amazonaws.com/IndusIelcWhitefield/HOC+NL+-+November+2021.pdf',
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
    navSpeed: 500,
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
    autoplay: true,
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    lazyLoad: true,
  };
  AcademicYear: AcademiYearModel[];
  constructor(
    private fb: FormBuilder,
    private dropDownService: DropDownService,
    private snackbar: MatSnackBar,
    private homeService: HomeService,
    private titleService: Title,
    private meta: Meta,
    private route: ActivatedRoute,
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    AOS.init();
    this.route.data.subscribe((data: Data) => {
      this.titleService.setTitle(data.title);
      this.meta.updateTag({ name: 'description', content: data.description });
    });
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
  onSubmit() {
    if (this.funClassSubmissionForm.valid) {
      this.isLoading = true;
      this.homeService
        .apiHomeEnquiryFormPost(6, this.funClassSubmissionForm.value)
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
  viewTestimonials(id: number) {
    this._dialog.open(TestimonialsComponent, {
      data: id,
    });
  }
  onRate($event: {
    oldValue: number;
    newValue: number;
    starRating: StarRatingComponent;
  }) {
    // this.feedbackForm.get(formcontrolName).patchValue($event.newValue);
  }

  enquireForm() {
    this._dialog.open(EnquireFormComponent, {
      width: '900px'
    })
  }
}
