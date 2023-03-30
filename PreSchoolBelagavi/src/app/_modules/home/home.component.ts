import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as AOS from 'aos';
import { AcademiYearModel, DropDownService, HomeService } from 'build/openapi';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { EnquireFormComponent } from '../shared/enquire-form/enquire-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  funClassSubmissionForm: FormGroup;
  rating = 4;
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
      image: '../../../assets/images/home/environ-3-new.png',
      alt: 'Happy Environment 3',
    },
    
    {
      image: '../../../assets/images/home/environ-4-new.png',
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
      name: 'Mrs. Laxmi Inamdar',
      description: 
      'I am always excited to speak about IAELC, Belgaum Some of the aspects that I like are the school spirit, atmosphere, a sense of community involvement, motivated teachers and engaging activities. Respect is the key value that I see here and this sets good modelling for the kids. Character molding is given extreme importance along with a focus on academic excellence Thank You and please continue what you do!',
      image: '../../../assets/images/home/Group-61.png',
      alt: 'person',
    },
    {
      name: 'Mrs. Sumati Ravoori',
      description:
      'Initially, when we enrolled our daughter at Indus Altum Early Learning Centre, we were thinking of keeping her just for a year. But within 6 months of my daughter joining IAELC, we saw immense growth in her confidence, social and cognitive skills.  The fact that my daughter gets up every day morning and says that I want to go to school speaks a lot about the loving, happy and nurturing environment the school provides.  Most importantly, every child is allowed to develop at his/ her own pace. Indus Altum Early Learning Centre is the best decision that we have taken for our child. Thank you IAELC for facilitating holistic development of our child.',
      image: '../../../assets/images/home/Group-61.png',
      alt: 'person',
    },
    {
      name: 'Dr. Darshan Angadi',
      description:
      'In IAELC we have found an organisation that works as a reliable partner in providing a robust and comprehensive educational foundation to our daughter. It is indeed a testament to the continued dedication and dynamic approach of IAELC teachers that has enabled the delivery of quality educational content via online platforms. We take this opportunity to express our gratitude for their efforts and wish them success in their future endeavors.',
      image: '../../../assets/images/home/person.png',
      alt: 'person',
    },
    {
      name: 'Mr. Nischal Patil',
      description:
      'Indus Altum Early Learning Centre, firstly I`d like to thank all teachers and the staff and the Director for doing an amazing job. My son enjoyed the two years with IAELC. The kids learn so much through play and it is not stressful at all as compared to the other schools around. The school cleanliness, the ambience and the teachers are so welcoming. They have done a great job with online teaching as well. I would recommend Indus Altum Early Learning Centre to the parents who are on a lookout for a good preschool for their children Wishing them success and may you grow to new heights',
      image: '../../../assets/images/home/person.png',
      alt: 'person',
    },
    {
      name: ' Mrs. Yogita Zanvar',
      description: 
      'Indus Altum Early Learning Centre has a team of best teachers creating future citizens. I am happy to be associated with team IAELC. My best wishes to them to continue with the same quality work.',
      image: '../../../assets/images/home/Group-61.png',
      alt: 'person',
    },
    {
      name: 'Mr. Alpesh Jain',
      description: 
      'I feel so proud that we chose IAELC for Anika. We, as parents, are pleased and happy to see how Anika has been moulded. We would like to appreciate and thank all the teachers for all their efforts and hard work, especially during the pandemic days. I have seen immense growth in my child in the last few months and I feel happy to have chosen the right preschool. She is happy to go to school as well as attending her virtual school.  Her social skills are improving and I see her performing well in academics. She does not hesitate to ask if she doesn’t know something. Thanks again to the teachers; I know it is not easy to manage so many young children at once and also to teach them. The staff is doing a commendable job. Kudos to Team IAELC!"',
      image: '../../../assets/images/home/person.png',
      alt: 'person',
    },
    {
      name: 'Mrs. Sunanda Bharadwaj & Maj Sainesh Bharadwaj',
      description: 
      'We are so thrilled that our child loves going to school so much. When the school first started, we were so nerve-wracked. Would he like school? Would he socialize and make new friends? When he instantly started loving school and going to class, we were so relieved. We wish to thank the team Indus Altum for accepting Param with open arms and for making him enjoy going to school each day. From the rooms you decorate to the activities you plan, each of these has enriched Param in all spheres of life. Through your hard work, our child is settling down. Your work, wisdom, and passion have helped him to become a better human being. Thank you so much for filling each day of school with enthusiasm, fun and unconditional love. Thank you for all your hard work, sacrifice and energy!',
      image: '../../../assets/images/home/Group-61.png',
      alt: 'person',
    },
    {
      name: 'Mr. Shailesh Mangale',
      description: 'Fantastic school!! Great infrastructure along with the best teachers who nurture the kids for all-round development, second to none.  The small class size ensures excellent & dedicated attention which reflects the child’s learning experience. Kids enjoy, learn, improve and develop at IAELC. Moreover, they are eager to go to school every day. Online classes during the pandemic are also quite effective. We are fortunate to have our son enrolled at  Indus Altum Early Learning Centre.',
      image: '../../../assets/images/home/person.png',
      alt: 'person',
    },
  ];
  news: any[] = [
    {
      description: 'Monthly Newsletter for the month of June 2022',
      image: '  ../../../assets/images/home/news-june.png',
      link: 'https://indusschools.s3.ap-south-1.amazonaws.com/IndusIelcBelagavi/IAELC+Newsletter+-+June+Edition.pdf',
      alt: 'News image',
      month: 'June'
    },
    {
      description:
        'Monthly Newsletter for the month of July  2022',
      image: "../../../assets/images/home/news-july.png",
      link: 'https://indusschools.s3.ap-south-1.amazonaws.com/IndusIelcBelagavi/IAELC+Newsletter+--+July+Edition.pdf',
      alt: 'News image',
      month: 'July'
    },
    {
      description: 'Monthly Newsletter for the month of August 2022',
      image: '../../../assets/images/home/news-august.png',
      link: 'https://indusschools.s3.ap-south-1.amazonaws.com/IndusIelcBelagavi/IAELC+Newsletter+-+August+Edition.pdf',
      alt: 'News image',
      month: 'August'
    },
    // {
    //   description:
    //     'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent ferme.',
    //   image: '../../../assets/images/home/news.jpg',
    //   alt: 'News image',
    // },
    // {
    //   description:
    //     'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent ferme.',
    //   image: '../../../assets/images/home/news.jpg',
    //   alt: 'News image',
    // },
    // {
    //   description:
    //     'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent ferme.',
    //   image: '../../../assets/images/home/news.jpg',
    //   alt: 'News image',
    // },
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
    autoplay: true,
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    lazyLoad: true,
  };
  isLoading = false;
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
    private snackbar: MatSnackBar,
    private homeService: HomeService,
    private route: ActivatedRoute,
    private titleService: Title,
    private meta: Meta,
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
    // starRating: StarRatingComponent;
  }) {
    // this.feedbackForm.get(formcontrolName).patchValue($event.newValue);
  }
  onSubmit() {
    if (this.funClassSubmissionForm.valid) {
      this.isLoading = true;
      this.homeService
        .apiHomeEnquiryFormPost(9, this.funClassSubmissionForm.value)
        .subscribe((data) => {
          if (data.statusCode === 200) {
            this.isLoading = false;
            this.router.navigate(['thank-you']);
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
    window.open(link, '_blank');
  }

  enquireForm() {
    this._dialog.open(EnquireFormComponent, {
      width: '900px'
    })
  }
}
