import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-admission-testimonials',
  templateUrl: './admission-testimonials.component.html',
  styleUrls: ['./admission-testimonials.component.scss']
})
export class AdmissionTestimonialsComponent implements OnInit {
  selectedData: any;
testimonialsList=[
  {
    id:'1',
    description:[ 'I couldn`t have chosen a better school for my son during this time. Indus exceeded my expectations by organising the online classes from May,2020 when no other school was even ready for pandemic. They designed the worksheets and activities in such a way that my 2year old was never bored of online classes and in-fact he always looks forward for the class. They are always open for suggestions and considers parents feedback to provide better online teaching experience for kids.'],
  },
  {
    id:'2',
    description:['I have many reasons to thank Indus International Primary School and Miss Mona for. Initially, I was not so keen on the whole online schooling concept and thought it was not needed for my kid at this age. But now, I can surely say that it has been a wonderful learning experience so far. Miss Mona is so loving and caring towards the kids while providing the structure and guidance they need. She is very supportive and has always been accessible. Kudos to the strong dedication and commitment the teachers have at Indus. Online learning experience has been very satisfactory.']
  },
  {
    id:'3',
    description:['With the pandemic, many of our routines went haywire. We were confused initially about how this year would unfold, especially for the kids. As parents, we always want the best for our children. We are so happy that we have chosen Indus International Junior School for our son. The best thing about Indus has always been the teachers for us. We are so thankful to teachers like Ms.Vandana and Ms.Ruby, who have happily taken upon the task of teaching every child so patiently. No matter how many times, they always ensure the kids have understood the concepts well and encourage kids to ask them anything even after the school hours. We are so proud of our teachers who put in their best efforts to teach the kids in a fun-filled and connected way. The dance and music classes are the fun elements in the online classes. An added bonus was to have our kids learn spanish, the online way. Ensuring the kids maintain an active life, we love the P.E classes. Thank you Indus for giving us teachers like Ms.Vandana, Ms.Ruby, Ms.Harini. We have a complete education package delivered to us online every day!'],

  },
  {
    id:'4',
    description:['I am thankful and glad the way Indus international primary school has promptly organised online education during this pandemic. There might be a better way to say thanks, but right now I’m out of words. Just want to say my heartiest thank you to all the teachers who are taking so much effort and help our kids to grow in a better way. They empathize with kids, respect them, and believe that each one has something special that can be built upon. Summer vacation is the time when parents realize that teachers need to be rewarded. But due to this pandemic we realise it every day. A good teacher is everything a parent can never be. Thanks a lot to Miss Ruby and Miss Vandana for giving our little ones big dreams. It is impossible to thank a teacher. There are no words, to appreciate someone whose words empower children to chase their dreams. Parents have got the easy job of raising our own kids. They are rewarded for all their sacrifices with the joy of watching their own blood grow up into fine young men and women. Teachers have got the tough jobs. Their rewards are limited to the hope that their wisdom will make a tiny difference into the lives of children, helping them to be better human beings. Thank you for all your selfless sacrifices'],

  },
  {
    id:'5',
    description:['I would like to take this opportunity to thank the team of Indus International Primary School, Jubilee Hills for nurturing my child. I really appreciate your efforts for providing quality online education during these testing times. The academics were exceptional and the character development was incredible. The well-planned curriculum, keeping in mind timely submissions and interactive sessions have been very positive. I can’t thank Ms.Vandana and Ms.Ruby enough for their love, discipline, commitment, support and enthusiasm to our class every single day.'],
  },
  {
    id:'6',
    description:['Indus International School has now become a school that I root for in their commendable job of transforming a child not just academically but also personally. I have nothing but amazing things to say about this nurturing, loving and progressive environment the school has always created. Lockdown/online school the transition was just a cake walk. Both Ms.Vandana and Ms.Ruby work beautifully with each student especially mine who always looks up to her teachers and their timely feedbacks. Your expertise in teaching has put our minds at ease. Your strength lies in making them feel safe and that all the kids are equals. The vibe that Ms.Ruby generates and the patience that Ms.Vandana shows has always made my daughter comfortable beyond expectations.'],
  },
  {
    id:'7',
    description:['I would first like to thank both Ms Vandana and Ms Ruby for the stupendous energy they put in their online classes. I am grateful to have both as my child`s teachers. We as parents are very well aware of the efforts they put in for each child during classes. Thank you for going above and beyond, and caring so much for the kids. Lastly I would like to end by saying, Vandana and Ruby, are a perfect combination with their guidance and teaching skills for the kids in showing them the path of learning as they grow!!!!! Thanks a lot!'],
  },
  {
    id:'8',
    description:['I would just like to say that Indus is an amazing school and the teachers make it even better. Both my kids Araina and Aryaveer have adjusted to online schooling just because of the teachers. Their warmth and understanding nature and level of patience is commendable!! Kudos to the entire team!'],
  },
  {
    id:'9',
    description:['We are so happy that we chose Indus school for Manasvi. All thanks to her wonderful and experienced teachers Ms Vandana and Ms Ruby; she has improved tremendously. The dedication of the teachers is highly commendable. Ms Vandana and Ms Ruby are always very understanding of Manasvi’s abilities and go out of their way to help her. Indus’s curriculum; especially the teaching material for online is very well designed. Extra-curricular activities at Indus have helped Manasvi’s overall development. She has picked up photography and a keen interest in music. She has also gained a great love for books all thanks to the teachers’ help'],
  },
  {
    id:'10',
    description:['When the pandemic broke out I was very apprehensive about classes going online for a 5 year old. To my surprise and joy, Vihaan has had one of the best years of learning sitting at home thanks to his teachers, Miss Radhika and Miss Neha. They have dealt with the new platform with such ease from the very start and have always found ways to capture the child`s attention with the many fun activities they come up with so spontaneously. Vihaan has become so much more enthusiastic about school now. This to me is a very important aspect of education where the child learns not out of force but with much interest. I just can’t thank Indus and its teachers enough for this.'],
  },
  {
    id:'11',
    description:['We have been with Indus since the past 4 years now and it has been nothing but a second home to my son. Seeing his progress since nursery to PP1 has made me be a very proud mother. Despite this pandemic, the efforts the teachers have made to make it a fun and memorable experience is extraordinary. I thank both his teachers Miss Neha and Miss Radhika, for always hearing my child out and keeping in mind the mood of every kid which is not an easy task especially with online classes. Way to go Indus!'],
  },
  {
    id:'12',
    description:['The most remarkable thing about Indus is its innovative and caring teachers, apart from high academic standards they maintain. I really appreciate the way the teachers are always willing to take suggestions and continuously work along with the parents to make the learning experience seamless for kids. The way the school has transitioned to the online platform almost immediately, is commendable. I am happy I chose my kid to be a part of Indus'],
  },
  {
    id:'13',
    description:['My experience with the online classes were so much better than what i had comprehended. Initially hassaan and i did have issues to adjust to the system but looking at how the teachers put together so many efforts to teach our little ones is commendable. I have no issues with the teaching pattern or with teachers as they`ve been of best help even during such challenging times. One thing I`d like to bring to your notice is that during ORT or any such oral activity teachers are doing a great job in handling the children with so many disturbances from the background and still there are make it happen. All in all, it has been a great experience and I`m so grateful to have teachers like Miss Neha & Miss Radhika for hassaan, couldn`t have had asked for any better. Thank you for being there for our kids just as much as they`re yours.'],
  },
  {
    id:'14',
    description:['I want to express my sincere gratitude for all the efforts the faculty has taken to make online classes a Positive experience for Ransh. I appreciate the creativity, innovative ideas and patience with which kids are being handled. Each and every child is being given attention. Ransh has started to show so much improvement in ORT and other subjects with help of such amazing teachers. It was the best decision to send Ransh to Indus. In such testing times these classes have been a blessing for them. Thanking the entire faculty for taking feedbacks from parents and putting what is best for children in their curriculum. Special thanks to Ms Neha and Ms Radhika for helping Ransh in being patient with him and suggesting ways to helping him to improve'],
  },
  {
    id:'15',
    description:['The online class is really a great initiative during this phase of lock down to bridge the education gap. Moreover it is very interactive, innovative and engaging. They ensure that children don’t miss class and portions are covered and don’t get burdened when school reopens. Children get to meet teachers and peers. Just a suggestion, once in a week there should be a quiz or question-answer session to find out how much the children have understood and retained.   Really a big thank to you all teachers for giving time to children in this tough time. I also appreciate the effort you show in online class to clear every concept to children and parents too. A big vote of thanks to all teachers.'],
  },
  {
    id:'16',
    description:['I am Aveer’s mother. My son is in PP2 B and I am quite satisfied with the way the school has gained momentum over the past few months . They have adapted to the covid times and online teaching really well. It’s commendable the way the teachers-Miss Radhika and Miss Neha have worked with kids. They have been very patient. The efforts they have been putting on each child is encouraging and the kids put in their best!!! Keep up the good work rolling, Team Indus International'],
  },
  {
    id:'17',
    description:['3 years back, during the same time, I decided to join Khush in Indus and that is the best decision I’ve made so far!!! The TEACHERS are FABULOUS!! They know each and every kid very well. From the time of online classes, I was worried about how my son would cope with all of this. But the teachers and their techniques to keep the children motivated towards learning has been a wonderful journey!! The TEACHERS are there every minute of the day to answer our queries. Khush is lucky to get such teachers!! A big Hug and Thank you to Ms. Husna & Ms. Tazeen!!! You teachers are just AMAZING!!!'],
  },
  {
    id:'18',
    description:['This is Nikhila reddy. My daughter’s name is Aihika and she is studying in grade 1 Indus jubilee hills. We have been with Indus for 6 years now. We started the mother toddler class when Aihika was 1 year old. I consider myself lucky for finding the perfect school for Aihika. The education, the faculty, the cleanliness and most importantly the hospitality that Indus school has is top notch. In these difficult times where a pandemic is changing the way the world works, Indus school has very smoothly transitioned to online school with such ease. I know that it would have been a lot of hard work for the teachers and the institution but they make it look so easy, it’s amazing. They are so good, so patient and so well informed about everything. They are doing such a fabulous job with the children in class. Thank you Indus for making us feel so comfortable and so loved. Looking forward for another 10 years with you.'],
  },


]
  constructor( public dialogRef: MatDialogRef<AdmissionTestimonialsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    let index = this.testimonialsList.findIndex((x) => x.id === this.data);
    this.selectedData = this.testimonialsList[index];
    console.log(this.selectedData);
  }

}
