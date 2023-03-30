import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadershipFullDetailsComponent } from './leadership-full-details/leadership-full-details.component';
import { AppThemeModule } from 'src/app/app-theme.module';
import { AdmissionTestimonialsComponent } from './admission-testimonials/admission-testimonials.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';
import { ChatBotPanelComponent } from './chat-bot-panel/chat-bot-panel.component';
import { EnquireFormComponent } from './enquire-form/enquire-form.component';
import { SpotlightDetailsComponent } from './spotlight-details/spotlight-details.component';



@NgModule({
  declarations: [LeadershipFullDetailsComponent, AdmissionTestimonialsComponent, ThankYouPageComponent, ChatBotPanelComponent, EnquireFormComponent, SpotlightDetailsComponent],
  imports: [
    CommonModule,
    AppThemeModule
  ]
})
export class SharedModule { }
