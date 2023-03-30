import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from './_modules/main/main.module';
import { AppThemeModule } from './app-theme.module';
import { SharedModule } from './_modules/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule, Configuration, ConfigurationParameters } from 'build/openapi';
import { environment } from 'src/environments/environment';
import { MatDatepickerModule } from '@angular/material/datepicker';

export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    basePath: environment.basePath,
    apiKeys: { Bearer: '' }
  };
  return new Configuration(params);
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainModule,
    AppThemeModule,
    HttpClientModule,
    SharedModule,
    ApiModule.forRoot(apiConfigFactory)
  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
