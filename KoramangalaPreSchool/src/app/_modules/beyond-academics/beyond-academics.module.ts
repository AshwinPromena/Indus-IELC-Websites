import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeyondAcademicsComponent } from './beyond-academics.component';
import { RouterModule } from '@angular/router';
import { AppThemeModule } from 'src/app/app-theme.module';



@NgModule({
  declarations: [BeyondAcademicsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: BeyondAcademicsComponent,
      data: {
        title: 'Beyond Academics | Day Care | Schools In Koramangala ',
        description: 'We are one of few school which provide academic programme in Koramangala as well as extra curriculum activities like arts, music, dance, drama & sports.'
      }
    }]),
    AppThemeModule,
  ]
})
export class BeyondAcademicsModule { }
