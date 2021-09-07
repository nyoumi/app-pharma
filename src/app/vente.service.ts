import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VenteService {
 /*  getAllVente() {
	  throw new Error('Method not implemented.');
  } */

  
  constructor(private http: HttpClient ) { }

  getAllVente(){

    return this.http.get<any>(environment.serverAddress + "all"); 
  }
  createVente(vente){
    return this.http.post<any>(environment.serverAddress + "createVente",vente);
  }
}
