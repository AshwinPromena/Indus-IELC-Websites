import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Data } from '@angular/router';
import * as AOS from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AdmissionTestimonialsComponent } from '../shared/admission-testimonials/admission-testimonials.component';
import { EnquireFormComponent } from '../shared/enquire-form/enquire-form.component';

@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.scss']
})
export class AdmissionsComponent implements OnInit {
  testimonials: any[] = [
    {id:'1',name:'Ms.Ditya Yadav',description: 'Our elder daughter is studying at the main school hence IELC was our obvious choice for our younger one. Due to covid and change of location we thought Ditya would lose a lot in due course. But the school made sure children adjusted well to the changing environment. The school regularly keeps the parents in loop,suggestions are not taken for granted and improvising is always an on-goings process. This inclusiveness has made the school very comfortable for the kids. Recently a football match was arranged for the parents at a club as a part of the `Unit of Inquiry` which was witnessed by children and field trip to Balewadi stadium for an over all sports exposure. All parents highly appreciated the initiative taken. we`re that it will contribute immensely to the over-all development of the children. Ditya enjoyed the grand-parents day with her nani & dadi which she celebrated for the very first time in 2 years of IELC. The school made sure the grand-parents felt comfortable and the event was planned in a way that everybody had a gala time. Despite all the pampering teacher`s make sure that childern finish their food and eat heathier options from the food menu. Ditya has been bringing home some good habits form her teacher Ms.Komal. We can make-out from,Ditya being excited to go school every morning that the school has been doing a good job. her energy levels are equally high while on her way back form school. We wish the school keep`s innovating and evolving to provide high quality education to our kids. The investment has been worth it!',image:'..//..//..//assets/images/admissions/testinomails/testminoral2.png', alt:'person'},
    { id: '2', name: 'Ms. Muskaan Toshniwal', description: 'I joined Indus International School Pune in MYP 4 (Grade 9) and one of the first things I was taught is that no question is silly or irrelevant. We should never be conscious or afraid of asking questions. The teachers here are extremely polite and patient. They are always there for you. You must reach out to them if you have any doubts and they will do their best to help you.', image: '../../../assets/images/admissions/testinomails/testimonials-1.png', alt: 'person' },
    { id: '3', name: 'Ms. Aparna Pawar', description: 'We as a parent are really happy that  Dhruv is doing really well with his activities and trying to learn all new skills in his way and becoming a self independent boy and I`m sure these all skills will definitely help him in future. Not only his activities but also his communication skills are getting better day by day. We are really thankful to  Ielc faculty . May he gets the best guidance throughout his life.', image: '../../../assets/images/home/person.png', alt: 'person' },
    { id: '4', name: 'Ms. Mrunali Shelke', description: 'We are the part of Indus school from last 7 years It`s one of the best preschool of pune. Very happy to be part of it.', image: '../../../assets/images/home/person.png', alt: 'person' },
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
        this.onscroll()
      }, 1000);
    }
  }
  onscroll() {
    document.getElementById(this.contentView).scrollIntoView({ behavior: 'smooth' });
  }
  readMore(id) {
    console.log(id);
    
    this.dialog.open(AdmissionTestimonialsComponent, {
      // width: '1000px',
      data: id
    });

  }

  enquireForm() {
    this.dialog.open(EnquireFormComponent, {
      width: '900px'
    })
  }
}
