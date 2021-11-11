import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmpSerService {
url = "http://localhost:3000"
url_id = "http://localhost:3000/:id"
  constructor(private http:HttpClient) { }

  getAllusers(){
  return this.http.get(this.url+"/getall");
  }
  getUsersById(id:any){
    return this.http.get(this.url+"/findBy/"+id);
    }

  insert(user:any){
    return this.http.post(this.url,user)
  }
  
  update(id:number){
    return this.http.put(this.url,id);
  }

}

