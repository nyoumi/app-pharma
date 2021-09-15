import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MedicamentService } from '../../medicament.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'cdk-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
	public bigMenu;
	public searchtext;
	@Input() open;
	constructor(private router: Router,private medicamentService: MedicamentService,private snackbar:MatSnackBar) { }

	ngOnInit() {
		
	}
	search() {
		console.log(this.searchtext)
		    this.medicamentService.findMedicament(this.searchtext).subscribe(data =>{
      console.log(data)
      if(data.length>0){
        
		  		   this.router.navigate(['/research'],data);

        
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

}
