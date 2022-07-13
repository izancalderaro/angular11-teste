import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { FormDataComponent } from './form-data/form-data.component';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';



@NgModule({
  declarations: [
    FormsComponent,
    FormDataComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule, SharedModule
  ]
})
export class FormsModule { }
