import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { Observable } from 'rxjs';
//import { User } from '../../forms/template-driven-forms/user';
import { User } from '../../user';
import { UserService } from '../../user.service';
import {MatButtonModule,MatButton} from '@angular/material/button';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
	  showSpinner=true;
  	constructor(private userService:UserService,private router: Router, private snackbar:MatSnackBar) { 

	  }

  	ngOnInit() {
		  
  		 this.userService.getAllUser().subscribe(data =>{
			   this.showSpinner=false;
			   console.log(data)
			
			const pharmacies=data[1];
			data[0].forEach(user => {
				if(user.id_pharma!=null && user.id_pharma!=""){
					let pharma=pharmacies.filter(pharmacie => pharmacie.id === user.id_pharma)
					console.log(pharma)
					console.log(user)
					if(pharma[0]) user.pharma_name=pharma[0].nom_phar;
					
				} 
				
		});
			this.dataSource =data[0];
		  },err=>{
			this.showSpinner=false;
		  }

		  );
    }
		

	edit(user){
		this.router.navigate(['/auth/forms/utilisateur_forms'],user);
	}
	delete(user){
		if(window.confirm('Are sure you want to delete this item ?')){
			this.userService.deleteUser(user).subscribe((data:any) =>{
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
