import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginform:any=FormGroup
user:string=''
password:string=''

  constructor(private form :FormBuilder,public route:Router) {
    this.loginform = this.form.group({
      user:['',Validators.required],
      password:['',Validators.required]
    })
   }

  get u() {
    return this.loginform.get('user')
  }
  get p() {
    return this.loginform.get('password')
  }

  ngOnInit(): void {
  }

submit(){
  if(this.loginform.invalid){
    return
  }
}
login(){
  // this.route.navigate(['/form'])
}
}
