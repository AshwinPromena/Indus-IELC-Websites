import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Data } from '@angular/router';
import * as AOS from 'aos';
import { EnquireFormComponent } from '../shared/enquire-form/enquire-form.component';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {
  contentView: string;

  constructor(
    private route: ActivatedRoute,
    private titleService : Title,
    private meta : Meta,
    private dialog: MatDialog
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
