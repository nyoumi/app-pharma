import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { Observable } from 'rxjs';
import { LotService } from '../../lot.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../user.service';
import { User } from '../../user';

@Component({
  selector: 'app-lot-table',
  templateUrl: './lot-table.component.html',
  styleUrls: ['./lot-table.component.scss']
})
export class LotTableComponent implements OnInit {
	public displayedColumns = [ 'Numero_lot','Medicament','Pharmacie', 'Date_fabrication_Lot',
	'Date_Peremption_Lot','Quantite_Restante','Quantite_Depart','Quantite_vendue','Prix_Lot','delete','archive'];
	public dataSource: Array<any>;
  	public showFilterTableCode;
	showSpinner: boolean=true;
	user: User;
  	constructor(private lotService:LotService,private snackbar:MatSnackBar,private userService:UserService) { }

  	ngOnInit() {
		this.user=this.userService.daoGetUser()

  	this.dataSource = [];
		  this.lotService.getAllLot(this.user.id_pharma).subscribe(data =>{
			this.showSpinner=false;
			console.log(data)
			const pharmacies=data[1];
			data[0].forEach(lot => {
				if(lot.id_pharmacie!=null){
					let pharmacie=pharmacies.filter(pharmacie => pharmacie.id === lot.id_pharmacie)

					lot.pharma_name=pharmacie[0]?.nom_phar;
					
				}
				
			});
			const medicaments=data[2];
			data[0].forEach(lot => {
				if(lot.id_medicament!=null){
					let medicament=medicaments.filter(medicament => medicament.id === lot.id_medicament)

					lot.nom_medoc=medicament[0]?.nom_medoc;
					
				}
				
			});
			data[0].forEach(lot => {
				lot.qte_vendue= lot.qtedepart_lot- lot.qte_lot;
				
			});
		 this.dataSource =data[0];
	   },err=>{
		this.showSpinner=false;
	   }

	   );
    }

		delete(lot){
		if(window.confirm('Are sure you want to delete this item ?')){
			this.lotService.deleteLot(lot).subscribe((data:any) =>{
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
