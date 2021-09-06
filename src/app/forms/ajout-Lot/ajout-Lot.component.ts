import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup, AbstractControl, FormControl } from '@angular/forms';
import { EmailValidator } from '@angular/forms';
import { LotService } from '../../lot.service';
import { MedicamentService } from '../../medicament.service';
import { PharmacieService } from '../../pharmacie.service';
@Component({
  selector: 'cdk-ajout-Lot',
  templateUrl: './ajout-Lot.component.html',
  styleUrls: ['./ajout-Lot.component.scss']
})


export class AjoutLotComponent implements OnInit {
public Numero_lot: AbstractControl;
public Date_Entree_Lot: AbstractControl;
public Date_Peremtion_Lot: AbstractControl;
public Quantite_Recente: AbstractControl;
public Quantite_Depart: AbstractControl;
public Prix_Lot: AbstractControl;
public Medicament: AbstractControl; 
public Pharmacie: AbstractControl;
public Utilsateur: AbstractControl;

  public profileForm:FormGroup;
  submitted = false;
  hide;
  lot: { Numero_lot: any; Date_Entree_Lot: any; Date_Peremtion_Lot: any; Quantite_Recente: any; Quantite_Depart: any; Prix_Lot: any; Medicament: any; Pharmacie: any; Utilsateur: any; };
  //lot: any;
 
 
  constructor(public form: FormBuilder, public lotService: LotService) { 
    this.profileForm = this.form.group({
      Numero_lot:['', {
            validators: [ Validators.required], 
            updateOn: 'blur'
          }],
          Date_Entree_Lot:['', 
            Validators.required
          ],
          Date_Peremtion_Lot:[ '', {
            validators: [Validators.required], updateOn: 'blur'
          }],
          Quantite_Recente:['', 
            Validators.required
          ],
          Quantite_Depart:[ '', {
            validators: [Validators.required], updateOn: 'blur'
          }],
          Prix_Lot:[ '', {
            validators: [Validators.required], updateOn: 'blur'
          }],
          Medicament:[ '', {
            validators: [Validators.required], updateOn: 'blur'
          }],
          Pharmacie:[ '', {
            validators: [], updateOn: 'blur'
          }],
          Utilsateur:[ '', {
            validators: [], updateOn: 'blur'
          }]
        });

   


        this.Numero_lot= this.profileForm.controls['Numero_lot'];
        this.Date_Entree_Lot= this.profileForm.controls['Date_Entree_Lot'];
        this.Date_Peremtion_Lot= this.profileForm.controls['Date_Peremtion_Lot'];
        this.Quantite_Recente= this.profileForm.controls['Quantite_Recente'];
        this.Quantite_Depart= this.profileForm.controls['Quantite_Depart'];
        this.Prix_Lot= this.profileForm.controls['Prix_Lot'];
        this.Medicament= this.profileForm.controls['Medicament'];
        this.Pharmacie= this.profileForm.controls['Pharmacie'];
        this.Utilsateur= this.profileForm.controls['Utilsateur'];



  }

  onSubmit(){
  
    this.lot={
  
      Numero_lot: this.Numero_lot.value,
      Date_Entree_Lot: this.Date_Entree_Lot.value,
      Date_Peremtion_Lot: this.Date_Peremtion_Lot.value,
      Quantite_Recente: this.Quantite_Recente.value,
      Quantite_Depart: this.Quantite_Depart.value,
      Prix_Lot: this.Prix_Lot.value,
      Medicament: this.Medicament.value,
      Pharmacie: this.Pharmacie.value,
      Utilsateur: this.Utilsateur.value,
      
  
      
    }
    console.log(this.lot) 
    this.lotService.createLot(this.lot).subscribe(data =>{
      console.log(data)
   
   }
  
   );
  
  }
  

  // checkUserExists() {
    
       
  //         this.profileForm.value.userName.setErrors({ userExists: `User Name  already exists` });
       
  // }
 
  ngOnInit() {
  }

}
