import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admission-testimonials',
  templateUrl: './admission-testimonials.component.html',
  styleUrls: ['./admission-testimonials.component.scss']
})
export class AdmissionTestimonialsComponent implements OnInit {
  selectedData: any;
  testimonialsList = [
    {
      id:'1',
      description:[
        "Our elder daughter is studying at the main school hence IELC was our obvious choice for our younger one. Due to covid and change of location we thought Ditya would lose a lot in due course. But the school made sure children adjusted well to the changing environment.",
        " The school regularly keeps the parents in loop, suggestions are not taken for granted and improvising is always an on-going process. This inclusiveness has made the school very comfortable for the kids.",
         "Recently a football match was arranged for the parents at a club as a part of the `Unit of Inquiry` which was witnessed by children and field trip to Balewadi stadium for an over all sports exposure. All parents highly appreciated the initiative taken. we`re sure that it will contribute immensely to the over-all development of the children.",
         " Ditya enjoyed the grand-parents day with her nani & dadi which she celebrated for the very first time in 2 years of IELC. The school made sure the grand-parents felt comfortable and the event was planned in a way that everybody had a gala time. Despite all the pampering teacher`s make sure that children finish their food and eat heathier options from the food menu.Ditya has been bringing home some good habits form her teacher Ms.Komal.",
         " We can make-out from,Ditya being excited to go school every morning that the school has been doing a good job. Her energy levels are equally high while on her way back form school. We wish the school keep`s innovating and evolving to provide high quality education to our kids. The investment has been worth it!",
         "Thank You!",
         "Priya  Yadav",
         "(Parent Of Ditya Yadav)",
        
      ],
    },
    {
      id: '2',
      description: [
        "I joined Indus International School Pune in MYP 4(Grade 9) and one of the first things I was taught is that no question is silly or irrelevant.We should never be conscious or afraid of asking questions.The teachers here are extremely polite and patient.They are always there for you.You must reach out to them if you have any doubts and they will do their best to help you.",
        "At IISP, I learnt that there is no substitute for hard work.You have to make sure that your submissions are on time and you stay positive throughout your IB journey.More than anything, you need to enjoy your IB experience and make the most of it.",
        "The College Counselling team here is very supportive and will handhold you through the entire college application process.It is important that you reach out to them from the very start so they get to know you well enough and can help you apply to Universities that are a perfect fit for you.",
        "IISP has always been my safe and happy place.It is the perfect nurturing ground for every student who aspires to reach their potential and realize their dreams.I thank everyone here who has encouraged me to spread my wings and soar higher than I could have ever imagined.",
      ],
    },
    {
      id: '3',
      description: [
       "We as a parent are really happy that  Dhruv is doing really well with his activities and trying to learn all new skills in his way and becoming a self independent boy and I'm sure these all skills will definitely help him in future. ",
        "Not only his activities but also his communication skills are getting better day by day. ",
        "We are really thankful to  Ielc faculty . May he gets the best guidance throughout his life."
      ],
    },
    {
      id: '4',
      description: [
        "We are the part of Indus school from last 7 years",
        " Its one of the best preschool of pune.",
        "Very happy to be part of it."
      
        
      ],
    }
  ]
  constructor(
    public dialogRef: MatDialogRef<AdmissionTestimonialsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    let index = this.testimonialsList.findIndex((x) => x.id === this.data);
    this.selectedData = this.testimonialsList[index];
    console.log(this.selectedData);
  }

}







