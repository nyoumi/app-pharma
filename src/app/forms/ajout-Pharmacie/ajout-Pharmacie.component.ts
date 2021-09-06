import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup, AbstractControl, AbstractControlOptions } from '@angular/forms';
import { PharmacieService } from '../../pharmacie.service';
import { EmailValidator } from '@angular/forms';
@Component({
  selector: 'cdk-ajout-Pharmacie',
  templateUrl: './ajout-Pharmacie.component.html',
  styleUrls: ['./ajout-pharmacie.component.scss']
})
export class AjoutPharmacieComponent implements OnInit {
  public nomPharmacie: AbstractControl;
  public Email:AbstractControl;
  public tel:AbstractControl;
  public statutPharmacie:AbstractControl;
  public adresse:AbstractControl


  public profileForm:FormGroup;
  submitted = false;
  hide;
  phamarcie: {};
  constructor(public form: FormBuilder, public pharmacieService: PharmacieService) { 
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
      statutPharmacie:['', {
        validators: [ Validators.required], 
        updateOn: 'blur'
      }],
      adresse:['', {
        validators: [ Validators.required], 
        updateOn: 'blur'
      }],
      
        });
        this.nomPharmacie=this.profileForm.controls['nomPharmacie'];
        this.Email=this.profileForm.controls['Email'];
        this.tel=this.profileForm.controls['tel'];
        this.statutPharmacie=this.profileForm.controls['statutPharmacie'];
        this.adresse=this.profileForm.controls['adresse'];

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
    nomPharmacie: this.nomPharmacie.value,
    Email: this.Email.value,
    tel: this.tel.value,
    statutPharmacie: this.statutPharmacie.value,
    adresse: this.adresse.value,
   
     
   }
   console.log(this.phamarcie) 
    this.pharmacieService.createPharmacie(this.phamarcie).subscribe(data =>{
      console.log(data)
   
   }
  
   );
 	 }
  ngOnInit() {
  }

}
