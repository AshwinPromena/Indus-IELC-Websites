import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { RouterModule } from '@angular/router';
import { AppThemeModule } from 'src/app/app-theme.module';
import { LeadershipFullDetailsComponent } from '../shared/leadership-full-details/leadership-full-details.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: AboutUsComponent,
      data: {
        title: 'Child Learning Schools in Pune | Kids School In Pune',
        description: 'Indus Early Learning Center Pune established in 2015, largest & most diverse schools in Pune which offers complete programme structured.'
      }
    }]),
    AppThemeModule,
    SharedModule
  ],
  entryComponents:[LeadershipFullDetailsComponent]
})
export class AboutUsModule { }
