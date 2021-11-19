import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
forgotform:any = FormGroup
email:string = ''
  constructor(private form:FormBuilder) { 
    this.forgotform = this.form.group({
      email:['',Validators.required]
    })
  }
get e(){
  return this.forgotform.get('email')
}
  ngOnInit(): void {
    
  }
submit(){
  if(this.forgotform.invalid){
    return
  }
}
}
