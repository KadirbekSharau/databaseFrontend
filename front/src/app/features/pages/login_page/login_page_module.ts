import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginPage } from './login_page';
import { AuthorizationBoxModule } from '../../components/authorization_box/authorization_box_module';
import { HeaderModule } from '../../../../app/features/components/header/header_module';


@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    AuthorizationBoxModule,
  ],
  exports: [LoginPage],
  providers: [],
  bootstrap: [LoginPage],
})
export class LoginPageModule { }