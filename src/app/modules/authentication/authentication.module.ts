import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthenticationHomeComponent } from './authentication-home/authentication-home.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationHomeComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  }
]

@NgModule({
  declarations: [LoginComponent, SignupComponent, ForgotPasswordComponent, AuthenticationHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthenticationModule { }
