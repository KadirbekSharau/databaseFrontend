import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DiseasePage } from './disease_page';
import { HeaderModule } from 'src/app/features/components/header/header_module';


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