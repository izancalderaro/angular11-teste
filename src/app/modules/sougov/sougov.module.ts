import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SougovRoutingModule } from './sougov-routing.module';
import { SougovComponent } from './sougov.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    SougovComponent
  ],
  imports: [
    CommonModule,
    SougovRoutingModule,
    SharedModule
  ]
})
export class SougovModule { }
