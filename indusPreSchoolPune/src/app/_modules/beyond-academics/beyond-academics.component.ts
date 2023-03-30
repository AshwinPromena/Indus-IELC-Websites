import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Data } from '@angular/router';
import * as AOS from 'aos';
import { EnquireFormComponent } from '../shared/enquire-form/enquire-form.component';

@Component({
  selector: 'app-beyond-academics',
  templateUrl: './beyond-academics.component.html',
  styleUrls: ['./beyond-academics.component.scss']
})
export class BeyondAcademicsComponent implements OnInit {
  contentView: string;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title ,
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
        this.onscroll()
      }, 1000);
    }
  }
  onscroll() {
    document.getElementById(this.contentView).scrollIntoView({ behavior: 'smooth' });
  }


  enquireForm() {
    this.dialog.open(EnquireFormComponent, {
      width: '900px'
    })
  }
}
