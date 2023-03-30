import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Data } from '@angular/router';
import * as AOS from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { EnquireFormComponent } from '../shared/enquire-form/enquire-form.component';

@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.scss'],
})
export class AdmissionsComponent implements OnInit {
  testimonials: any[] = [
    {
      name: "Sara Inamdar",
      description:[
        "I am always excited to speak about IAELC, Belgaum.",
        "Some of the aspects that I like are the school spirit, atmosphere, a sense of community involvement, motivated teachers and engaging activities. Respect is the key value that I see here and this sets good modeling for the kids. Character molding is given extreme importance along with a focus on academic excellence.",
        "Thank You and please continue what you do!"],
      image: "../../../assets/images/home/person.png",
      alt: "person",
    },
    {
      name: 'Manasvi Ravoori',
      description:[
        'Initially, when we enrolled our daughter at Indus Altum Early Learning Centre, we were thinking of keeping her just for a year. But within 6 months of my daughter joining IAELC, we saw immense growth in her confidence, social and cognitive skills.  The fact that my daughter gets up every day morning and says that I want to go to school speaks a lot about the loving, happy and nurturing environment the school provides.  Most importantly, every child is allowed to develop at his/ her own pace. Indus Altum Early Learning Centre is the best decision that we have taken for our child.',
        'Thank you IAELC for facilitating the holistic development of our child.'],
      image: '../../../assets/images/home/person.png',
      alt: 'person',
    },
    {
      name: 'Vedika Angadi ',
      description:[
        'In IAELC we have found an organisation that works as a reliable partner in providing a robust and comprehensive educational foundation to our daughter. It is indeed a testament to the continued dedication and dynamic approach of IAELC teachers that has enabled the delivery of quality educational content via online platforms. We take this opportunity to express our gratitude for their efforts and wish them success in their future endeavors’.'],
      image: '../../../assets/images/home/person.png',
      alt: 'person',
    },
    {
      name: 'Vedh Patil',
      description:[
        'Indus Altum Early Learning Centre, firstly I`d like to thank all teachers and the staff and the Director for doing an amazing job.',
        'My son enjoyed the two years with IAELC. The kids learn so much through play and it is not stressful at all as compared to the other schools around. ',
        'The school cleanliness, the ambience and the teachers are so welcoming. ',
        'They have done a great job with online teaching as well.',
        'I would recommend Indus Altum Early Learning Centre to the parents who are on the lookout for a good preschool for their children',
        'Wishing them success and may you grow to new heights'
      ],
      image: '../../../assets/images/home/person.png',
      alt: 'person',
    },
    {
      name: 'Anika Jain',
      description:[
        'I feel so proud that we chose IAELC for Anika.',
        'We, as parents, are pleased and happy to see how Anika has been molded. We would like to appreciate and thank all the teachers for all their efforts and hard work, especially during the pandemic days. I have seen immense growth in my child in the last few months and I feel happy to have chosen the right preschool. She is happy to go to school as well as attending her virtual school.  Her social skills are improving and I see her performing well in academics.',
        'She does not hesitate to ask if she doesn’t know something. Thanks again to the teachers; I know it is not easy to manage so many young children at once and also to teach them. The staff is doing a commendable job. Kudos to Team IAELC!'
      ],
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
        items: 3,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    lazyLoad: true,
  };
  contentView: string;
  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private dialog: MatDialog,
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

  enquireForm() {
    this.dialog.open(EnquireFormComponent, {
      width: '900px'
    })
  }
}
