import { Route } from '@angular/compiler/src/core';
import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
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
	'adresse','add_user','edit','delete'];
	public dataSource: any | null;
  	public showFilterTableCode;
  	constructor(private pharmacieService:PharmacieService, private router: Router) { }

  	ngOnInit() {
		this.pharmacieService.getAllPharmacie().subscribe(data =>{
		  console.log(data)
	   this.dataSource =data;
	 }

	 );
    }
	
	edit(pharmacie){
		this.router.navigate(['/auth/forms/pharmacie_forms'],pharmacie);
	}

}
