import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter();

  trigger = 0;
  constructor() {}

  ngOnInit(): void {}
  mouseEnter(trigger: MatMenuTrigger) {
    setTimeout(() => {
      if (!trigger.menuOpen) {
        trigger.openMenu();
      }
      this.trigger = 0;
    }, 1);
  }

  mouseLeave(trigger: MatMenuTrigger) {
    setTimeout(() => {
      if (trigger.menuOpen && this.trigger === 0) {
        trigger.closeMenu();
      }
    }, 200);
  }
  menuMouseLeave(trigger: MatMenuTrigger) {
    setTimeout(() => {
      if (trigger.menuOpen) {
        trigger.closeMenu();
      }
      this.trigger = 0;
    }, 1);
  }
}
