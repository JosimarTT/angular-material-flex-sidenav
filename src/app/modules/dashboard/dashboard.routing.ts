import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/dashboard/dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
