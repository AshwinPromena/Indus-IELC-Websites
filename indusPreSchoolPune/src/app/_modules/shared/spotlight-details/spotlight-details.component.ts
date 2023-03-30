import { Component, Inject,OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-spotlight-details',
  templateUrl: './spotlight-details.component.html',
  styleUrls: ['./spotlight-details.component.scss']
})
export class SpotlightDetailsComponent implements OnInit {
  spotlights: any;
  
  spotlight= [
    {
      id: 1,
      title: 'DESIGN THINKING PROCESS',
      description:
      'The campus resonates with cheerful laughter, enthusiasm and vigour',
     
    },

    {
      id:2,
      title: 'CHEERS TO NEW BEGINNINGS',
      description:
        'The campus resonates with cheerful laughter, enthusiasm and vigour',
      
    },
    {
      id: 3,
      title: 'DESIGN THINKING PROCESS',
      description:
      'The campus resonates with cheerful laughter, enthusiasm and vigour',
     
    },
    {
      id:4,
      title: 'ART EXHIBIT',
      description:
        'The campus resonates with cheerful laughter, enthusiasm and vigour',
      
    },
    
    {
      id:5,
      title: 'IELC CARNIVAL',
      description:
        'IELC Pune celebrated the season of giving- Christmas by organising a fantastic Christmas carnival on the sprawling lawns in Aundh which was much enjoyed by our students and their family and friends. The carnival hosted a lot of exciting rides, games and food. Our enthusiastic parent community also put up very interesting and innovative games at the carnival. The whole ambience brought about the feel of Xmas while everyone enjoyed spending a beautiful evening.',
      
    },
    {
      id:6,
      title: 'IELC Sports day',
      description:
        'IELC Pune hosted their Sports Fiesta with a lot of excitement and vigour while focusing on the sustainable planet theme. The students were dressed in the Indus Tshirts while demonstrating the true sports men spirit participating enthusiastically in all the races. Under the guidance of the PE team, students demonstrated the various yoga postures efficiently and several gymnastic movements too. Each class race showcased a way of being sustainable while encouraging students as well parents to be mindful of how to lessen the damage to the planet. The parents tug of war game was the highlight of the day where parents enthusiastically fought to win.',
     
    },
  ]
  selectedData: any;
  constructor(public dialogRef: MatDialogRef<SpotlightDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    let index = this.spotlight.findIndex((x: { id: any; }) => x.id === this.data);
    this.selectedData = this.spotlight[index];
    console.log(this.selectedData);
  }

}
