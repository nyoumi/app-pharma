import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {

  constructor(private http: HttpClient) { }

  getAllMedicament(){
    let token =localStorage.getItem("token");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer '+token 
      })
    };

    return this.http.get<any>(environment.serverAddress + "medicament/findAllMedoc",httpOptions); 
  }
  createMedicament(medicament){
    return this.http.post<any>(environment.serverAddress + "medicament/addMedoc",medicament);
  }
}
