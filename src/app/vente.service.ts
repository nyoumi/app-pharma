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

  getAllVentePharmacie(id_pharmacie){ 

    return this.http.get<any>(environment.serverAddress + "Sortie/getByPharmacie/"+id_pharmacie); 
  }
  createVente(vente){
    return this.http.post<any>(environment.serverAddress + "Sortie/addSortie",vente);
  }
  getPharmacieVente(id_pharmacie){ 

    return this.http.get<any>(environment.serverAddress + "Sortie/getByPharmacie/"+id_pharmacie); 
  }
}
