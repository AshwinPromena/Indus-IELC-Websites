import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionsComponent } from './admissions.component';
import { RouterModule } from '@angular/router';
import { AppThemeModule } from 'src/app/app-theme.module';



@NgModule({
  declarations: [AdmissionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: AdmissionsComponent,
      data: {
        title: 'Best International School & Playschool in Rani Chennamma Nagar | IELC',
        description: 'Best International School in Rani Chennamma Nagar gives future leaders an environment where, they not only learn, but also prepare for greatness which they await for.'
      }
    }]),
    AppThemeModule,
  ]
})
export class AdmissionsModule { }
