import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { Observable } from 'rxjs';
import { MedicamentService } from '../../medicament.service';
import { User } from '../../user';
import { UserService } from '../../user.service';
import { VenteService } from '../../vente.service';

@Component({
  selector: 'app-vente-table',
  templateUrl: './vente-table.component.html',
  styleUrls: ['./vente-table.component.scss']
})
export class VenteTableComponent implements OnInit {
	public displayedColumns = ['date_Vente','quantit_Vente',
	'medicament','montant_total','montant_unitaire','details'];
	public dataSource:  [];
  	public showFilterTableCode;
	private user:  User ;
	showSpinner: boolean=true;

  	constructor(private venteService:VenteService,private userService:UserService) {
		//this.user=JSON.parse(localStorage.getItem("user"));
		this.user=this.userService.daoGetUser()
	   }

  	ngOnInit() {
  		this.dataSource = [];

		  this.venteService.getAllVentePharmacie(this.user.id_pharma).subscribe(data =>{
			this.showSpinner=false;

			console.log(data)
			const medicaments=data[1];
			data[0].forEach(vente => {
				if(vente.id_medoc!=null){
					let medicament=medicaments.filter(medicament => medicament.id === vente.id_medoc)

					vente.nom_medoc=medicament[0]?.nom_medoc;
					
				}
				
			});
			
		 this.dataSource =data[0];
	   },err=>{
		this.showSpinner=false;
	   }

	   );
    }

}
