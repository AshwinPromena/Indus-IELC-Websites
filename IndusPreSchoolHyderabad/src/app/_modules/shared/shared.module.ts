import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadershipFullDetailsComponent } from './leadership-full-details/leadership-full-details.component';
import { AppThemeModule } from 'src/app/app-theme.module';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';
import { ChatBotPanelComponent } from './chat-bot-panel/chat-bot-panel.component';
import { EnquireFormComponent } from './enquire-form/enquire-form.component';
import { PopUpBannerComponent } from './pop-up-banner/pop-up-banner.component';
import { AdmissionTestimonialsComponent } from './admission-testimonials/admission-testimonials.component';



@NgModule({
  declarations: [LeadershipFullDetailsComponent, ThankYouPageComponent, ChatBotPanelComponent, EnquireFormComponent, PopUpBannerComponent, AdmissionTestimonialsComponent],
  imports: [
    CommonModule,
    AppThemeModule
  ]
})
export class SharedModule { }
