import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmpSerService } from '../shared/emp-ser.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
   ELEMENT_DATA:any = [];
  displayedColumns: string[] = ['name', 'position', 'office', 'salary'];
  dataSource:any;

  constructor( private ser :EmpSerService) { }

  ngOnInit(){
    this.ser.getAllusers().subscribe(data=>{
      this.ELEMENT_DATA = data;
      this.dataSource = this.ELEMENT_DATA.result
    })
  }
}
