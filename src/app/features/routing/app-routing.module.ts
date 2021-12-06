import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from '../pages/home_page/home_page';
import { DiseasePage } from '../pages/disease_page/disease_page';
import { LoginPage } from '../pages/login_page/login_page';
import { ProfilePage } from '../pages/profile_page/profile_page';
import { RegistrationPage } from '../pages/registration_page/registration_page';
import { PublicServantPage } from '../pages/pb_page/pb_page';

const routes: Routes = [
    {path: '', component: HomePage},
    //{path: 'login', component: LoginPage},
    {path: 'register', component: RegistrationPage},
    {path: 'user', component: ProfilePage},
    //{path: 'hotel', component: DiseasePage},
    {path: 'publicServant', component: PublicServantPage},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }