import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurriculumComponent } from './curriculum.component';
import { RouterModule } from '@angular/router';
import { AppThemeModule } from 'src/app/app-theme.module';



@NgModule({
  declarations: [CurriculumComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: CurriculumComponent,
      data: {
        title: 'Preschool Learning Center | Day Care In Jubilee Hills-Hyderabad',
        description: 'Curriculum of Indus International School Jublihills is designed to provide education and academic excellence.'
      }
    }]),
    AppThemeModule,
  ]
})
export class CurriculumModule { }
