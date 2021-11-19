import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpSerService } from '../shared/emp-ser.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupform:any = FormGroup;
username:string=''
email:string=''
password:string=''

  constructor(private form:FormBuilder,private ser:EmpSerService,public route:Router) { 
    this.signupform = this.form.group({
      username: ['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
get u(){
  return this.signupform.get('username')
}
get e(){
  return this.signupform.get('email')
}
get p(){
  return this.signupform.get('password')
}
  ngOnInit(): void {
  }
submit(){
  if (this.signupform.invalid) {
    return
  }
}
signup(){
  let temp = this.signupform.value
  let obj:any = {}
  obj.username = temp.username;
  obj.email = temp.email;
  obj.password = temp.password;
  this.ser.signup(obj).subscribe((data)=>{
    console.log(data);
    this.route.navigate(['/home/login'])
  })

}
}
