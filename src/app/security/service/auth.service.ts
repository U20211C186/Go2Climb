import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Iservice} from "../../models/service";
import {catchError, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {

  }
  apiurlUser='http://localhost:8080/api/v1/tourists';
  apiurlAgency='http://localhost:8080/api/v1/agencies';

  RegisterUser(inputdata:any){
    return this.http.post(this.apiurlUser,inputdata)
  }
  RegisterAgency(inputdata:any){
    return this.http.post(this.apiurlAgency,inputdata)
  }
  // GetUserbyCode(id:any){
  //   return this.http.get(this.apiurl+'/'+id);
  // }
  // Getall(){
  //   return this.http.get(this.apiurl);
  // }
  updateTourist(id:any,inputdata:any){
    return this.http.put(this.apiurlUser+'/'+id,inputdata);
  }
  updateAgenyc(id:any,inputdata:any){
    return this.http.put(this.apiurlAgency+'/'+id,inputdata);
  }
  // getuserrole(){
  //   return this.http.get('http://localhost:3000/role');
  // }
  isloggedin(){
    return sessionStorage.getItem('username')!=null;
  }
  getrole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }
  // GetAllCustomer(){
  //   return this.http.get('http://localhost:3000/customer');
  // }
  // Getaccessbyrole(role:any,menu:any){
  //   return this.http.get('http://localhost:3000/roleaccess?role='+role+'&menu='+menu)
  // }
  GetUserByEmailAndPasswordTourist(email: any, password:any){
    return this.http.get<Iservice>(this.apiurlUser+ `/email&password/${email}/${password}`);
  }

  GetUserByEmailAndPasswordAgency(email: any,password:any){
    return this.http.get<Iservice>(this.apiurlAgency+ `/email&password/${email}/${password}`);
  }
}
