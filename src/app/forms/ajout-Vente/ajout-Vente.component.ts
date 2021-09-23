import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup, AbstractControl, AbstractControlOptions, FormControl } from '@angular/forms';
import { PharmacieService } from '../../pharmacie.service';
import { EmailValidator } from '@angular/forms';
import { VenteService } from '../../vente.service';
import { MedicamentService } from '../../medicament.service';
import { User } from '../../user';
import { map, startWith } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'cdk-ajout-Vente',
  templateUrl: './ajout-Vente.component.html',
  styleUrls: ['./ajout-Vente.component.scss']
})
export class AjoutVenteComponent implements OnInit {
  public Medicament: AbstractControl;  
  public Quantit_Sortie:AbstractControl;
  public filterControl = new FormControl();

  


  public profileForm:FormGroup;
  submitted = false;
  hide;
  vente: {};
  estimated_amount:number=0;
  fieldId="medicament";
  private user:  User ;
  medicaments: any;
  filteredOptions: any;
  optionItems: any;
  constructor(public form: FormBuilder, 
    public venteService: VenteService,private snackbar:MatSnackBar,
    private medicamentService:MedicamentService,
    ) { 
      this.user=JSON.parse(localStorage.getItem("user"));
    this.profileForm = this.form.group({
      Medicament:['', {
        validators: [ Validators.required], 
        updateOn: 'blur'
      }],
      filterControl:['', {
        validators: [ Validators.required], 
        updateOn: 'blur'
      }],
      Quantit_Sortie:['1', {
        validators: [ Validators.required], 
        updateOn: 'blur'
      }],
     });
        this.Medicament=this.profileForm.controls['Medicament'];
        this.Quantit_Sortie=this.profileForm.controls['Quantit_Sortie'];
       

  }

 onSubmit() { 
   this.vente={
    id_medoc: this.Medicament.value,
    qte_sort: this.Quantit_Sortie.value,
    id_pharmacie:this.user.id_pharma,
    created_by:this.user.id
    
   }
   console.log(this.vente) 

   this.venteService.createVente(this.vente).subscribe(data =>{
    console.log(data)
  if(data.id){
    let snackBarRef = this.snackbar.open('operation complete successfully!','OK', {
      duration: 3000,
      panelClass: ['green-snackbar']
    });
    

    
  }else{
    console.log("----------------------")
    console.log(data.message)
    
     
      let snackBarRef = this.snackbar.open(data.message,'OK', {
        duration: 3000,
        panelClass: ['red-snackbar']
      });
    
  }

},error=>{
if (error.code==409 ||error.status==406){
  let snackBarRef = this.snackbar.open('incorrect datas!','OK', {
    duration: 3000,
    panelClass: ['red-snackbar']
  });
}else{
  let snackBarRef = this.snackbar.open('Creation error verify your datas!','OK', {
    duration: 3000,
    panelClass: ['red-snackbar']
  });
}
}

);
 	 }
  ngOnInit() {
        this.medicamentService.getAllMedicament(this.user.id_pharma).subscribe(data =>{
			console.log(data)
		 this.medicaments =data[0];
     /**
      * eliminerr les élléments vides
      
     this.medicaments
     .forEach((medoc,index) => {
       if(!medoc.nom_medoc){
         this.medicaments.splice(index, 1)
       }
     })*/
     this.filteredOptions = this.filterControl.valueChanges.pipe(
      startWith(''),
      map((value: string) => {
          this.medicaments
              .forEach(medoc => {
               if(medoc.nom_medoc)
                medoc.show = medoc.nom_medoc.toLocaleLowerCase().includes(value.toLowerCase());
              });
          return this.medicaments;
      })
  );
	   }

	   );

  
  }

  onDrugChange(event){
    console.log(event.value)
    
    let medoc=this.medicaments.filter(medicament => medicament.id ===event.value)
    console.log(medoc)
    this.estimated_amount=medoc[0].last_price * this.Quantit_Sortie.value
    //console.log(medoc)
   // this.Prix_Lot.setValue( medoc[0].last_price)

  }

  

  estimate(event) {
    
    console.log(event.target.value)
    
    let medoc=this.medicaments.filter(medicament => medicament.id ===this.Medicament.value)
    console.log(medoc[0])
    this.estimated_amount=medoc[0].last_price * event.target.value
}
}
