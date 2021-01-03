import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { UserListComponent } from './user-list/user-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardHomeComponent, 
    children: [
      {
        path: 'list',
        component: UserListComponent
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path:'**',
        redirectTo: 'list'
      }
    ]
  }
]


@NgModule({
  declarations: [DashboardHomeComponent, UserListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
