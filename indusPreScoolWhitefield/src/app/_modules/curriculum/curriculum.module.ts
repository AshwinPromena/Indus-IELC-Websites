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
        title: 'Preschool Learning Center | Day Care In Whitefield -Bangalore',
        description: 'Curriculum of Indus International School Whitefield  is designed to provide education and academic excellence.'
      }
    }]),
    AppThemeModule,
  ]
})
export class CurriculumModule { }
