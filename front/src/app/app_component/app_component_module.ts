import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app_component';
import { AppRoutingModule } from '../../app/features/routing/app-routing.module';
import { HeaderModule } from '../../app/features/components/header/header_module';
import { HomePageModule } from '../features/pages/home_page/home_page_module';
import { LoginPageModule } from '../features/pages/login_page/login_page_module';
import { RegistrationPageModule } from '../features/pages/registration_page/registration_page_module';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PublicServantPageModule } from '../features/pages/pb_page/pb_page_module';
import { ProfilePageModule } from '../features/pages/profile_page/profile_page_module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HomePageModule,
    LoginPageModule,
    PublicServantPageModule,
    RegistrationPageModule,
    ProfilePageModule,
    BrowserModule,
    HeaderModule,
    MatInputModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppComponentModule { }