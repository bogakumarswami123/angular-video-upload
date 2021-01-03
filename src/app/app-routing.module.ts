import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: 'auth',
  loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
},
{
  path: 'dashboard',
  loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
},
{
  path: '',
  redirectTo : 'auth',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: 'auth'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
