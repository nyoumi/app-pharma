import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup, AbstractControl, AbstractControlOptions } from '@angular/forms';
import { PharmacieService } from '../../pharmacie.service';
import { EmailValidator } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  phamarcie: {};
  constructor(public form: FormBuilder, public pharmacieService: PharmacieService,private snackbar:MatSnackBar) { 
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
   this.phamarcie={
    nom_phar: this.nomPharmacie.value,
    email_phar: this.Email.value,
    tel_phar: this.tel.value,
    adresse: {
      ville:this.ville.value,
      pays:this.country.value,
      region:this.region.value,
      code_postal:this.code_postal.value
    },
   
     
   }
   console.log(this.phamarcie) 
    this.pharmacieService.createPharmacie(this.phamarcie).subscribe(data =>{
      console.log(data)
      if(data.id){
        let snackBarRef = this.snackbar.open('Drugstore created successfully!','OK', {
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
      let snackBarRef = this.snackbar.open('Creation error verify your datas!','OK', {
        duration: 3000,
        panelClass: ['red-snackbar']
      });
    }
   }
  
   );
 	 }
  ngOnInit() {
    
   if (this.phamarcie){
    this.nomPharmacie.setValue( this.phamarcie);
    this.Email.setValue( this.phamarcie);
    this.tel.setValue( this.phamarcie);
    this.country.setValue( this.phamarcie);
    this.region.setValue( this.phamarcie);
    this.ville.setValue( this.phamarcie);
    this.code_postal.setValue( this.phamarcie);

   }


  }

}
