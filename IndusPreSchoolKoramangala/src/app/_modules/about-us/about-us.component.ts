import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Data } from '@angular/router';
import * as AOS from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LeadershipFullDetailsComponent } from '../shared/leadership-full-details/leadership-full-details.component';
import { PopupBannerComponent } from '../shared/popup-banner/popup-banner.component';
import { SpotlightFullDetailsComponent } from '../shared/spotlight-full-details/spotlight-full-details.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  spotlight: any[] = [
    {
      id: 1,
      title: 'EMPATH IN ACTION',
      description:
        'We consider it important to treat all living things with respect. Biophilia encourages us to embrace everything around us with love and appreciation, and empathy is one of our guiding core values. We think that by taking good care of and learning about the living things around us, we may develop empathy for both the little and massive creatures that coexist with us in the ecosystem',
      img: './/../assets/images/about-us/spotlight/spot_light12.jpg',
      alt: 'Spotlight image',
    },
    {
      id: 2,
      title: 'DESIGN THINKING PROCESS',
      description:
        'The power of asking questions, problem posing and finding creative solutions to complex problems.',
      img: '../../../assets/images/about-us/spotlight/spot-light1.jpg',
      video:
        'https://indusschools.s3.ap-south-1.amazonaws.com/IndusIelcKormangala/videos/3.+Design+Thinking+Process+-+IELC+Koramangala.mp4',
      alt: 'Spotlight image',
    },
    {
      id: 3,
      title: 'CHEERS TO NEW BEGINNINGS',
      description:
        'The campus resonates with cheerful laughter, enthusiasm and vigour',
      img: '../../../assets/images/about-us/spotlight/spot-light2.jpg',
      alt: 'Spotlight image',
    },
    {
      id: 4,
      title: 'ART EXHIBIT',
      description:
        'Presenting Our Colourful Grand Art Exhibit and showcasing our creative side.',
      img: '../../../assets/images/about-us/spotlight/spot-light3.jpg',
      alt: 'Spotlight image',
    },
    {
      id: 5,
      title: 'SPORTING WINNER',
      description:
        'Sport is definitely one of the greatest things man has ever created. It’s also a powerful tool that breaks down all the barriers and helps us feel good about ourselves, both physically and mentally. By playing sports children develop physical skills, exercise, make new friends, have fun, learn to work as a team, learn about fair play, improve self-esteem.',
      img: '../../../assets/images/about-us/spotlight/sporting winner.jpg',
      alt: 'Spotlight image',
    },
    {
      id: 6,
      title: ' FEEDING OUR CURIOSITY',
      description:
        'Our Nursery engage in dynamic role play at our very own make-believecafe and give wings to an',
      img: '.././../../assets/images/about-us/spotlight/feeding-curiosity.jpg',
      alt: 'Spotlight image',
    },
    {
      id: 7,
      title: 'HALLOWEEN',
      description:
        'Superheroes, Vampires, Wizards, Witches, Ghosts, Pirates, Princesses all cast a spooky spell as they prance about and exclaim &quot; Trick or Treat',
      img: '../../../assets/images/about-us/spotlight/halloween.jpg',
      alt: 'Spotlight image',
    },
    {
      id: 8,
      title: 'MUSIC RHYTHM',
      description:
        'Rhythm keeps the song moving along, it gives motion. It can also help make a song feel slower or faster than its actual pulse, or create a sense of groove',
      img: '../../../assets/images/about-us/spotlight/music rhythm.jpg',
      alt: 'Spotlight image',
    },
    {
      id: 9,
      title: 'VOLUNTEERS',
      description:
        'Our Prep 2 family went on an exciting field trip today to Daily Dump’. The purpose of this trip was to experience an effective way of segregating and managing waste. Children were engaged in Sieving Compost, Segregating waste, planting a sapling and filling the Compost pot with banana peels and coco peat. We take this opportunity to thank Ms Akshatha,  Ms Samreen (Rayan`sparent) ,Ms Sumi (Noel`s parent) and Our Head Of Centre Ms Sonali for giving us their support and enthusiastic company on this fun filled and educational trip',
      img: '../../../assets/images/about-us/spotlight/vounteeers.jpg',
      alt: 'Spotlight image',
    },
    {
      id: 10,
      title: 'STORYTELLING THROUGH VENTRILOQUISM!',
      description: 'A unique storytelling form with',
      img: '../../../assets/images/about-us/spotlight/story telling.jpg',
      alt: 'Spotlight image',
    },
    {
      id: 11,
      title: 'FIRST AID TRAINING',
      description:
        ' It provides your staff with the skills to be able to respond',
      img: '../../../assets/images/about-us/spotlight/first aid traning.jpg',
      alt: 'Spotlight image',
    },
    {
      id: 12,
      title: 'DESIGN THINKING PROCESS',
      description:
        'As design thinking can be a powerful tool for innovation, the curious',
      img: '../../../assets/images/about-us/spotlight/design thinking.jpg',
      alt: 'Spotlight image',
    },
    {
      id: 13,
      title: ' EMPATHY IS OUR CORE VALUE',
      description:
        'We believe in the joy of giving. Celebrating the Joy of giving month with the Provision & Stationary',
      img: '../../../assets/images/about-us/spotlight/encourage.jpg',
      alt: 'Spotlight image',
    },
    {
      id: 14,
      title: ' EMPATHY IS OUR CORE VALUE.',
      description:
        'As a school we all want to be more empathetic and open our hearts with love and warmth.',
      img: '../../../assets/images/about-us/spotlight/food.jpg',
      alt: 'Spotlight image',
    },
    {
      id: 15,
      title: 'HALLOWEEN TRICK OR TREAT ! ',
      description:
        'ABRACADABRA ! The Spooky Halloween Magic Spell all upon us. ',
      img: '../../../assets/images/about-us/spotlight/2.png',
      video:
        'https://indusschools.s3.ap-south-1.amazonaws.com/IndusIelcKormangala/videos/3.+Design+Thinking+Process+-+IELC+Koramangala.mp4',
      alt: 'Spotlight image',
    },
    {
      id: 16,
      title: 'AFTER SCHOOL CREATIVE FUN ',
      description:
        'Come Join us today ! In our After school care children enjoy an exciting afternoon full of physically and artistically enriching activities',
      img: '../../../assets/images/about-us/spotlight/1.png',
      video:
        'https://indusschools.s3.ap-south-1.amazonaws.com/IndusIelcKormangala/videos/3.+Design+Thinking+Process+-+IELC+Koramangala.mp4',
      alt: 'Spotlight image',
    },
    {
      id: 17,
      title: 'CREATIVE EXPERIENCES',
      description:
          'Students of Prep one visited a Vegan Bakery CRAVE by Leena where they explored science , math and artistic expressions through the wonders of baking.',
      img: './../../../assets/images/about-us/spotlight/CREATIVE-EXPERIENCES.jpg',
      alt: 'spotlight image'
    },
    {
      id: 18,
      title: 'SPECTACULAR SPORTS DAY',
      description:
          'Our Annual Sports Day 2022 was spectacular ! Parents as Partners participated and showed students that sporty participation is key to collaboration. What a wonderful lesson role-modelled to perfection. Children did an amazing job showcasing their skills, and the spirit of being a true sportsman was evident- participation is more important than winning. Children performed their dancing moves, and strength  were overjoyed to exhibit their skills and share their joy of sports with you all “Sport is friendship. Sport is health. Sport is education. Sport is life. Sport brings the whole world together.” – Juan Antonio Samaranch',
      img: '../../../assets/images/about-us/spotlight/sports-day.jpg',
      alt: 'spotlight image'
    },
    {
      id: 19,
      title: 'AWARDS AND ACHIEVEMENTS',
      description:
          'Heartiest Congratulations! Indus Early Learning Centre Koramangala is ranked Bengaluru`s #4 Proprietary School in the Education World India Preschool Rankings 2022-23 Thank you to our Indus Early Learning Centre - Koramangala Family dear students, parents, teachers, support staff, administration and leaders collectively this award belongs to us all. We continue staying committed to the pursuit of excellence in parameters such as curriculum and pedagogy, innovative teaching , infrastructure and safety and overall leadership.',
      img: './../../../assets/images/about-us/spotlight/awards-and-achievements.jpg',
      alt: 'spotlight image'
    },

  ];
  news: any[] = [
    {
      description:
        'HOC Monthly Newsletter for the month of May 2022. Newsletter -HOC',
      image: '../../../assets/images/home/news.jpg',
      alt: 'News image',
    },
    {
      description:
        'HOC Monthly Newsletter for the month of April 2022. Newsletter -HOC',
      image: '../../../assets/images/home/news.jpg',
      alt: 'News image',
    },
    {
      description:
        'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent ferme.',
      image: '../../../assets/images/home/news.jpg',
      alt: 'News image',
    },
    {
      description:
        'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent ferme.',
      image: '../../../assets/images/home/news.jpg',
      alt: 'News image',
    },
    {
      description:
        'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent ferme.',
      image: '../../../assets/images/home/news.jpg',
      alt: 'News image',
    },
    {
      description:
        'Aliquam erat volutpat In id pellent fermentum volutpat In id pellent ferme.',
      image: '../../../assets/images/home/news.jpg',
      alt: 'News image',
    },
  ];

  spotLightOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin: 30,
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
        items: 3,
      },
      940: {
        items: 4,
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
  contentView: string;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private titleService: Title,
    private meta: Meta
  ) {
    this.route.queryParamMap.subscribe((queryParamMap) => {
      this.contentView = queryParamMap.get('contentView');
      console.log(this.contentView);

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
  }
  viewLeadershipFullDetails(id: number) {
    this.dialog.open(LeadershipFullDetailsComponent, {
      data: id,
    });
  }
  onscroll(contentView: string) {
    this.contentView = contentView;
    document.getElementById(contentView).scrollIntoView({ behavior: 'smooth' });
  }
  openDialog(id): void {
    this.dialog.open(SpotlightFullDetailsComponent, {
      data: id,
    });
  }
}
