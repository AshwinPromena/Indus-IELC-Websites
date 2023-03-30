import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { FooterComponent } from './footer/footer.component';
import { AppThemeModule } from 'src/app/app-theme.module';



@NgModule({
  declarations: [HeaderComponent, SideNavigationComponent, FooterComponent],
  imports: [
    CommonModule,
    AppThemeModule
  ],
  exports: [HeaderComponent, SideNavigationComponent, FooterComponent]
})
export class MainModule { }
