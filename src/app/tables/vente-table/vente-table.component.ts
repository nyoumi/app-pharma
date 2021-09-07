import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { ExampleDatabase, ExampleDataSource } from './helpers.data';
import { Observable } from 'rxjs';
import { MedicamentService } from '../../medicament.service';
import { VenteService } from '../../vente.service';

@Component({
  selector: 'app-vente-table',
  templateUrl: './vente-table.component.html',
  styleUrls: ['./vente-table.component.scss']
})
export class VenteTableComponent implements OnInit {
	public displayedColumns = ['Date_Vente','Quantit_Sortie','delete','edit'];
	public exampleDatabase = new ExampleDatabase();
	public dataSource: ExampleDataSource | null;
  	public showFilterTableCode;
  	constructor(private venteService:VenteService) { }

  	ngOnInit() {
  		this.dataSource = new ExampleDataSource(this.exampleDatabase);
		  this.venteService.getAllVente().subscribe(data =>{
			console.log(data)
		 this.dataSource =data;
	   }

	   );
    }

}
