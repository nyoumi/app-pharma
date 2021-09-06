import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PharmacieService {

  constructor( private http:HttpClient) { }

  getAllPharmacie(){

    return this.http.get<any>(environment.serverAddress + "Pharmacie/findAll"); 
  }
  createPharmacie(pharmacie){
    return this.http.post<any>(environment.serverAddress + "Pharmacie/addPharma",pharmacie);
  }
}
