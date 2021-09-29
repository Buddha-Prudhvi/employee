import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpSerService {
url = "http://localhost:3000/"
  constructor(private http:HttpClient) { }
data = this.http.get(this.url)

  insert(user:any){
    const headers = new HttpHeaders({"content-type":"application/json"})
    const body = JSON.stringify(user)
    console.log(body)
    return this.http.post(this.url,user,{headers:headers})
  }
}
