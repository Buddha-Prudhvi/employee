import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { EmpSerService } from '../shared/emp-ser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: any = FormGroup
  user: string = ''
  password: string = ''


  constructor(private form: FormBuilder, 
    public route: Router, 
    private ser: EmpSerService,
    public home:HomeComponent) {
    this.loginform = this.form.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get u() {
    return this.loginform.get('user')
  }
  get p() {
    return this.loginform.get('password')
  }
 
  ngOnInit() {
  }

  submit() {
    if (!this.loginform.invalid) {
      let valuee = this.loginform.value;
      this.ser.loginn(valuee).subscribe((data: any) => {
        if (data.success == true) {
          localStorage.setItem('user', valuee.user)
          this.home.logoutdata = true;
          this.home.logindata =false;
          this.route.navigate(['home/form']);
        }
      });
    }
    else {
      return;

    }
  }

}
