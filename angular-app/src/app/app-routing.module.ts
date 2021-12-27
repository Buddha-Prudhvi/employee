import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { FormguardGuard } from './guards/formguard.guard';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { SignupComponent } from './signup/signup.component';

export const routes=[
  
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'hom', component: Home1Component },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'forgotpassword', component: ForgotpasswordComponent },
      { path: 'form', component: EmployeeComponent,canActivate:[FormguardGuard]},
      { path: 'form/:id', component: EmployeeComponent,canActivate:[FormguardGuard] },
      { path: 'record', component: PostComponent,canActivate:[FormguardGuard] }
    ]
  },
  { path: '', redirectTo: 'home/hom', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
