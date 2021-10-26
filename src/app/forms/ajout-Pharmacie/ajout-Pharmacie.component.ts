import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup, AbstractControl, AbstractControlOptions } from '@angular/forms';
import { PharmacieService } from '../../pharmacie.service';
import { Pharmacie } from '../../pharmacie';
import { EmailValidator } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute,Route,Router } from '@angular/router';

@Component({
  selector: 'cdk-ajout-Pharmacie',
  templateUrl: './ajout-Pharmacie.component.html',
  styleUrls: ['./ajout-Pharmacie.component.scss']
})
export class AjoutPharmacieComponent implements OnInit {
  public nomPharmacie: AbstractControl;
  public Email:AbstractControl;
  public tel:AbstractControl;
  public country:AbstractControl
  public ville:AbstractControl;
  public region:AbstractControl;
  public code_postal:AbstractControl;


  public profileForm:FormGroup;
  submitted = false;
  hide;
  pharmacie:any;
  action="ADD";
  constructor(public form: FormBuilder, private route: Router,
  public pharmacieService: PharmacieService,
  private snackbar:MatSnackBar) {   
    
      this.pharmacie =this.route.getCurrentNavigation().extras ;
      console.log(this.pharmacie);
    
    this.profileForm = this.form.group({
      nomPharmacie:['', {
        validators: [ Validators.required], 
        updateOn: 'blur'
      }],
      Email:['', {
        validators: [ Validators.required], 
        updateOn: 'blur'
      }],
      tel:['', {
        validators: [ Validators.required], 
        updateOn: 'blur'
      }],
      country:['', {
        validators: [ Validators.required], 
        updateOn: 'blur'
      }],
      region:['', {
        validators: [ Validators.required], 
        updateOn: 'blur'
      }],
      ville:['', {
        validators: [ Validators.required], 
        updateOn: 'blur'
      }],
      code_postal:['', {
        validators: [ Validators.required], 
        updateOn: 'blur'
      }],
      
        });
        this.nomPharmacie=this.profileForm.controls['nomPharmacie'];
        this.Email=this.profileForm.controls['Email'];
        this.tel=this.profileForm.controls['tel'];
        this.country=this.profileForm.controls['country'];
        this.region=this.profileForm.controls['region'];
        this.ville=this.profileForm.controls['ville'];
        this.code_postal=this.profileForm.controls['code_postal'];


  }
  /* get number() {
  return this.profileForm.get('number');
}
get Code_cip(){
  return this.profileForm.get('Code_cip');
}
  get username() {
  return this.profileForm.get('username');
}
 get email() {
  return this.profileForm.get('email');
} */
  // checkUserExists() {
    
       
  //         this.profileForm.value.userName.setErrors({ userExists: `User Name  already exists` });
       
  // }
 onSubmit() { 
   let pharmacie={
     id:this.pharmacie.id || null,
    nom_phar: this.nomPharmacie.value.trim(),
    email_phar: this.Email.value.trim(),
    tel_phar: this.tel.value.trim(),
    adresse: {
      ville:this.ville.value.trim(),
      pays:this.country.value.trim(),
      region:this.region.value.trim(),
      code_postal:this.code_postal.value.trim()
    },
   
     
   }
   console.log(pharmacie) 
    this.pharmacieService.createPharmacie(pharmacie).subscribe(data =>{
      console.log(data)
      if(data.id ){
        let message=""
        if(this.pharmacie.id){
          message='Drugstore updated successfully!';
        }else{
           message='Drugstore created successfully!';
        }
        let snackBarRef = this.snackbar.open(message,'OK', {
          duration: 3000,
          panelClass: ['green-snackbar']
        });
  
        
      }else{
        if (data.code==409 ||data.status==406){
          let snackBarRef = this.snackbar.open(' already exist!','OK', {
            duration: 3000,
            panelClass: ['red-snackbar']
          });
        }
      }
   
   },error=>{
    if (error.code==409 ||error.status==406){
      let snackBarRef = this.snackbar.open('already exist!','OK', {
        duration: 3000,
        panelClass: ['red-snackbar']
      });
    }else{
      let snackBarRef = this.snackbar.open('Operation error verify your datas!','OK', {
        duration: 3000,
        panelClass: ['red-snackbar']
      });
    }
   }
  
   );
 	 }
  ngOnInit() {
    
   if (this.pharmacie.id){
         this.action="EDIT";

        this.nomPharmacie.setValue( this.pharmacie.nom_phar);
        this.Email.setValue( this.pharmacie.email_phar);
        this.tel.setValue( this.pharmacie.tel_phar);
        this.country.setValue( this.pharmacie.adresse?.pays);
        this.region.setValue( this.pharmacie.adresse?.region);
        this.ville.setValue( this.pharmacie.adresse?.ville);
        this.code_postal.setValue( this.pharmacie.adresse?.code_postal);

   }


  }

}
