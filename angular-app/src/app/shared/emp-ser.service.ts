import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmpSerService {
  url = "http://localhost:3000"
  url_id = "http://localhost:3000/:id"
  sign = "http://localhost:3000/register"
  login = "http://localhost:3000/login"

  constructor(private http: HttpClient) { }
  signup(user: any) {
    return this.http.post(this.sign, user)
  }
  getAllusers() {
    return this.http.get(this.url + "/getall");
  }
  getUsersById(id: any) {
    return this.http.get(this.url + "/findBy/" + id);
  }

  insert(user: any) {
    return this.http.post(this.url+"/save", user)
  }

  update(id: number) {
    return this.http.put(this.url, id);
  }
  loginn(user:any){
    return this.http.post(this.login,user)
  }
  userdelete(id:any){
    return this.http.delete(this.url +"/deleteBy/"+id)
  }

}

