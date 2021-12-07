import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegistrationPage } from './registration_page';
import { AuthorizationBoxModule } from '../../components/authorization_box/authorization_box_module';


@NgModule({
  declarations: [
      RegistrationPage,
  ],
  imports: [
    BrowserModule,
    AuthorizationBoxModule,
  ],
  exports: [RegistrationPage],
  providers: [],
  bootstrap: [RegistrationPage],
})
export class RegistrationPageModule { }