import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'forms', pathMatch: 'full' },
  {
    path: 'forms',
    loadChildren: () =>
      import('./modules/forms/forms.module').then((m) => m.FormsModule),
  },
  {
    path: 'sougov',
    loadChildren: () =>
      import('./modules/sougov/sougov.module').then((m) => m.SougovModule),
  },
  {
    path: 'arquivo',
    loadChildren: () =>
      import('./modules/arquivo/arquivo.module').then((m) => m.ArquivoModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
