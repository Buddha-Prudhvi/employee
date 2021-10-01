import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmpSerService } from '../shared/emp-ser.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
x:any=[];
  constructor(private http:HttpClient, private ser :EmpSerService) { }

  ngOnInit(){
    this.ser.getAllusers().subscribe(data=>{
      this.x = data;
    })
  }
}
