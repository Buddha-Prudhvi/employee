import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmpSerService } from '../shared/emp-ser.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeform:any=FormGroup;

  name:string = "";
  position:string="";
  salary:string="";
  office:string = "";
    constructor(private formbuilder:FormBuilder,private ser:EmpSerService,private aroute:ActivatedRoute) {
    this.employeeform = this.formbuilder.group({
      name:['',[Validators.required,Validators.minLength(4)]],
      position:['',Validators.required],
      office:['',Validators.required],
      salary:['',Validators.required]
    });
   }
   

  get n(){
    return this.employeeform.get('name')
  }
  get p(){
    return this.employeeform.get('position')
  }
  get o(){
    return this.employeeform.get('office')
  }
  get s(){
    return this.employeeform.get('salary')
  }
  add(){
    let temp = this.employeeform.value;
    let obj:any = {}
    obj.name = temp.name;
    obj.position = temp.position;
    obj.office = temp.office;
    obj.salary = temp.salary;``
    this.ser.insert(obj).subscribe((data)=>{
      console.log(data)
    })
    
  }
  submit(){
    if (this.employeeform.invalid){
      return 
    }
  }


  reset(){
    this.employeeform.reset()
  }
  
  public users:any;
  public data:any;
  ngOnInit(){
    this.ser.getAllusers().subscribe(data=>{
      this.users=data;
    })
    
   let id = this.aroute.snapshot.params['Id'];
   this.ser.update(id).subscribe(x=>{
     this.data = x;
   })
  }
  edit(){
  

  }

}
