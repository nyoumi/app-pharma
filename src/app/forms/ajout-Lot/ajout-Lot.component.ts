import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { EmailValidator } from '@angular/forms';
import { User } from '../../user';
import { UserService } from '../../user.service';
import {MatSnackBar,MatSnackBarModule,MatSnackBarConfig} from '@angular/material/snack-bar';
import { ActivatedRoute,Route,Router } from '@angular/router';
import { LotService } from '../../lot.service';
import { MedicamentService } from '../../medicament.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'cdk-ajout-Lot',
  templateUrl: './ajout-Lot.component.html',
  styleUrls: ['./ajout-Lot.component.scss']
})
export class AjoutLotComponent implements OnInit {
  public profileForm:FormGroup; 
  
  private Numero_lot: AbstractControl;
  private Date_Entree_Lot: AbstractControl;
  private Date_Peremtion_Lot: AbstractControl;
  private Quantite_Recente: AbstractControl;
  private Quantite_Depart: AbstractControl;
  private Prix_Lot: AbstractControl;
  private Medicament: AbstractControl;
  private Pharmacie: AbstractControl;
  private Utilsateur:AbstractControl;
  submitted = false;
  hide=true;
  lot: {};
  private user:  User ;
  medicaments: any;
  constructor(public form: FormBuilder,private route: Router,private medicamentService:MedicamentService,
     public lotService:LotService,private snackbar:MatSnackBar) { 
       this.user=JSON.parse(localStorage.getItem("user"));
    this.profileForm = this.form.group({
          Numero_lot:[''],
          Date_Entree_Lot:['', {
            validators: [Validators.required], 
            updateOn: 'blur'
          }],
          Date_Peremtion_Lot:['', 
            Validators.required
          ],
          Quantite_Recente:['', {
            validators: [Validators.required], 
            updateOn: 'blur'

          }],
          Quantite_Depart:['', {
            validators: [Validators.required], 
            updateOn: 'blur'
          }],
          Prix_Lot:['', {
            validators: [Validators.required], 
            updateOn: 'blur'
          }],
          Medicament:['', {
            validators: [Validators.required], 
            updateOn: 'blur'
          }],
          Pharmacie:['', {
            validators: [Validators.required], 
            updateOn: 'blur'
          }],
          Utilsateur:['', {
            validators: [Validators.required], 
            updateOn: 'blur'
          }],
          
         
          /* pwd:['', 
            Validators.required
          ] */

        });
        this.Numero_lot= this.profileForm.controls['Numero_lot'];
        this.Date_Entree_Lot= this.profileForm.controls['Date_Entree_Lot'];
        this.Date_Peremtion_Lot= this.profileForm.controls['Date_Peremtion_Lot'];
        this.Quantite_Depart= this.profileForm.controls['Quantite_Depart'];
        this.Quantite_Recente= this.profileForm.controls['Quantite_Recente'];
        this.Prix_Lot= this.profileForm.controls['Prix_Lot'];
        this.Medicament= this.profileForm.controls['Medicament'];
       

  }
  ngOnInit(): void {
    this.medicamentService.getAllMedicament().subscribe(data =>{
			console.log(data)
		 this.medicaments =data;
	   }

	   );
  }
  
createLot(){
  
  this.lot={

    num_lot: this.Numero_lot.value,
    datein_lot:this.Date_Entree_Lot.value, 
    deteperem_lot: this.Date_Peremtion_Lot.value,
    qtedepart_lot:this.Quantite_Depart.value,
    prix_lot:this.Prix_Lot.value,
    id_medicament:this.Medicament.value,
    id_pharmacie:this.user.id_pharma,
    id_utilisateur:this.user.id,
    
  }
  console.log(this.lot)
 

 this.lotService.createLot(this.lot).subscribe(data =>{
  console.log(data)
  if(data.id){
    let snackBarRef = this.snackbar.open('Batch created successfully!','OK', {
      duration: 3000,
      panelClass: ['green-snackbar']
    });

    
  }else{
    if (data.code==409 ||data.status==406){
      let snackBarRef = this.snackbar.open(' already exist!','OK', {
        duration: 3000,
        panelClass: ['red-snackbar']
      });
      this.profileForm.reset()
    }
  }

},error=>{
  let snackBarRef2 = this.snackbar.open('Creation error verify your datas','OK', {
    duration: 3000,
    panelClass: ['red-snackbar']
  });
if (error.code==409 ||error.status==406){
  let snackBarRef = this.snackbar.open('already exist!','OK', {
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

onDrugChange(event){
  console.log(event.value)
  let medoc=this.medicaments.filter(medicament => medicament.id === event.value)
  console.log(medoc)
  this.Prix_Lot.setValue( medoc[0].last_price)

}
    


}
