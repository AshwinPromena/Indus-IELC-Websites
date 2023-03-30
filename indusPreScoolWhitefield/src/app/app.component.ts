import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { ChatBotPanelComponent } from './_modules/shared/chat-bot-panel/chat-bot-panel.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'IndusPreSchoolWhitefield ';
  isVisibleChatIcon: boolean;
  isVisibleMessageBox: boolean;
  @ViewChild('drawer', { static: false }) drawer: MatDrawer;
  constructor( private router: Router, private dialog: MatDialog) {
    setTimeout(() => {
      this.isVisibleChatIcon = true;
    }, 1000)
    setTimeout(() => {
      this.isVisibleMessageBox = true;
    }, 2000)
  }
  ngOnInit() {
    AOS.init();
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
  viewChat() {
    const dialogRef = this.dialog.open(ChatBotPanelComponent, {
      maxWidth: '400px',
      position: { bottom: '20px', right: '20px' },
      panelClass: 'chat-bot-UI',
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  close() {
    this.isVisibleMessageBox = false;
  }
}
