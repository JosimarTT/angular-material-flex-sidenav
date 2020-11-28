import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { DetailsComponent } from './pages/details/details.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/employee/list',
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
        path: 'details/:id',
        component: DetailsComponent,
      },
      {
        path: 'add',
        component: AddComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/employee/list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
