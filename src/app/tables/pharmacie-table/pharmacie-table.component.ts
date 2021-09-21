import { Route } from '@angular/compiler/src/core';
import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
	  showSpinner:boolean=true;
  	constructor(private pharmacieService:PharmacieService, private router: Router,private snackbar:MatSnackBar) { }

  	ngOnInit() {
		this.pharmacieService.getAllPharmacie().subscribe(data =>{
			this.showSpinner=false;
		  console.log(data)
	   this.dataSource =data;
	 },err=>{
		this.showSpinner=false;
	   }

	 );
    }
	
	edit(pharmacie){
		this.router.navigate(['/auth/forms/pharmacie_forms'],pharmacie);
	}
	delete(pharmacie){
		if(window.confirm('Are sure you want to delete this item ?')){
			this.pharmacieService.deletePharmacie(pharmacie).subscribe((data:any) =>{
				console.log(data)
			 if(data.code==202){
				let snackBarRef = this.snackbar.open('operation success','OK', {
					duration: 3000,
					panelClass: ['red-snackbar']
				  });
			 }else{
				let snackBarRef = this.snackbar.open('operation error!','OK', {
					duration: 3000,
					panelClass: ['red-snackbar']
				  });
			 }
		   },Error=>{
			let snackBarRef = this.snackbar.open('operation error!','OK', {
				duration: 3000,
				panelClass: ['red-snackbar']
			  });
		   }
	
		   );
		   }
		
	}
		

}
