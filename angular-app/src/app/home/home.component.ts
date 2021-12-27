import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
logindata:boolean=true
logoutdata:boolean=false
// showWelcome:boolean = true;
  constructor(private route:Router) {

   }

 async ngOnInit(){
  }

  login(){
    // this.showWelcome = false;
    this.route.navigate(['home/login']) 
  }
  home(){
    this.route.navigate(['home/hom'])
  }
  forms(){
    this.route.navigate(['home/form'])
  }
  records(){
    this.route.navigate(['home/record'])
  }
  logout(){
    this.logindata =true;
    this.logoutdata=false;
    localStorage.clear()
    this.route.navigate(['home/hom'])
  }
}

