import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SougovComponent } from './sougov.component';

const routes: Routes = [{ path: '', component: SougovComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SougovRoutingModule { }
