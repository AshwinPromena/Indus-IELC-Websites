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
        title: 'Best International School & Playschool in Aundh | IELC',
        description: 'Best International School in Aundh gives future leaders an environment where, they not only learn, but also prepare for greatness which they await for.'
      }
    }]),
    AppThemeModule,
  ]
})
export class AdmissionsModule { }
