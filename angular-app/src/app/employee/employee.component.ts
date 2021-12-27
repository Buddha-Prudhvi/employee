import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpSerService } from '../shared/emp-ser.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
   ELEMENT_DATA:any = [
    
  ];
  displayedColumns: string[] = ['name', 'position', 'office', 'salary','edit','delete'];
  dataSource = this.ELEMENT_DATA;
  employeeform: any = FormGroup;

  name: string = "";
  position: string = "";
  salary: string = "";
  office: string = "";
  public users: any;
  public data: any;

  constructor(private formbuilder: FormBuilder, private ser: EmpSerService, private aroute: ActivatedRoute, public route: Router) {
    this.employeeform = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      position: ['', Validators.required],
      office: ['', Validators.required],
      salary: ['', Validators.required]
    });
  }


  get n() {
    return this.employeeform.get('name')
  }
  get p() {
    return this.employeeform.get('position')
  }
  get o() {
    return this.employeeform.get('office')
  }
  get s() {
    return this.employeeform.get('salary')
  }
  add() {
    let temp = this.employeeform.value;
    let obj: any = {}
    obj.name = temp.name;
    obj.position = temp.position;
    obj.office = temp.office;
    obj.salary = temp.salary; 
    this.ser.insert(obj).subscribe((data) => {
      this.getData()
      console.log(data)
    })
  }

  submit() {
    if (this.employeeform.invalid) {
      return
    }
  }

  reset() {
    this.employeeform.reset()
  }

  
  ngOnInit() {
   
    let get_value = localStorage.getItem('user')

    this.getData();
  }

  getData(){
    this.ser.getAllusers().subscribe((data) => {
      this.ELEMENT_DATA = data;
      this.dataSource = this.ELEMENT_DATA.result
    })
  }
  
  edit(id: any) {
    this.ser.getUsersById(id).subscribe((x:any) => {
      
      this.data = x.result;
      console.log("x data", this.data);
      this.employeeform.patchValue({name:this.data.name});
      this.employeeform.patchValue({position:this.data.position});
      this.employeeform.patchValue({office:this.data.office});
      this.employeeform.patchValue({salary:this.data.salary});
    })
  }
  delete(id:any){
    this.ser.userdelete(id).subscribe((data:any)=>{(console.log(data))})
  }
}
