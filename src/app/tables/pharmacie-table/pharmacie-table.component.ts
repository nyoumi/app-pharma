import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { ExampleDatabase, ExampleDataSource } from './helpers.data';
import { Observable } from 'rxjs';
import { PharmacieService } from '../../pharmacie.service';

@Component({
  selector: 'app-pharmacie-table',
  templateUrl: './pharmacie-table.component.html',
  styleUrls: ['./pharmacie-table.component.scss']
})
export class PharmacieTableComponent implements OnInit {
	[x: string]: any;
	public displayedColumns = [ 'nomPharmacie', 'emailPharmacie', 'telPharmacie',
	'adresse'];
	public exampleDatabase = new ExampleDatabase();
	public dataSource: ExampleDataSource | null;
  	public showFilterTableCode;
  	constructor(private pharmacieService:PharmacieService) { }

  	ngOnInit() {
		this.dataSource = new ExampleDataSource(this.exampleDatabase);
		this.pharmacieService.getAllPharmacie().subscribe(data =>{
		  console.log(data)
	   this.dataSource =data;
	 }

	 );
    }

}
