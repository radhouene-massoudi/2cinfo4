import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get('http://localhost:3000/user/');
  }
  getUserByID(id:any){
    return this.http.get('http://localhost:3000/user/'+id);
 
  }
 adduser(u:any){
return this.http.post('http://localhost:3000/user/',u);
 } 
 deleteUser(id:any){
return this.http.delete('http://localhost:3000/user/'+id)
 }
 updateUser(id:any,data:any){
return this.http.put('http://localhost:3000/user/'+id,data)
 }
}
