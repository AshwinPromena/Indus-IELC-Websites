import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Data } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss'],
})
export class CurriculumComponent implements OnInit {
  contentView: string;

  constructor(private route: ActivatedRoute, private titleService: Title,
    private meta : Meta) {
    this.contentView = this.route.snapshot.queryParamMap.get('contentView');
  }

  ngOnInit(): void {
    AOS.init();
    this.route.data.subscribe((data: Data) => {
      this.titleService.setTitle(data.title);
      this.meta.updateTag({ name: 'description', content: data.description });
    });
    if (this.contentView) {
      setTimeout(() => {
        this.onscroll();
      }, 1000);
    }
  }
  onscroll() {
    document
      .getElementById(this.contentView)
      .scrollIntoView({ behavior: 'smooth' });
  }
}
