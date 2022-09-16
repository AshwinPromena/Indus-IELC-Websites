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
      id: 1,
      description: [
        "I joined Indus International School Pune in MYP 4(Grade 9) and one of the first things I was taught is that no question is silly or irrelevant.We should never be conscious or afraid of asking questions.The teachers here are extremely polite and patient.They are always there for you.You must reach out to them if you have any doubts and they will do their best to help you.",
        "At IISP, I learnt that there is no substitute for hard work.You have to make sure that your submissions are on time and you stay positive throughout your IB journey.More than anything, you need to enjoy your IB experience and make the most of it.",
        "The College Counselling team here is very supportive and will handhold you through the entire college application process.It is important that you reach out to them from the very start so they get to know you well enough and can help you apply to Universities that are a perfect fit for you.",
        "IISP has always been my safe and happy place.It is the perfect nurturing ground for every student who aspires to reach their potential and realize their dreams.I thank everyone here who has encouraged me to spread my wings and soar higher than I could have ever imagined.",
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







