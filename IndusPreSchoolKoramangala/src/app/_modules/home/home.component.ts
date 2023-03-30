import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as AOS from 'aos';
import { AcademiYearModel, DropDownService, HomeService } from 'build/openapi';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CurriculumComponent } from '../curriculum/curriculum.component';
import { PopupBannerComponent } from '../shared/popup-banner/popup-banner.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  funClassSubmissionForm: FormGroup;
  rating = 4;
  readMore2 = false;
  // AcademicYear: any[] = [
  //   {
  //     academicYearId: 1,
  //     academicYear: '2022-2023',
  //   },
  //   {
  //     academicYearId: 2,
  //     academicYear: '2023-2024',
  //   },
  // ];

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
      image: '../../../assets/images/home/environ-1.jpg',
      alt: 'Happy Environment 1',
    },
    {
      image: '../../../assets/images/home/environ-2.jpg',
      alt: 'Happy Environment 2',
    },
    {
      image: '../../../assets/images/home/environ-3.jpg',
      alt: 'Happy Environment 3',
    },
    {
      image: '../../../assets/images/home/environ-4.jpg',
      alt: 'Happy Environment 4',
    },
    {
      image: '../../../assets/images/home/environ-5.jpg',
      alt: 'Happy Environment 5',
    },
    {
      image: '../../../assets/images/home/environ-6.jpg',
      alt: 'Happy Environment 6',
    },
  ];

  testimonials: any[] = [
    // {
    //   name: 'Harshada Joshi',
    //   description:
    //     "It's been almost 3 years since my son has been going to IELC. Its a great school with lovely staff. I am really glad to have made this choice. A few points which I love about the school                         Safety - No stranger, for that matter no one but the parents of the children are allowed to enter the school when children are around. No nannies, drivers are allowed in the campus.",
    //   image: '../../../assets/images/home/person.png',
    //   alt: 'person',
    // },
    {
      name: 'Manjunath B. N.',
      description:
        'IELC Koramangala excels in all aspects of an ideal preschool. The teachers practice the latest and international methods of teaching wherein the learning abilities and individual needs of each child are respected and given due importance. The school management and its policies are both children and parent friendly. The Head of Centre, Ms. Sonali Malhotra, has always valued the opinions of parents and addressed their concerns. Also, the school provides frequent opportunities for parent-teacher interactions through which parents gain insight into the learning process and progress of their children. IELC Koramangala is an excellent preschool.',
      image: '../../../assets/images/home/person.png',
      alt: 'person',
    },
    {
      name: 'Nithya Marattukalam',
      description:
        'After a lot of research and discussions, I zeroed in on Indus International School Bangalore. Thus my 4 yr old ,Mia joined their Koramangala branch .From that tensed first day of school to date , my only problem with Indus is that my daughter now prefers school to home .With Mia it’s mainly because the school keeps her on her toes with a good balance of fun activities like dance , sports , music etc., along with education. The curriculum is well planned and executed even better.3 Months into Indus, she can speak Spanish, play a keyboard and chess. Her teacher Miss Meera is almost like her second mother, she’s well qualified and someone you can absolutely trust. The Head of Centre is very grounded and approachable, always striving to make an already excellent school BETTER.',
      image: '../../../assets/images/home/Group 61.png',
      alt: 'person',
    },
    {
      name: ' Ms. Simran Oberoi Multani',
      description:
        "My interaction with Indus Early Learning Centre Koramangala is almost a year old, through my healthy baking community and it's been absolutely wonderful. It has been amazing to see how they give the little children a range of life experiences and skills through creative methods. Their staff has been very involved and supportive each time we have visited the centre. Sonali is a warm and collaborative leader, and her engaging way with the staff, parents and partners like me have always made it an enriching experience to go back to.",
      image: '../../../assets/images/home/Group 61.png',
      alt: 'person',
    },
    {
      name: 'Mrs. Archana Akhaury',
      description:
        'The school is exceptional when it comes to the teachers. The teachers are extremely nice to the kids and ensure that they are learning in an environment of love and care with proper personal attention. My 4 year old loves going to the school which in itself is a testament to the love he gets there. The premises are homely and hygienic with abundant space that a growing child needs with proper supervision and security. Will definitely recommend the Koramangala centre in my circle.',
      image: '../../../assets/images/home/Group 61.png',
      alt: 'person',
    },
    {
      name: ' Mrs. Jane Menon',
      description:
        'IELC Koramangala has proven to be the perfect fit for my preschooler. The intimate feel of the building creates a comfortable environment that is not too daunting for a first-timer, and the staff reinforce this with their warm hands-on approach. The pace and standard of learning has been wonderful to see, as its always with an element of fun that makes learning enjoyable. I have done, and will continue to, recommend IELC Koramangala for its professionalism, clear vision and sincere committment to their pupils.',
      image: '../../../assets/images/home/Group 61.png',
      alt: 'person',
    },
    {
      name: 'Bulbul Satsangi',
      description:
        "My son entered the school campus as an almost 3 years old about 1.5 years back and today its become like his second home! He loves his school, his teachers who go out of their way to care for every child, we are in touch with them 24x7, they are open about school's policies, procedures and they actually treat my child like one of their own! I guess Indus is the best start any child and their worried parents could ask for when it comes to academics.",
      image: '../../../assets/images/home/person.png',
      alt: 'person',
    },
    {
      name: 'Mrs. Preethi Nanda Kishore',
      description:
        'As the academic year comes to an end, I would like to express my heartfelt gratitude to all teachers. You have been a great support and mentor to kids and parents during these tough times. Indus has been an inspiration and guiding light in shaping little minds. My special thanks to Ms. Nidhi. Words are not enough to express gratitude...even then Thank you for being an inspiration and also helping me connect to the inner-child in me. I wish you all continued success and happiness in your endeavours.',
      image: '../../../assets/images/home/Group 61.png',
      alt: 'person',
    },
    {
      name: 'Mr. Sandeep and Ms. Chaithra',
      description:
        "It's our second year with IELC Koramangala and it's been a great year. We would like to thank all the teachers and faculty members for all the effort they have put in to bring out the best curriculum in this pandemic situation. The best part is that the classes are lively and well balanced curriculum and all the classes are well scheduled. You guys are doing a great job. Keep up the good work. ",
      image: '../../../assets/images/home/person.png',
      alt: 'person',
    },
    {
      name: 'Amrita Vaswani',
      description:
        'We joined the Indus Early Learning Centre, Koramangala last year, in the middle of the pandemic. Needless to say, it was the best decision we have made in this time for our child. Right from the curriculum to the teacher, our child has experienced not only hands-on learning, but also the pure affection and patience with which the teachers have conducted these online classes while ensuring Rudra gets comfortable with his new environment. I truly appreciate Indus ELC for constantly incorporating our feedback, checking in with parents and making learning systematic and progressive even in these different times. We have been very satisfied with Rudra’s growth and learning, and looking forward to continuing our journey with the Indus family in the coming years.',
      image: '../../../assets/images/home/Group 61.png',
      alt: 'person',
    },
    {
      name: 'Ms. Shyamala S',
      description:
        'My daughter is a part of the Reception program at Indus pre-school Koramangala and our journey so far has been absolutely enriching.  Initially we took a lot of time to settle because of the transition from physical to online classes, I would like to thank Ms Nidhi for her continuous effort to make online classes more fun and to create new ways of learning also for being so supportive, understanding, flexible with timings and generous towards my daughter throughout the year.  The other staff and administration is also very involved and passionate about what they do.  Thank you so much ',
      image: '../../../assets/images/home/Group 61.png',
      alt: 'person',
    },
  ];
  news: any[] = [
    // {
    //   description: 'HOC Monthly Newsletter for the month of October  2022',
    //   image: '../../../assets/images/home/october.png',
    //   alt: 'News image',
    //   link: 'https://indusschools.s3.ap-south-1.amazonaws.com/IndusIelcKormangala/NewsLetter/IELCKoramangala_HOC_Newsletter_October_2022.pdf',
    //   month: 'October',
    // },
    {
      description: 'HOC Monthly Newsletter for the month of September  2022',
      image: '../../../assets/images/about-us/thumbnails/image-sept.png',
      alt: 'News image',
      link: 'https://indusschools.s3.ap-south-1.amazonaws.com/IndusIelcKormangala/NewsLetter/IELCKoramangala_HOC_Newsletter_September_2022.pdf',
      month: 'September',
    },
    {
      description: 'HOC Monthly Newsletter for the month of January  2023',
      image: './../../../assets/images/about-us/thumbnails/january-2023.png',
      alt: 'News image',
      link: 'https://indusschool.s3.ap-south-1.amazonaws.com/PreSchool-Koramangala/Newsletter/IELCKoramangala_HOC_Newsletter_January_2023.pdf',
      month: 'January',
    },
    {
      description: 'HOC Monthly Newsletter for the month of December  2022',
      image: './../../../assets/images/about-us/thumbnails/december.png',
      alt: 'News image',
      link: 'https://indusschools.s3.ap-south-1.amazonaws.com/IndusIelcKormangala/IELCKoramangala_HOC_Newsletter_December_2022.pdf',
      month: 'December',
    },
    {
      description: 'HOC Monthly Newsletter for the month of November  2022',
      image: './../../../assets/images/about-us/thumbnails/november.png',
      alt: 'News image',
      link: 'https://indusschools.s3.ap-south-1.amazonaws.com/IndusIelcKormangala/NewsLetter/IELCKoramangala_HOC_Newsletter_November_2022.docx.pdf',
      month: 'November',
    },
    {
      description: 'HOC Monthly Newsletter for the month of October  2022',
      image: '../../../assets/images/about-us/thumbnails/october.jpeg',
      alt: 'News image',
      link: 'https://indusschools.s3.ap-south-1.amazonaws.com/IndusIelcKormangala/IELCKoramangala_HOC_Newsletter_October_2022+(1).pdf',
      month: 'October',
    },
    {
      description: 'HOC Monthly Newsletter for the month of September  2022',
      image: '../../../assets/images/about-us/thumbnails/september.jpeg',
      alt: 'News image',
      link: 'https://indusschools.s3.ap-south-1.amazonaws.com/IndusIelcKormangala/IELCKoramangala_HOC_Newsletter_September_2022+(1).pdf',
      month: 'September',
    },

    {
      description: 'HOC Monthly Newsletter for the month of August 2022',
      image: '../../../assets/images/about-us/thumbnails/august-news.png',
      alt: 'News image',
      link: 'https://indusschools.s3.ap-south-1.amazonaws.com/IndusBangalore/NewsLetter/IELCKoramangala_HOC_Newsletter_August_2022.pdf',
      month: 'August',
    },
    {
      description: 'HOC Monthly Newsletter for the month of July  2022',
      image: '../../../assets/images/about-us/thumbnails/july.png',
      alt: 'News image',
      link: 'https://indusschools.s3.ap-south-1.amazonaws.com/IndusBangalore/NewsLetter/IELCKoramangala_HOC_Newsletter_July_2022.pdf',
      month: 'July',
    },
    {
      description: 'HOC Monthly Newsletter for the month of June  2022',
      image: '../../../assets/images/about-us/thumbnails/june-news.png',
      alt: 'News image',
      link: 'https://indusschools.s3.ap-south-1.amazonaws.com/IndusIelcKormangala/NewsLetter/IELCKoramangala_HOC_Newsletter_June2022+(1).pdf',
      month: 'June',
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
    navText: ['<', '>'],
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
  AcademicYear: AcademiYearModel[];
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
  contentView: string;

  constructor(
    private fb: FormBuilder,
    private dropDownService: DropDownService,
    private snackbar: MatSnackBar,
    private homeService: HomeService,
    private route: ActivatedRoute,
    private titleService: Title,
    private meta: Meta,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.route.queryParamMap.subscribe((queryParamMap) => {
      this.contentView = queryParamMap.get('contentView');
      if (this.contentView) {
        setTimeout(() => {
          this.onscroll(this.contentView);
        }, 1000);
      }
    });
  }

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
        .apiHomeEnquiryFormPost(5, this.funClassSubmissionForm.value)
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
  onscroll(contentView: string) {
    this.contentView = contentView;
    document.getElementById(contentView).scrollIntoView({ behavior: 'smooth' });
  }
  viewPdf(link) {
    window.open(link, '_blank');
  }
}
