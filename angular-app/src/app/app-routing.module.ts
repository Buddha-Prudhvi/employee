import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [{path:'',redirectTo:'home',pathMatch:'full'},{path:'home',component:HomeComponent},
{path:'form',component:EmployeeComponent},{path:'form/:name',component:EmployeeComponent},{path:'record',component:PostComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
