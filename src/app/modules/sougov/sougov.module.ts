import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SougovRoutingModule } from './sougov-routing.module';
import { SougovComponent } from './sougov.component';


@NgModule({
  declarations: [
    SougovComponent
  ],
  imports: [
    CommonModule,
    SougovRoutingModule
  ]
})
export class SougovModule { }
