import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {

  constructor(private http: HttpClient) { }

  getAllMedicament(){

    return this.http.get<any>(environment.serverAddress + "all"); 
  }
  createMedicament(medicament){
    return this.http.post<any>(environment.serverAddress + "createUser",medicament);
  }
}
