import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {


  constructor(private http: HttpClient) { }

  findMedicament(text){
  

    return this.http.get<any>(environment.serverAddress + "medicament/findMedoc?nom_medoc="+text); 
  }
   getAllMedicament(id_pharmacie){
    if(id_pharmacie) 
    return this.http.get<any>(environment.serverAddress + "medicament/findAllMedoc?id_pharmacie="+id_pharmacie); 
    return this.http.get<any>(environment.serverAddress + "medicament/findAllMedoc"); 
  
    
    return this.http.get<any>(environment.serverAddress + "medicament/findAllMedoc"); 
  }
  createMedicament(medicament){
    return this.http.post<any>(environment.serverAddress + "medicament/addMedoc",medicament);
  }

    deleteMedicament(medicament) {
    return this.http.delete<any>(environment.serverAddress + "medicament/delete",{
      body:medicament
    });
  }
}
