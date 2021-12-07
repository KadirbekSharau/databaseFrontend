import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DiseasePage } from './disease_page';
import { HeaderModule } from '../../../../app/features/components/header/header_module';


@NgModule({
  declarations: [
    DiseasePage,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
  ],
  exports: [DiseasePage],
  providers: [],
  bootstrap: [DiseasePage],
})
export class DiseasePageModule { }