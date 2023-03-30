import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { AppThemeModule } from 'src/app/app-theme.module';
import { RatingModule } from 'ng-starrating';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: HomeComponent,
      data: {
        title: 'Best Preschool & Nursery School in Bangalore | IELC Koramanagala',
        description: 'Indus Early Learning Center Whitefield -Indus appreciates & encourages a childhood that’s driven by curiosity and creativity. Enquire now!'
      }
    }]),
    AppThemeModule,
    RatingModule
  ]
})
export class HomeModule { }
