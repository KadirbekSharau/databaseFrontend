
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogDoctor } from './mat_dialog_doctor';
import { AppRoutingModule } from '../../../../app/features/routing/app-routing.module';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MatDialogDoctor
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatDividerModule,
    AppRoutingModule,
  ],
  exports: [
    MatDialogDoctor,
  ],
  providers: [],
})
export class MatDialogDoctorModule { }