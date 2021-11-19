import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent,children:[{path:'login',component:LoginComponent},{path:'signup',component:SignupComponent},{path:'forgotpassword',component:ForgotpasswordComponent}]},
{path:'form',component:EmployeeComponent},
{path:'form/:id',component:EmployeeComponent},
{path:'record',component:PostComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
