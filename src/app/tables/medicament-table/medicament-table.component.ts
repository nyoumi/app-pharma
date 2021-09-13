import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { Observable } from 'rxjs';
import { MedicamentService } from '../../medicament.service';

@Component({
  selector: 'app-medicament-table',
  templateUrl: './medicament-table.component.html',
  styleUrls: ['./medicament-table.component.scss']
})
export class MedicamentTableComponent implements OnInit {
	public displayedColumns = ['medicamentId', 'Code_cip', 'Dosage','Conditionnement','Marque','Categorie','Tag','forme','delete','edit'];
	public dataSource: any | null;
  	public showFilterTableCode;
  	constructor(private medicamentService:MedicamentService) { }

  	ngOnInit() {
  		
		  this.medicamentService.getAllMedicament().subscribe(data =>{
			console.log(data)
		 this.dataSource =data;
	   }

	   );
    }

}
