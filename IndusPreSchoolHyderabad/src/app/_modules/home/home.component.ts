import { ActivatedRoute, Data, Router } from '@angular/router';
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
import { MatDialog } from '@angular/material/dialog';
import { EnquireFormComponent } from '../shared/enquire-form/enquire-form.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  funClassSubmissionForm: FormGroup;
  rating = 4;
  readMore2 = false;
  bannerOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: [
      '<span class="material-icons">arrow_back</span>',
      '<span class="material-icons">arrow_forward</span>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: true,
    autoplay: false,
    autoplayHoverPause: true,
    autoplaySpeed: 4000,
    lazyLoad: true,
  };

  grades: any[] = [
    // { gradeName: ' Pre-Nursery', year: '1 to 2 years', image: '../../../assets/images/home/grade-pre-nursery.png', alt: 'Pre-Nursery image' },
    { gradeName: ' Nursery', year: '2 to 3 years', image: '../../../assets/images/home/grade-nursery.png', alt: 'Nursery image' },
    { gradeName: ' Reception', year: '3 to 4 years', image: '../../../assets/images/home/grade-pre-nursery.png', alt: 'Reception image' },
    { gradeName: ' PP1', year: '4 to 5 years', image: '../../../assets/images/home/grade-prep-one.png', alt: 'Prep One image' },
    { gradeName: ' PP2', year: '5 to 6 years', image: '../../../assets/images/home/grade-prep-two.png', alt: 'Prep Two image' },
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
    { name: 'Sameera', description: 'I couldn`t have chosen a better school for my son during this time. Indus exceeded my expectations by organising the online classes from May,2020 when no other school was even ready for pandemic. They designed the worksheets and activities in such a way that my 2year old was never bored of online classes and in-fact he always looks forward for the class. They are always open for suggestions and considers parents feedback to provide better online teaching experience for kids.', image: '../../../assets/images/home/person.png', alt: 'person' },
    { name: ' Priyanka', description: 'I have many reasons to thank Indus International Primary School and Miss Mona for. Initially, I was not so keen on the whole online schooling concept and thought it was not needed for my kid at this age. But now, I can surely say that it has been a wonderful learning experience so far. Miss Mona is so loving and caring towards the kids while providing the structure and guidance they need. She is very supportive and has always been accessible. Kudos to the strong dedication and commitment the teachers have at Indus. Online learning experience has been very satisfactory.', image: '../../../assets/images/home/person.png', alt: 'person' },
    { name: 'Gayathri Gali', description: 'With the pandemic, many of our routines went haywire. We were confused initially about how this year would unfold, especially for the kids. As parents, we always want the best for our children. We are so happy that we have chosen Indus International Junior School for our son. The best thing about Indus has always been the teachers for us. We are so thankful to teachers like Ms.Vandana and Ms.Ruby, who have happily taken upon the task of teaching every child so patiently. No matter how many times, they always ensure the kids have understood the concepts well and encourage kids to ask them anything even after the school hours. We are so proud of our teachers who put in their best efforts to teach the kids in a fun-filled and connected way. The dance and music classes are the fun elements in the online classes. An added bonus was to have our kids learn spanish, the online way. Ensuring the kids maintain an active life, we love the P.E classes. Thank you Indus for giving us teachers like Ms.Vandana, Ms.Ruby, Ms.Harini. We have a complete education package delivered to us online every day!', image: '../../../assets/images/home/person.png', alt: 'person' },
    { name: 'Parinita Agarwal', description: 'I am thankful and glad the way Indus international primary school has promptly organised online education during this pandemic. There might be a better way to say thanks, but right now I’m out of words. Just want to say my heartiest thank you to all the teachers who are taking so much effort and help our kids to grow in a better way. They empathize with kids, respect them, and believe that each one has something special that can be built upon. Summer vacation is the time when parents realize that teachers need to be rewarded. But due to this pandemic we realise it every day. A good teacher is everything a parent can never be. Thanks a lot to Miss Ruby and Miss Vandana for giving our little ones big dreams. It is impossible to thank a teacher. There are no words, to appreciate someone whose words empower children to chase their dreams. Parents have got the easy job of raising our own kids. They are rewarded for all their sacrifices with the joy of watching their own blood grow up into fine young men and women. Teachers have got the tough jobs. Their rewards are limited to the hope that their wisdom will make a tiny difference into the lives of children, helping them to be better human beings. Thank you for all your selfless sacrifices', image: '../../../assets/images/home/person.png', alt: 'person' },
    { name: 'Kusuma', description: 'I would like to take this opportunity to thank the team of Indus International Primary School, Jubilee Hills for nurturing my child. I really appreciate your efforts for providing quality online education during these testing times. The academics were exceptional and the character development was incredible. The well-planned curriculum, keeping in mind timely submissions and interactive sessions have been very positive. I can’t thank Ms.Vandana and Ms.Ruby enough for their love, discipline, commitment, support and enthusiasm to our class every single day.', image: '../../../assets/images/home/person.png', alt: 'person' },
    { name: 'Ramya', description: 'Indus International School has now become a school that I root for in their commendable job of transforming a child not just academically but also personally. I have nothing but amazing things to say about this nurturing, loving and progressive environment the school has always created. Lockdown/online school the transition was just a cake walk. Both Ms.Vandana and Ms.Ruby work beautifully with each student especially mine who always looks up to her teachers and their timely feedbacks. Your expertise in teaching has put our minds at ease. Your strength lies in making them feel safe and that all the kids are equals. The vibe that Ms.Ruby generates and the patience that Ms.Vandana shows has always made my daughter comfortable beyond expectations.', image: '../../../assets/images/home/person.png', alt: 'person' },
    { name: 'Ranu', description: 'I would first like to thank both Ms Vandana and Ms Ruby for the stupendous energy they put in their online classes. I am grateful to have both as my child`s teachers. We as parents are very well aware of the efforts they put in for each child during classes. Thank you for going above and beyond, and caring so much for the kids. Lastly I would like to end by saying, Vandana and Ruby, are a perfect combination with their guidance and teaching skills for the kids in showing them the path of learning as they grow!!!!! Thanks a lot!', image: '../../../assets/images/home/person.png', alt: 'person' },
    { name: 'Sakshi Goenka', description: 'I would just like to say that Indus is an amazing school and the teachers make it even better. Both my kids Araina and Aryaveer have adjusted to online schooling just because of the teachers. Their warmth and understanding nature and level of patience is commendable!! Kudos to the entire team!', image: '../../../assets/images/home/person.png', alt: 'person' },
    { name: 'Sonal and Vivek', description: 'We are so happy that we chose Indus school for Manasvi. All thanks to her wonderful and experienced teachers Ms Vandana and Ms Ruby; she has improved tremendously. The dedication of the teachers is highly commendable. Ms Vandana and Ms Ruby are always very understanding of Manasvi’s abilities and go out of their way to help her. Indus’s curriculum; especially the teaching material for online is very well designed. Extra-curricular activities at Indus have helped Manasvi’s overall development. She has picked up photography and a keen interest in music. She has also gained a great love for books all thanks to the teachers’ help', image: '../../../assets/images/home/person.png', alt: 'person' },
    { name: 'Manjeera', description: 'When the pandemic broke out I was very apprehensive about classes going online for a 5 year old. To my surprise and joy, Vihaan has had one of the best years of learning sitting at home thanks to his teachers, Miss Radhika and Miss Neha. They have dealt with the new platform with such ease from the very start and have always found ways to capture the child`s attention with the many fun activities they come up with so spontaneously. Vihaan has become so much more enthusiastic about school now. This to me is a very important aspect of education where the child learns not out of force but with much interest. I just can’t thank Indus and its teachers enough for this.', image: '../../../assets/images/home/person.png', alt: 'person' },
    { name: 'Saadiya', description: 'We have been with Indus since the past 4 years now and it has been nothing but a second home to my son. Seeing his progress since nursery to PP1 has made me be a very proud mother. Despite this pandemic, the efforts the teachers have made to make it a fun and memorable experience is extraordinary. I thank both his teachers Miss Neha and Miss Radhika, for always hearing my child out and keeping in mind the mood of every kid which is not an easy task especially with online classes. Way to go Indus!', image: '../../../assets/images/home/person.png', alt: 'person' },
    { name: 'Divya', description: 'The most remarkable thing about Indus is its innovative and caring teachers, apart from high academic standards they maintain. I really appreciate the way the teachers are always willing to take suggestions and continuously work along with the parents to make the learning experience seamless for kids. The way the school has transitioned to the online platform almost immediately, is commendable. I am happy I chose my kid to be a part of Indus', image: '../../../assets/images/home/person.png', alt: 'person' },
    { name: 'Fatima', description: 'My experience with the onlinee classes were so much better than what i had comprehended. Initially hassaan and i did have issues to adjust to the system but looking at how the teachers put together so many efforts to teach our little ones is commendable. I have no issues with the teaching pattern or with teachers as they`ve been of best help even during such challenging times. One thing I`d like to bring to your notice is that during ORT or any such oral activity teachers are doing a great job in handling the children with so many disturbances from the background and still there are make it happen. All in all, it has been a great experience and I`m so grateful to have teachers like Miss Neha & Miss Radhika for hassaan, couldn`t have had asked for any better. Thank you for being there for our kids just as much as they`re yours.', image: '../../../assets/images/home/person.png', alt: 'person' },
    { name: 'Suchita Sethi', description: 'I want to express my sincere gratitude for all the efforts the faculty has taken to make online classes a Positive experience for Ransh. I appreciate the creativity, innovative ideas and patience with which kids are being handled. Each and every child is being given attention. Ransh has started to show so much improvement in ORT and other subjects with help of such amazing teachers. It was the best decision to send Ransh to Indus. In such testing times these classes have been a blessing for them. Thanking the entire faculty for taking feedbacks from parents and putting what is best for children in their curriculum. Special thanks to Ms Neha and Ms Radhika for helping Ransh in being patient with him and suggesting ways to helping him to improve', image: '../../../assets/images/home/person.png', alt: 'person' },
    { name: 'Neha Agarwal', description: 'The online class is really a great initiative during this phase of lock down to bridge the education gap. Moreover it is very interactive, innovative and engaging. They ensure that children don’t miss class and portions are covered and don’t get burdened when school reopens. Children get to meet teachers and peers. Just a suggestion, once in a week there should be a quiz or question-answer session to find out how much the children have understood and retained.   Really a big thank to you all teachers for giving time to children in this tough time. I also appreciate the effort you show in online class to clear every concept to children and parents too. A big vote of thanks to all teachers.', image: '../../../assets/images/home/person.png', alt: 'person' },
    { name: 'Gurpriya', description: 'I am Aveer’s mother. My son is in PP2 B and I am quite satisfied with the way the school has gained momentum over the past few months . They have adapted to the covid times and online teaching really well. It’s commendable the way the teachers-Miss Radhika and Miss Neha have worked with kids. They have been very patient. The efforts they have been putting on each child is encouraging and the kids put in their best!!! Keep up the good work rolling, Team Indus International', image: '../../../assets/images/home/person.png', alt: 'person' },
    { name: 'Lavanya', description: '3 years back, during the same time, I decided to join Khush in Indus and that is the best decision I’ve made so far!!! The TEACHERS are FABULOUS!! They know each and every kid very well. From the time of online classes, I was worried about how my son would cope with all of this. But the teachers and their techniques to keep the children motivated towards learning has been a wonderful journey!! The TEACHERS are there every minute of the day to answer our queries. Khush is lucky to get such teachers!! A big Hug and Thank you to Ms. Husna & Ms. Tazeen!!! You teachers are just AMAZING!!!', image: '../../../assets/images/home/person.png', alt: 'person' },
    { name: 'Nikhila reddy JC', description: 'This is Nikhila reddy. My daughter’s name is Aihika and she is studying in grade 1 Indus jubilee hills. We have been with Indus for 6 years now. We started the mother toddler class when Aihika was 1 year old. I consider myself lucky for finding the perfect school for Aihika. The education, the faculty, the cleanliness and most importantly the hospitality that Indus school has is top notch. In these difficult times where a pandemic is changing the way the world works, Indus school has very smoothly transitioned to online school with such ease. I know that it would have been a lot of hard work for the teachers and the institution but they make it look so easy, it’s amazing. They are so good, so patient and so well informed about everything. They are doing such a fabulous job with the children in class. Thank you Indus for making us feel so comfortable and so loved. Looking forward for another 10 years with you.', image: '../../../assets/images/home/person.png', alt: 'person' },
  ]
  news: any[] = [
    {
      description: 'HOC Monthly Newsletter for the month of January 2022.',
      image: '../../../assets/images/home/news.png',
      alt: 'News image',
      link: 'https://indusschools.s3.ap-south-1.amazonaws.com/IndusIelcHyderabad/January+Newsletter.pdf',
      month: "January"
    },
    {
      description: 'HOC Monthly Newsletter for the month of February 2022.',
      image: '../../../assets/images/home/news-1.png',
      alt: 'News image',
      link: 'https://indusschools.s3.ap-south-1.amazonaws.com/IndusIelcHyderabad/February+Newsletter.pdf',
      month: 'February'
    },
    { 
      description: 'HOC Monthly Newsletter for the month of March 2022.', 
      image: '../../../assets/images/home/news-3.png', 
      alt: 'News image', 
      link: 'https://indusschools.s3.ap-south-1.amazonaws.com/IndusIelcHyderabad/March+Newsletter.pdf',
      month: 'March'
    },
    { 
      description: 'HOC Monthly Newsletter for the month of April 2022.', 
      image: '../../../assets/images/home/news-3.png', 
      alt: 'News image', 
      link: 'https://indusschools.s3.ap-south-1.amazonaws.com/IndusIelcHyderabad/April+Newsletter.pdf',
      month: 'April'
    },
    { 
      description: 'HOC Monthly Newsletter for the month of May 2022.', 
      image: '../../../assets/images/home/news-3.png', 
      alt: 'News image', 
      link: 'https://indusschools.s3.ap-south-1.amazonaws.com/IndusIelcHyderabad/May+Newsletter+2022.pdf',
      month: 'May'
    },
    { 
      description: 'HOC Monthly Newsletter for the month of June 2022.', 
      image: '../../../assets/images/home/news-3.png', 
      alt: 'News image', 
      link: 'https://indusschools.s3.ap-south-1.amazonaws.com/IndusIelcHyderabad/June+Newsletter.pdf',
      month: 'June'
    },
    { 
      description: 'HOC Monthly Newsletter for the month of July 2022.', 
      image: '../../../assets/images/home/news-3.png', 
      alt: 'News image', 
      link: 'https://indusschools.s3.ap-south-1.amazonaws.com/IndusIelcHyderabad/July+Newsletter.pdf',
      month: 'July'
    },
    { 
      description: 'HOC Monthly Newsletter for the month of August 2022.', 
      image: '../../../assets/images/home/news-3.png', 
      alt: 'News image', 
      link: 'https://indusschools.s3.ap-south-1.amazonaws.com/IndusIelcHyderabad/August+Newsletter.pdf',
      month: 'August'
    },
    { 
      description: 'HOC Monthly Newsletter for the month of September 2022.', 
      image: '../../../assets/images/home/news-3.png', 
      alt: 'News image', 
      link: 'https://indusschools.s3.ap-south-1.amazonaws.com/IndusIelcHyderabad/September+Newsletter.pdf',
      month: 'September'
    },
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
    private dropDownService: DropDownService,
    private homeService: HomeService,
    private snackbar: MatSnackBar,
    private route: ActivatedRoute,
    private meta: Meta,
    private titleService: Title,
    private router: Router,
    private _dialog: MatDialog,
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
            this.router.navigate[('thank-you')];
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

  viewPdf(link) {
    window.open(link, '_blank');
  }

  enquireForm() {
    this._dialog.open(EnquireFormComponent, {
      width: '900px'
    })
  }
}
