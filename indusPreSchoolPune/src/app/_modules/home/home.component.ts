import { ActivatedRoute, Data, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StarRatingComponent } from 'ng-starrating';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as AOS from 'aos';
import { AcademiYearModel, DropDownService, HomeService } from 'build/openapi';
import { Meta, Title } from '@angular/platform-browser';
import { EnquireFormComponent } from '../shared/enquire-form/enquire-form.component';

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
      name: 'Ms. Ishwari Sheth Kataria',
      description:
        'Dear Ms Amreen & Ms Anjali, I wish to thank the teachers who have taken so much efforts on Aadar to groom him over the last 4 years at IELC. Today I saw a small example of the way the teachers have taught the children to think independently.The children were given a cube activity with sight words.Aadar didnt have a cube toy nor did I find a box to fitthe need.I was wondering if    giving up and informing the teacher that we couldn t do it but then Aadar came to me and said "mom we don t need a toy or block we can use a cheese cube instead".This ability to think and think quick did impress me. Thankyou for doing such a fabulous job with children even in these trying times. Please find attached the images of his idea Regards',
      image: '../../../assets/images/home/person.png',
      alt: 'person',
    },
    {
      name: 'Ms. Aparna Pawar',
      description:
        'We as a parent are really happy that  Dhruv is doing really well with his activities and trying to learn all new skills in his way and becoming a self independent boy and I`m sure these all skills will definitely help him in future. Not only his activities but also his communication skills are getting better day by day. We are really thankful to  lelc faculty. May he gets the best guidance throughout his life.',
      image: '../../../assets/images/home/person.png',
      alt: 'person',
    },
    {
      name: 'Ms. Mrunali Shelke.',
      description:
        'We are part of Indus school from last 7 years It`s one of the best preschools in pune. Very happy to be a part of it.',
      image: '../../../assets/images/home/person.png',
      alt: 'person',
    },
 
    
  ];
  news: any[] = [
    {
      description:
        'Head of Centre - Newsletter for the month of August 2022',
      link: 'https://indusschools.s3.ap-south-1.amazonaws.com/IndusIelcPune/NewsLetter/Aug+NL.pdf',
      image: '../../../assets/images/home/news.png',
      alt: 'News image',
      month: 'August',
    },
    {
      description:
        'Aliquam erat volutpat In id pellent fermentum volutpat In id',
      image: '../../../assets/images/home/news-2.png',
      alt: 'News image',
    },
    {
      description:
        'Aliquam erat volutpat In id pellent fermentum volutpat In id',
      image: '../../../assets/images/home/news.png',
      alt: 'News image',
    },
    {
      description:
        'Aliquam erat volutpat In id pellent fermentum volutpat In id',
      image: '../../../assets/images/home/news-1.png',
      alt: 'News image',
    },
    {
      description:
        'Aliquam erat volutpat In id pellent fermentum volutpat In id',
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
        items: 2,
      },
      940: {
        items: 2,
      },
    },
    nav: true,
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
    private snackbar: MatSnackBar,
    private titleService: Title,
    private meta: Meta,
    private route: ActivatedRoute,
    private router: Router,
    private _dialog: MatDialog
  ) { }

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

  viewPdf(link) {
    window.open(link, '_blank')
  }

  redirectToLink() {
    const url = 'https://www.google.com/search?q=indus%20pune%20ielc&rlz=1C1CHBF_enIN1022IN1022&ei=sNo7Y56LHPLU4-EPwJeV-AE&ved=2ahUKEwiKoq76gMb6AhWR3jgGHbr_D0EQvS56BAgKEAE&uact=5&oq=indus+pune+ielc&gs_lcp=Cgdnd3Mtd2l6EAMyBwghEKABEAoyBwghEKABEAoyBwghEKABEAoyBwghEKABEAo6BQgAEJECOhEILhCxAxCDARDHARDRAxCRAjoECAAQQzoLCAAQgAQQsQMQgwE6CAgAELEDEIMBOgoILhDHARCvARBDOgsILhDHARCvARCRAjoQCC4QsQMQgwEQxwEQ0QMQQzoFCAAQgAQ6BwgAELEDEEM6CAguEIAEELEDOhEILhCABBCxAxCDARDHARDRAzoICAAQgAQQyQM6CAgAEIAEELEDOg4ILhCABBDHARCvARDUAjoLCC4QgAQQxwEQrwE6BQguEIAEOggIABAeEBYQCjoGCAAQHhAWOgoIABAeEA8QFhAKOgUIABCGAzoICAAQHhAIEA1KBAhBGABKBQhAEgExSgQIRhgAUABY10pgh0xoBnABeACAAZMCiAHaH5IBBjAuOS4xMZgBAKABAcABAQ&sclient=gws-wiz&tbs=lrf:!1m4!1u2!2m2!2m1!1e1!2m1!1e2!3sIAE,lf:1,lf_ui:2&tbm=lcl&rflfq=1&num=10&rldimm=555760982150165866&lqi=Cg9pbmR1cyBwdW5lIGllbGMZ59IcDTMSDWJIg-ikwKuqgIAIWhcQAhgAGAEiD2luZHVzIHB1bmUgaWVsY5IBCXByZXNjaG9vbJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSQk1scGhXbGxuRUFFqgEMEAEqCCIEaWVsYygA&sa=X&rlst=f#lrd=0x3bc2bf64a9466c37:0x7b675ab3115356a,1,,,&rlfi=hd:;si:555760982150165866,l,Cg9pbmR1cyBwdW5lIGllbGMZ59IcDTMSDWJIg-ikwKuqgIAIWhcQAhgAGAEiD2luZHVzIHB1bmUgaWVsY5IBCXByZXNjaG9vbJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSQk1scGhXbGxuRUFFqgEMEAEqCCIEaWVsYygA;mv:[[18.72753028116996,73.96276594194336],[18.400769923740633,73.31319929155273]]'
    window.open(url, '_blank')
  }

  enquireForm() {
    this._dialog.open(EnquireFormComponent, {
      width: '900px'
    })
  }
}
