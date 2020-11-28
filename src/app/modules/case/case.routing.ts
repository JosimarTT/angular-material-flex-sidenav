import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImportComponent } from './pages/import/import.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/case/list',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'import',
        component: ImportComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/case/list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaseRoutingModule {}
