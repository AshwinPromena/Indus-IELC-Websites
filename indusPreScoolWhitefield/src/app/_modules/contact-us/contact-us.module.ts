import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { RouterModule } from '@angular/router';
import { AppThemeModule } from 'src/app/app-theme.module';



@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: ContactUsComponent,
      data: {
        title: 'Make an Enquiry | IELC Whitefield  - Bangalore',
        description: 'You can contact the Indus School through email and telephone for all admissions-related inquiries and to register your son. Get in touch today!'
      }
    }]),
    AppThemeModule,
  ]
})
export class ContactUsModule { }
