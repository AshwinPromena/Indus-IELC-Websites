import { createInjectionToken, InjectFlags } from '@angular/compiler/src/core';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-spotlight-full-details',
  templateUrl: './spotlight-full-details.component.html',
  styleUrls: ['./spotlight-full-details.component.scss'],
})
export class SpotlightFullDetailsComponent implements OnInit {
  spotlights = [
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
      description: ['VIDEO.'],
      video:
        'https://indusschools.s3.ap-south-1.amazonaws.com/IndusIelcKormangala/videos/3.+Design+Thinking+Process+-+IELC+Koramangala.mp4',
    },
    {
      id: 3,
      title: 'CHEERS TO NEW BEGINNINGS',
      description: [
        'The campus resonates with cheerful laughter, enthusiasm and vigour',
      ],
    },
    {
      id: 4,
      title: 'ART EXHIBIT',
      description: [
        'Presenting Our Colorful Grand Art Exhibit and showcasing our creative side.  ``Creativity is contagious, Pass it on ``. Albert Einstein',
      ],
    },
    {
      id: 5,
      title: 'SPORTING WINNER',
      description: [
        'Sport is definitely one of the greatest things man has ever created. It’s also a powerful tool that breaks down all the barriers and helps us feel good about ourselves, both physically and mentally. By playing sports children develop physical skills, exercise, make new friends, have fun, learn to work as a team, learn about fair play, improve self-esteem.',
      ],
    },
    {
      id: 6,
      title: 'FEEDING OUR CURIOSITY',
      description: [
        'Our Nursery engage in dynamic role play at our very own make-believe cafe and give wings to an imaginative process with Ms Simran Oberoi (Ovenderful Mom Bakers Community) as they build maths skills and encourage scientific curiosity, creativity and collaboration',
      ],
    },
    {
      id: 7,
      title: 'HALLOWEEN',
      description: [
        'Superheroes, Vampires, Wizards, Witches, Ghosts, Pirates, Princesses all cast a spooky spell as they prance about and exclaim &quot; Trick or Treat',
      ],
    },
    {
      id: 8,
      title: 'MUSIC RHYTHM',
      description: [
        'Rhythm keeps the song moving along, it gives motion. It can also help make a song feel slower or faster than its actual pulse, or create a sense of groove',
      ],
    },
    {
      id: 9,
      title: 'VOLUNTEERS',
      description: [
        "Our Prep 2 family went on an exciting field trip today to Daily Dump’. The purpose of this trip was to experience an effective way of segregating and managing waste. Children were engaged in Sieving Compost, Segregating waste, planting a sapling and filling the Compost pot with banana peels and coco peat. We take this opportunity to thank Ms Akshatha,  Ms Samreen ( Rayan'sparent) ,Ms Sumi (Noel's parent) and Our Head Of Centre Ms Sonali for giving us their support and enthusiastic company on this fun filled and educational trip",
      ],
    },
    {
      id: 10,
      title: 'STORYTELLING THROUGH VENTRILOQUISM!',
      description: [
        'A unique storytelling form with international ventriloquist Mr. Santosh who engaged the children with various fun filled stories through puppets. A creative experience!',
      ],
    },
    {
      id: 11,
      title: 'FIRST AID TRAINING',
      description: [
        ' It provides your staff with the skills to be able to respond to a first aid emergency until a medical professional arrives. It is vital that should a first aid emergency happen in the playground, dining hall, classroom or during an excursion; all teachers and support workers will be au fait with the risks from and remedy of such a situation.',
      ],
    },
    {
      id: 12,
      title: 'DESIGN THINKING PROCESS',
      description: [
        'As design thinking can be a powerful tool for innovation, the curious learners of Prep Two tuned into their new unit on 3 R’s-Reduce, Reuse and Recycle on which they will be identifying not only problems but also creating unique solutions. The students showed distress when they found their class messy and also worked together in cleaning it up and creating posters to sensitise the issue. They also had an observation walk around the school neighbouring area and noted down the key problems. We also had a brainstorming session along with the professionals who happen to be our parent volunteers Ms. Ruchika Tiwari and Mr. Amal Tiwari through their guidance the students have identified the problems on which they will be working on. The process continues ....',
      ],
    },
    {
      id: 13,
      title: 'EMPATHY IS OUR CORE VALUE',
      description: [
        'We believe in the joy of giving. Celebrating the Joy of giving month with the Provision & Stationary collection drive, supporting the Indus community school.',
      ],
    },
    {
      id: 14,
      title: 'EMPATHY IS OUR CORE VALUE',
      description: [
        'As a school we all want to be more empathetic and open our hearts with love and warmth. Our collaborative Tikkun Olam of spreading happiness through empathy and social contribution. Empathy is the core value and action is the key tenet. Celebrating the Joy of giving month with the Provision & Stationary collection drive, supporting the Kallahalli Children’s home. THANK YOU to all our families for their generosity.',
      ],
    },
    {
      id: 15,
      title: 'HALLOWEEN TRICK OR TREAT !',
      description: ["ABRACADABRA ! The Spooky Halloween Magic Spell all upon us."]
    },
    {
      id: 16,
      title: 'AFTER SCHOOL CREATIVE FUN',
      description: ["Come Join us today ! In our After school care children enjoy an exciting afternoon full of physically and artistically enriching activities."]
    },
    {
      id: 17,
      title: 'CREATIVE EXPERIENCES',
      description: ["Our Annual Sports Day 2022 was spectacular ! Parents as Partners participated and showed students that sporty participation is key to collaboration. What a wonderful lesson role-modelled to perfection. Children did an amazing job showcasing their skills, and the spirit of being a true sportsman was evident- participation is more important than winning. Children performed their dancing moves, and strength  were overjoyed to exhibit their skills and share their joy of sports with you all",
    ]
    },
    {
      id: 18,
      title: 'SPECTACULAR SPORTS DAY',
      description: ["Our Annual Sports Day 2022 was spectacular ! Parents as Partners participated and showed students that sporty participation is key to collaboration. What a wonderful lesson role-modelled to perfection. Children did an amazing job showcasing their skills, and the spirit of being a true sportsman was evident- participation is more important than winning. Children performed their dancing moves, and strength  were overjoyed to exhibit their skills and share their joy of sports with you all “Sport is friendship. Sport is health. Sport is education. Sport is life. Sport brings the whole world together.” – Juan Antonio Samaranch"]
    },
    {
      id: 19,
      title: 'AWARDS AND ACHIEVEMENTS',
      description: ["Heartiest Congratulations! Indus Early Learning Centre Koramangala is ranked Bengaluru`s #4 Proprietary School in the Education World India Preschool Rankings 2022-23 Thank you to our Indus Early Learning Centre - Koramangala Family dear students, parents, teachers, support staff, administration and leaders collectively this award belongs to us all. We continue staying committed to the pursuit of excellence in parameters such as curriculum and pedagogy, innovative teaching , infrastructure and safety and overall leadership."]
    },
  ]
  selectedData: any;
  constructor(
    public dialogRef: MatDialogRef<SpotlightFullDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    let index = this.spotlights.findIndex((x) => x.id === this.data);
    this.selectedData = this.spotlights[index];
    console.log(this.selectedData);
  }
}
