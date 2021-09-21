import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MedicamentService } from '../../medicament.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-medicament-table',
  templateUrl: './medicament-table.component.html',
  styleUrls: ['./medicament-table.component.scss']
})
export class MedicamentTableComponent implements OnInit {
	public displayedColumns = ['Code_cip','medicamentName', 'Dosage','Conditionnement','Marque','pharmacie','forme','delete','edit'];
	public dataSource: any | null;
  	public showFilterTableCode;
	showSpinner: boolean=true;
  	constructor(private medicamentService:MedicamentService,private router: Router,private snackbar:MatSnackBar,private userService:UserService) {

	   }

  	ngOnInit() {
  		
		  this.medicamentService.getAllMedicament(this.userService.user.id_pharma).subscribe(data =>{
			this.showSpinner=false;

			console.log(data)
		 this.dataSource =data[0];
		 const pharmacies=data[1];
		 data[0].forEach(med => {
			 if(med.id_pharmacie!=null){
				 let pharmacie=pharmacies.filter(pharma => pharma.id === med.id_pharmacie)

				 med.nom_phar=pharmacie[0]?.nom_phar;
				 
			 }
			 
		 });
	   },err=>{
		this.showSpinner=false;
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
