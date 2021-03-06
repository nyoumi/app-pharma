import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LotService {

  constructor( private http:HttpClient) { }

  getAllLot(id_pharmacie){
    if(id_pharmacie) 
    return this.http.get<any>(environment.serverAddress + "lot/allLot?id_pharmacie="+id_pharmacie); 
    return this.http.get<any>(environment.serverAddress + "lot/allLot"); 

    
  }
  createLot(lot){
    let token =localStorage.getItem("token");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer '+token
      })
    };
    
    
    return this.http.post<any>(environment.serverAddress + "lot/addLot",lot,httpOptions);
  }

  deleteLot(lot) {
    return this.http.delete<any>(environment.serverAddress + "lot/delete",{
      body:lot
    });
  }
}
