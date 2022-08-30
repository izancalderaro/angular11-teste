import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArquivoComponent } from './arquivo.component';

const routes: Routes = [{ path: '', component: ArquivoComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArquivoRoutingModule {}
