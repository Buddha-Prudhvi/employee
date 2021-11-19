import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
loggedin=true;
loggedout=false;
  constructor(public route:Router) { }

  ngOnInit(): void {
  }
  login(){
    this.route.navigate(['home/login'])
    this.loggedout = true;
    this.loggedin = false;
  }
  logout(){
    this.route.navigate(['/home'])
    this.loggedout = false;
    this.loggedin = true;
  }
}
