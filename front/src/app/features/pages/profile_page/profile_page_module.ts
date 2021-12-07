import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProfilePage } from './profile_page';
import { AppRoutingModule } from '../../routing/app-routing.module';
import { HeaderModule } from '../../components/header/header_module';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatDialogDoctorModule } from '../../components/mat_dialog_doctor/mat_dialog_doctor_module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    AppRoutingModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatDialogDoctorModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  exports: [ProfilePage],
  providers: [],
  bootstrap: [ProfilePage],
})
export class ProfilePageModule{}