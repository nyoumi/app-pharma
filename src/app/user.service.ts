import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient ) { }

  getAllUser(){

    return this.http.get<any>(environment.serverAddress + "all"); 
  }
  createUser(user){
    return this.http.post<any>(environment.serverAddress + "createUser",user);
  }
}
