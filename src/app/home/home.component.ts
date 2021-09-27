import { Component, OnInit } from '@angular/core';
import { LIST_HELPERS,  Messages, Links} from './helpers.data';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MedicamentService } from '../medicament.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public bigMenu;
	public searchInput:string;
  public medicaments: any;
  showProps: boolean;
    listHelpers: any = LIST_HELPERS;
     links = Links;

    showMultiListCode: boolean = false;
     elements:any = Messages;
    constructor(private router: Router,
      private medicamentService: MedicamentService,private snackbar:MatSnackBar) { 
         
    }

  

	ngOnInit() {
    this.medicamentService.getAllMedicament().subscribe(data =>{
console.log(data)
if(data.length>0){

    this.medicaments=data;

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

     this.router.navigate(['/research'],{state:{
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