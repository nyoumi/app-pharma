import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MedicamentService } from '../../medicament.service';

@Component({
  selector: 'app-medicament-table',
  templateUrl: './medicament-table.component.html',
  styleUrls: ['./medicament-table.component.scss']
})
export class MedicamentTableComponent implements OnInit {
	public displayedColumns = ['Code_cip', 'Dosage','Conditionnement','Marque','Categorie','Tag','forme','delete','edit'];
	public dataSource: any | null;
  	public showFilterTableCode;
  	constructor(private medicamentService:MedicamentService,private router: Router,private snackbar:MatSnackBar) {

	   }

  	ngOnInit() {
  		
		  this.medicamentService.getAllMedicament().subscribe(data =>{
			console.log(data)
		 this.dataSource =data;
	   }

	   );
	   
	   
    }

	edit(medicament){
		this.router.navigate(['/auth/forms/medicament_forms'],medicament);
	}
	delete(medicament){
		if(window.confirm('Are sure you want to delete this item ?')){
			this.medicamentService.deleteMedicament(medicament).subscribe((data:any) =>{
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
