import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  testimonialsList = [
    {
      id: 1,
      description: [
        ' Dhanraj What better way can I describe the feeling we have towards IELC. An apprehensive visit to the centre back in January 2017 turned out to be the most promising one for us, considering our move to Bangalore from a different geological location and for a little person who was distant from the culture she was born into.',
        'An ever-smiling head of centre to the most positive teachers, made this transition easy for our child, and we love to see her off every day, happy to school!',
        'Important aspects of a child’s development are conceptual and ‘Units of Inquiry’ is a wonderful and a holistic approach to building the foundation that develops early language, math and environmental skills.',
        'Learning through Play, Yoga, Swimming, Mindfulness, Music and learning instruments have been a great attempt in building a natural environment for children to connect ‘abstract concepts’ to experiences. In a culture of fast-paced education, these experiences are the ‘needs of the hour’. The   effort of the school and teachers, that go into inculcating these details in children are commendable!',
        'The programmes held by the school are testimonials to the idea of ‘schools can educate better by reaching out to parents’. These inclusions create a positive impact and children have a better chance of not only being successful in  school but in life too with qualities of respect, responsibility and relationships.',
        'The open-door policy of the school recognizes that parent perspective is valuable in providing insight and this climate welcomes parents to express views, to understand limits, and to share responsibility for the success of our children. The PAC has been effective and successful to create and maintain this access to support and resources.',
        'Coffee mornings, monthly newsletters, Three Way Conferences prove that the responsibility of the school is to stay connected and maintain meaningful communications about goals and scope of the child’s learning journey. This, we believe is the key to build relationships, to feel that we belong, trust and are valued. Relationships nurture this collaboration that is so necessary that in-turn helps in building relationships inside the classroom.',
        'We are very happy and content with the overall experience with the school as new parents and strongly believe that IELC will make a lasting difference in us.',
      ],
    },
    {
      id: 2,
      description: [
        'The personal attention, encouragement and additional help provided by all the teachers to my son helped him to express his thoughts and build his confidence and that has been heart-warming for me. The best thing that I like about their teaching method is that they allow the student to observe, come up with their questions, prepare, perform activities as per their understanding and finally present it in front of the whole class and parents.',
      ],
    },
    {
      id: 3,
      description: [
        'We are very happy that Mateo joined IELC Whitefield this year. The school’s friendly environment helped him to feel comfortable very quickly and now he is very happy to go to school. He has made great progress in English and is more confident talking in English to an audience. He has always been social and outgoing and the school has definitely helped him polish these skills in a positive way by involving him in school plays which he really enjoyed. The school also set a few goals for him for the year. Goal setting helped Mateo to overcome his fear of putting his head under the water in swimming and now he enjoys swimming.',
      ],
    },
    {
      id: 4,
      description: [
        'Wilhelm joined IELC in Pre-Nursery when he was 1 year and 5 months. The teachers and assistants were welcoming, and soon Wilhelm was the first one to run around in the morning at home shouting “shoes on, shoes on”, so we could go to school, even on the weekends.  It was quite apparent that IELC was the right place for our little gold nugget, even though we did have some concerns about sending him this young to school. English is not his first language, but it is truly amazing to see the development of his language skills. We are convinced that at this point he knows more English than his native tongue, a true testimony of the interaction between teachers and pupils at IELC. I could also support the Cottonlengo project by teaching children with disabilities to use a computer. I believe it is a great initiative from the school to help the community.',
      ],
    },
    {
      id: 5,
      description: [
        'It is our firm belief that the hallmarks of a truly exemplary school are professionally committed teachers, a cohesive staff, effective leadership, community involvement, a safe & caring environment, and a holistic curriculum. IELC Whitefield delivers and excels on all these fronts and as a parent, we are secure in the knowledge that our child(Viraat) is being tutored in the most conducive environment which fosters the development of his intellectual and emotional facets thereby enabling him to become a truly Global citizen of the future. Each day, Viraat is welcomed into an equally caring school family which encompasses the teachers and the supporting staff. The student’s progress, milestones and overall development is religiously updated and discussed with the parents in fine detail regularly through open communication channels. The fact that Viraat looks forward to attending school every day with boundless enthusiasm is a fitting testament to the fantastic Student-School relationship. We are thankful to  IELC Whitefield and indeed the wider Indus fraternity for providing ‘a home away from home’ for Viraat!',
      ],
    },
    {
      id: 6,
      description: [
        'Indus Early Learning has been a wonderful experience for our son and ourselves. The teachers are passionate and knowledgeable, always taking a deep personal interest in the unique personalities of the children in the class. I have appreciated how they have observed Neil and helped him grow, with very specific and sensitive feedback. The level of involvement for parents is unmatched. I always know what is going on in school, and it is inclusive without being overwhelming.',
        'Our testimonial would be incomplete without a shout out to Neil’s teachers on how they supported us enormously during a personally trying period.  While being posted abroad with Neil, they made sure he saw his friends every week through video calls. That helped him feel part of the group. Many thanks to the strong, amazing staff that make this school the best in Bangalore!',
      ],
    },
    {
      id: 7,
      description: [
        'What better way can I describe the feeling we have towards IELC. An apprehensive visit to the centre back in January 2017 turned out to be the most promising one for us, considering our move to Bangalore from a different geological location and for a little person who was distant from the culture she was born into.',

        'An ever-smiling head of centre to the most positive teachers, made this transition easy for our child, and we love to see her off every day, happy to school! Important aspects of a child’s development are conceptual and ‘Units of Inquiry’ is a wonderful and a holistic approach to building the foundation that develops early language, math and environmental skills.',
        'Learning through Play, Yoga, Swimming, Mindfulness, Music and learning instruments have been a great attempt in building a natural environment for children to connect ‘abstract concepts’ to experiences. In a culture of fast-paced education, these experiences are the ‘needs of the hour’. The   effort of the school and teachers, that go into inculcating these details in children are commendable!',
        'The programmes held by the school are testimonials to the idea of ‘schools can educate better by reaching out to parents’. These inclusions create a positive impact and children have a better chance of not only being successful in  school but in life too with qualities of respect, responsibility and relationships.',
        'The open-door policy of the school recognizes that parent perspective is valuable in providing insight and this climate welcomes parents to express views, to understand limits, and to share responsibility for the success of our children. The PAC has been effective and successful to create and maintain this access to support and resources.',
        'Coffee mornings, monthly newsletters, Three Way Conferences prove that the responsibility of the school is to stay connected and maintain meaningful communications about goals and scope of the child’s learning journey. This, we believe is the key to build relationships, to feel that we belong, trust and are valued. Relationships nurture this collaboration that is so necessary that in-turn helps in building relationships inside the classroom.',
        'We are very happy and content with the overall experience with the school as new parents and strongly believe that IELC will make a lasting difference in us.',
      ],
    },
    {
      id: 8,
      description: [
        'The first 10 years of your child’s life  decides his/ her future”…being a parent, I come from that school of thought. So, when it was time for my little one to step into the future, I had the heady task of choosing which school would help her nourish and  tap into my child’s potential. The next two months were spent visiting various schools. My search stopped, when I reached Indus Early Learning Centre-Whitefield, which was just what I was looking for. We decided IELC-Whitefield will be the school for Amaya - whether our decision was right or wrong, only time would tell.',
        'Two years down the line, I can confidently say that Indus has surpassed my expectation. I see Amaya has made progress by leaps and bounds both academically and socially. From being the demure kid joining Nursery to see her becoming the confident extrovert in Reception It makes my heart swell with pride. Amaya loves going to school each day and keeps gushing about her teachers, who she feels, are an extension of her family.',
        'They say “the best teacher is one who teaches from the heart and not from the book” --- A big Thank You to the teachers for making this come true.',
        ' I believe that Indus took Amaya under its wings , opened Amaya’s mind, and touched our heart – Thank you Ms Priyanka for leading from the front, being a role model to an amazing group of teachers and inspiring them to nurture every child’s potential & making IELC-Whitefield what it is today.',
      ],
    },
    {
      id: 9,
      description: [
        'Aisyah joined IELC in August 2019. Our family just relocated from Malaysia to India during that time. Being new to the environment, Aisyah took some time to settle to the new school, especially due to the communication barrier as her mother tongue is Malay and she was not able to communicate in English. After her second week at school, Aisyah showed more confidence at school and her English communication skills have significantly improved! This could not have been possible without the great support from all her teachers. IELC provides a lot of learning activities, not only for the kids but also for parents via various organized sessions. Besides that, the teachers always encourage the children to eat healthy and balanced food, resulting in Aisyah eating more variety of vegetables, and she also drinks more water. IELC is a very good school and we feel extremely blessed to have found such a wonderful group of teachers and staff.',
      ],
    },
    {
      id: 10,
      description: [
        'IELC Whitefield charmed us with the warm team they have. I love how they offer differentiated learning and not rote learning. Each day, Advika is challenged with a new activity. The school believes that every child is capable and they challenge children to the best of their limits. IELC groomed Advika to be a critical thinker and a good listener. She has taken up a liking towards many activities such as piano and swimming and the entire credit goes to the team.',
      ],
    },
    {
      id: 11,
      description: [
        'Testimony for IELC cannot be expressed in words. It gives us, as parents, immense satisfaction about the decision which we took in 2019. There is a perfect alignment between the values we as parents want to infuse in Amaira and what the “Gurus”(Teachers) of the school are focussing on. They are building not just “Leaders of Tomorrow” but also “Citizens of Today”.',
        'IELC always has great activities that continue to inspire children and their parents. Amaira loves her nurturing teachers, who encourage her to grow and also have fun with her. Their focus is on instilling positive values and compassion in the students.',
        'The atmosphere and learning environment are optimal for all young children. All of the students receive individual attention. The children’s and parents’ needs are addressed, and the staff takes a special interest in kids. We can be at ease when Amaira is at school knowing she is cared for, safe, and in a place that facilitates her future success.',
      ],
    },
  ];

  selectedData: any;
  constructor(
    public dialogRef: MatDialogRef<TestimonialsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    let index = this.testimonialsList.findIndex((x) => x.id === this.data);
    this.selectedData = this.testimonialsList[index];
    console.log(this.selectedData);
  }
}
