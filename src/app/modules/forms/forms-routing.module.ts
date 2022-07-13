import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDataComponent } from './form-data/form-data.component';
import { FormsComponent } from './forms.component';

const routes: Routes = [
  { path: '', component: FormsComponent },
  { path: 'formdata', component: FormDataComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
