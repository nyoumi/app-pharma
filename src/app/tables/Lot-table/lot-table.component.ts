import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { ExampleDatabase, ExampleDataSource } from './helpers.data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lot-table',
  templateUrl: './lot-table.component.html',
  styleUrls: ['./lot-table.component.scss']
})
export class LotTableComponent implements OnInit {
	public displayedColumns = ['lotId', 'Numero_lot', 'Date_Enntree_Lot',
	'Date_Peremtion_Lot','Quantite_Recente','Quantite_Depart','Prix_Lot','Medicament','Pharmacie','Utilsateur'];
	public exampleDatabase = new ExampleDatabase();
	public dataSource: ExampleDataSource | null;
  	public showFilterTableCode;
  	constructor() { }

  	ngOnInit() {
  		this.dataSource = new ExampleDataSource(this.exampleDatabase);
    }

}
