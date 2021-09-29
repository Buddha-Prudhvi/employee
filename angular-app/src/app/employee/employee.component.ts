import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmpSerService } from '../shared/emp-ser.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private ser:EmpSerService) { }
  public employeeform = this.formbuilder.group({
    name:['',[Validators.required,Validators.minLength(4)]],
    position:['',Validators.required],
    office:['',Validators.required],
    salary:['',Validators.required]
  })

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
    obj.salary = temp.salary;
    this.ser.insert(obj).subscribe((data)=>{
      console.log(data)
    })
    
  }
  

  ngOnInit(): void {
  }

}
