import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { AppThemeModule } from 'src/app/app-theme.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: HomeComponent,
      data: {
        title: 'IELC Koramanagala | Best Preschool & Nursery School in Bangalore ',
        description: 'Indus Early Learning Center Koramangala-Indus appreciates & encourages a childhood that’s driven by curiosity and creativity. Enquire now!'
      }
    }]),
    AppThemeModule,
  ]
})
export class HomeModule { }
