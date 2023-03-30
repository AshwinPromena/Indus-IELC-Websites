import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Data } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-beyond-academics',
  templateUrl: './beyond-academics.component.html',
  styleUrls: ['./beyond-academics.component.scss'],
})
export class BeyondAcademicsComponent implements OnInit {
  contentView: string;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private meta: Meta
  ) {
    this.contentView = this.route.snapshot.queryParamMap.get('contentView');
    this.route.queryParamMap.subscribe((queryParamMap) => {
      this.contentView = queryParamMap.get('contentView');
      console.log(this.contentView);

      if (this.contentView) {
        setTimeout(() => {
          this.onscroll();
        }, 1000);
      }
    });
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.titleService.setTitle(data.title);
      this.meta.updateTag({ name: 'description', content: data.description });
    });
    AOS.init();
    if (this.contentView) {
      setTimeout(() => {
        this.onscroll();
      }, 1000);
    }
  }

  onscroll() {
    this.contentView = this.contentView;
    document
      .getElementById(this.contentView)
      .scrollIntoView({ behavior: 'smooth' });
  }
}
