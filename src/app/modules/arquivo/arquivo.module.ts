import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArquivoComponent } from './arquivo.component';
import { ArquivoRoutingModule } from './arquivo-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ArquivoComponent],
  imports: [CommonModule, ArquivoRoutingModule, SharedModule],
})
export class ArquivoModule {}
