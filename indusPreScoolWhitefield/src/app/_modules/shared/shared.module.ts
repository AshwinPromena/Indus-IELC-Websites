import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadershipFullDetailsComponent } from './leadership-full-details/leadership-full-details.component';
import { AppThemeModule } from 'src/app/app-theme.module';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ChatBotPanelComponent } from './chat-bot-panel/chat-bot-panel.component';
import { EnquireFormComponent } from './enquire-form/enquire-form.component';



@NgModule({
  declarations: [LeadershipFullDetailsComponent, ThankYouPageComponent, TestimonialsComponent, ChatBotPanelComponent, EnquireFormComponent],
  imports: [
    CommonModule,
    AppThemeModule
  ]
})
export class SharedModule { }
