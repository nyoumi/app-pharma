import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { ExampleDatabase, ExampleDataSource } from './helpers.data';
import { Observable } from 'rxjs';
import { MedicamentService } from '../../medicament.service';

@Component({
  selector: 'app-medicament-table',
  templateUrl: './medicament-table.component.html',
  styleUrls: ['./medicament-table.component.scss']
})
export class MedicamentTableComponent implements OnInit {
	public displayedColumns = ['medicamentId', 'Code_cip', 'Dosage',
	'Notice','Conditionnement','Marque','Categorie','Tag','forme','delete','edit'];
	public exampleDatabase = new ExampleDatabase();
	public dataSource: ExampleDataSource | null;
  	public showFilterTableCode;
  	constructor(private medicamentService:MedicamentService) { }

  	ngOnInit() {
  		this.dataSource = new ExampleDataSource(this.exampleDatabase);
		  this.medicamentService.getAllMedicament().subscribe(data =>{
			console.log(data)
		 this.dataSource =data;
	   }

	   );
    }

}
