import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmpSerService {
url = "http://localhost:3000"
  constructor(private http:HttpClient) { }

  getAllusers(){
  return this.http.get("http://localhost:3000");
}

  insert(user:any){
    const headers = new HttpHeaders({"content-type":"application/json"})
    const body = JSON.stringify(user)
    console.log(body)
    return this.http.post(this.url,user,{headers:headers})
  }
  
  update(id:number){
    return this.http.put(this.url,id);
  }

 
}

