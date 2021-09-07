import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { EmailValidator } from '@angular/forms';
import { User } from '../../user';
import { UserService } from '../../user.service';
import {MatSnackBar,MatSnackBarModule,MatSnackBarConfig} from '@angular/material/snack-bar';
import { ActivatedRoute,Route,Router } from '@angular/router';
import { LotService } from '../../lot.service';
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
  constructor(public form: FormBuilder,private route: Router,
     public lotService:LotService,private snackbar:MatSnackBar) { 
    this.profileForm = this.form.group({
      Numero_lot:['', {
            validators: [Validators.required], 
            updateOn: 'blur'
          }],
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
        this.Pharmacie= this.profileForm.controls['Pharmacie'];
        this.Utilsateur= this.profileForm.controls['Utilsateur'];
       

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
createLot(){
  
  this.lot={

    Numero_lot: this.Numero_lot.value,
    Date_Entree_Lot:this.Date_Entree_Lot.value, 
    Date_Peremtion_Lot: this.Date_Peremtion_Lot.value,
    Quantite_Depart:this.Quantite_Depart.value,
    Quantite_Recente:this.Quantite_Recente.value,
    Prix_Lot:this.Prix_Lot.value,
    Medicament:this.Medicament.value,
   Pharmacie:this.Pharmacie.value,
    Utilsateur:this.Utilsateur.value,
    
  }
  console.log(this.lot)
  this.lotService.createLot(this.lot).subscribe(data =>{
    console.log(data)
    if(data.id){
      let snackBarRef = this.snackbar.open('Lot created successfully!','OK', {
        duration: 3000
      });

      this.route.navigate(['tables/lot']);
    }
 
 }

 );

}
  // checkUserExists() {
    
       
  //         this.profileForm.value.userName.setErrors({ userExists: `User Name  already exists` });
       
  // }
/*  onSubmit() { 
 	console.log('');
 	this.submitted = true; }
  ngOnInit() {
    if(this.lot){
      this.Numero_lot.setValue(this.lot.Numero_lot)
      this.firstname.setValue(this.user.firstname)
      this.userphone.setValue(this.user.userphone)
      this.email.setValue(this.user.email)
      this.pays.setValue(this.user.adresse.pays)
      this.ville.setValue(this.user.adresse.ville)

    }
  } */

}
