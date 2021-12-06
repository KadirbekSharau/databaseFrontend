import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PublicServantPage } from './pb_page';
import { AppRoutingModule } from 'src/app/features/routing/app-routing.module';
import { HeaderModule } from 'src/app/features/components/header/header_module';
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
    PublicServantPage,
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
  exports: [PublicServantPage],
  providers: [],
  bootstrap: [PublicServantPage]
})
export class PublicServantPageModule { }