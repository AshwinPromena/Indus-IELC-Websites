import { ThankYouPageComponent } from './_modules/shared/thank-you-page/thank-you-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('src/app/_modules/home/home.module').then(m => m.HomeModule) },
  { path: 'about-us', loadChildren: () => import('src/app/_modules/about-us/about-us.module').then(m => m.AboutUsModule) },
  { path: 'admissions', loadChildren: () => import('src/app/_modules/admissions/admissions.module').then(m => m.AdmissionsModule) },
  { path: 'beyond-academics', loadChildren: () => import('src/app/_modules/beyond-academics/beyond-academics.module').then(m => m.BeyondAcademicsModule) },
  { path: 'curriculum', loadChildren: () => import('src/app/_modules/curriculum/curriculum.module').then(m => m.CurriculumModule) },
  { path: 'contact-us', loadChildren: () => import('src/app/_modules/contact-us/contact-us.module').then(m => m.ContactUsModule) },
  { path: 'thank-you', component: ThankYouPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
