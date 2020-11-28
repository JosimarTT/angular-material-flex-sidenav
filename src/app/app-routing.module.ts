import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ContentLayoutComponent,
    // canActivate: [AuthGuard],
    // data: { roles: [UserRoleEnum.Admin] },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule,
          ),
      },
      {
        path: 'case',
        loadChildren: () =>
          import('./modules/case/case.module').then((m) => m.CaseModule),
      },
      {
        path: 'employee',
        loadChildren: () =>
          import('./modules/employee/employee.module').then(
            (m) => m.EmployeeModule,
          ),
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
