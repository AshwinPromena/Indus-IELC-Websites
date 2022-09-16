import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterComponent } from './newsletter.component';
import { AppThemeModule } from 'src/app/app-theme.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NewsletterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: NewsletterComponent,
      data: {
        title: 'Preschool  Rani Chennamma Nagar-Belagavi Newsletter | Newsletter Rani Chennamma Nagar-Belagavi',
        description: 'Newsletter of Indus International School Rani Chennamma Nagar is designed to provide education and academic excellence.'
      }
    }]),
    AppThemeModule,
  ]
})
export class NewsletterModule { }
