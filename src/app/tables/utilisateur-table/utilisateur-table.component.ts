import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { Observable } from 'rxjs';
//import { User } from '../../forms/template-driven-forms/user';
import { User } from '../../user';
import { UserService } from '../../user.service';
import {MatButtonModule,MatButton} from '@angular/material/button';

@Component({
  selector: 'app-utilisateur-table',
  templateUrl: './utilisateur-table.component.html',
  styleUrls: ['./utilisateur-table.component.scss']
})
export class UtilisateurTableComponent implements OnInit {
	public displayedColumns = ['userName',   
	'userPhone','adresse','pharmacie','details','edit','delete'];
	public dataSource: Array<User>;
  	public showFilterTableCode;
  	constructor(private userService:UserService) { }

  	ngOnInit() {
  		 this.userService.getAllUser().subscribe(data =>{
			   console.log(data)
			
			const pharmacies=data[1];
			data[0].forEach(user => {
				if(user.id_pharma!=null){
					let medoc=pharmacies.filter(pharmacie => pharmacie.id === user.id_pharma)

					user.pharma_name=medoc[0].nom_phar;
					
				}
				
			});
			this.dataSource =data[0];
		  }

		  );
    }

	edit(user){
		console.log(user)
	}

}
