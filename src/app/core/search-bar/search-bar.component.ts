import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MedicamentService } from '../../medicament.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'cdk-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit  {
	public bigMenu;
	public searchInput:string;
	@Input() open;
  public medicaments: any;
  showProps: boolean;
	constructor(private router: Router,
    private medicamentService: MedicamentService,private snackbar:MatSnackBar) {

   }


	ngOnInit() {
				    this.medicamentService.getAllMedicament(null).subscribe(data =>{
      console.log(data)
      if(data.length>0){
        
		  		  this.medicaments=data[0];
        
      }
   
   },error=>{
    let snackBarRef = this.snackbar.open('database connection error!','OK', {
        duration: 3000,
        panelClass: ['red-snackbar']
      });
   }
  
   );
	}
	search() {
		console.log(this.searchInput)
		    this.medicamentService.findMedicament(this.searchInput).subscribe(data =>{
      console.log(data)
      if(data.length>0){
        
		  		   this.router.navigate(['/auth/material-widgets/list'],{state:{
               data:{
                results: data,
                research: this.searchInput
               }
             },});

        
      }else{
            let snackBarRef = this.snackbar.open('No result from database!','OK', {
        duration: 3000,
        panelClass: ['red-snackbar']
      });
      }
   
   },error=>{
    let snackBarRef = this.snackbar.open('operation error!','OK', {
        duration: 3000,
        panelClass: ['red-snackbar']
      });
   }
  
   );
	}

  setInput(medicament){
    console.log(medicament)
    this.searchInput=medicament.nom_medoc

  }
  focusOutFunction(){
    this.showProps=false;
  }

  focusFunction(){
    this.showProps=true;
  }

}
