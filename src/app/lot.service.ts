import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LotService {

  constructor( private http:HttpClient) { }

  getAllLot(){

    return this.http.get<any>(environment.serverAddress + "all"); 
  }
  createLot(lot){
    return this.http.post<any>(environment.serverAddress + "lot/addLot",lot);
  }
}
