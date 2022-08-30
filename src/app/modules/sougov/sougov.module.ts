import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { SougovRoutingModule } from './sougov-routing.module';
import { SougovComponent } from './sougov.component';

@NgModule({
  declarations: [SougovComponent],
  imports: [CommonModule, SougovRoutingModule, SharedModule],
})
export class SougovModule {}
