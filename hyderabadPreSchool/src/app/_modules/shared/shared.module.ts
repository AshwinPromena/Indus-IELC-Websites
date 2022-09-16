import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadershipFullDetailsComponent } from './leadership-full-details/leadership-full-details.component';
import { AppThemeModule } from 'src/app/app-theme.module';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';



@NgModule({
  declarations: [LeadershipFullDetailsComponent, ThankYouPageComponent],
  imports: [
    CommonModule,
    AppThemeModule
  ]
})
export class SharedModule { }
