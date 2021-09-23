import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from "../environments/environment";
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  daoGetUser():User {
    let savedUser= localStorage.getItem("user");
    if(savedUser && savedUser!="undefined" ){
      this.user= JSON.parse(savedUser)
      return this.user;
    }else return null;
  }

  register(data: any) {
    return this.http.post<any>(environment.serverAddress + "register",data);
  }
  authenticate(data: any) {
    return this.http.post<any>(environment.serverAddress + "authenticate",data);
  }

  constructor(private http: HttpClient ) {
    this.daoGetUser();
   }

  getAllUser(id_pharmacie){
    if(id_pharmacie) 
    return this.http.get<any>(environment.serverAddress + "all?id_pharmacie="+id_pharmacie); 
    return this.http.get<any>(environment.serverAddress + "all"); 
  

    return this.http.get<any>(environment.serverAddress + "all"); 
  }
  createUser(user){
    return this.http.post<any>(environment.serverAddress + "createUser",user);
  }
  deleteUser(user){
    return this.http.delete<any>(environment.serverAddress + "delete", {
      body:user
    });
  }

    getStatistiques(id_pharma?){
      if(id_pharma) 
      return this.http.get<any>(environment.serverAddress + "getstats?id_pharmacie="+id_pharma);

      return this.http.get<any>(environment.serverAddress + "getstats");

  }
}
