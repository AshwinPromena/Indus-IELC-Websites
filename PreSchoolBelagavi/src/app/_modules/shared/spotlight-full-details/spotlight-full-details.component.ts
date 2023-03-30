import { createInjectionToken, InjectFlags } from '@angular/compiler/src/core';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-spotlight-full-details',
  templateUrl: './spotlight-full-details.component.html',
  styleUrls: ['./spotlight-full-details.component.scss']
})
export class SpotlightFullDetailsComponent implements OnInit {
  spotlights = [
    {
      id:1,
      title: 'DESIGN THINKING PROCESS',
      description:
        'The campus resonates with cheerful laughter, enthusiasm and vigour',
      img: '../../../assets/images/about-us/spotlight/spot-light1.png',
      alt: 'Spotlight image',
    },
    {
      id:2,
      title: 'CHEERS TO NEW BEGINNINGS',
      description:
        'The campus resonates with cheerful laughter, enthusiasm and vigour',
      img: '../../../assets/images/about-us/spotlight/spot-light2.png',
      alt: 'Spotlight image',
    },
    {
      id:3,
      title: 'ART EXHIBIT',
      description:
        'The campus resonates with cheerful laughter, enthusiasm and vigour',
      img: '../../../assets/images/about-us/spotlight/spot-light3.png',
      alt: 'Spotlight image',
    },
    {
      id:4,
      title: 'DESIGN THINKING PROCESS',
      description:
        'The campus resonates with cheerful laughter, enthusiasm and vigour',
      img: '../../../assets/images/about-us/spotlight/spot-light1.png',
      alt: 'Spotlight image',
    },
    {
      id:5,
      title: 'CHEERS TO NEW BEGINNINGS',
      description:
        'The campus resonates with cheerful laughter, enthusiasm and vigour',
      img: '../../../assets/images/about-us/spotlight/spot-light2.png',
      alt: 'Spotlight image',
    },
    {
      id:6,
      title: 'ART EXHIBIT',
      description:
        'The campus resonates with cheerful laughter, enthusiasm and vigour',
      img: '../../../assets/images/about-us/spotlight/spot-light3.png',
      alt: 'Spotlight image',
    },
  ];


  selectedData: any;
  constructor(public dialogRef: MatDialogRef<SpotlightFullDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    let index = this.spotlights.findIndex(x => x.id === this.data);
    this.selectedData = this.spotlights[index];
    console.log(this.selectedData)
  }

}
