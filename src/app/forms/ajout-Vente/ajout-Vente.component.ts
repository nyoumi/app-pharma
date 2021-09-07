import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup, AbstractControl, AbstractControlOptions } from '@angular/forms';
import { PharmacieService } from '../../pharmacie.service';
import { EmailValidator } from '@angular/forms';
import { VenteService } from '../../vente.service';
@Component({
  selector: 'cdk-ajout-Vente',
  templateUrl: './ajout-Vente.component.html',
  styleUrls: ['./ajout-Vente.component.scss']
})
export class AjoutVenteComponent implements OnInit {
  public Date_Vente: AbstractControl;
  public Quantit_Sortie:AbstractControl;
  


  public profileForm:FormGroup;
  submitted = false;
  hide;
  vente: {};
  constructor(public form: FormBuilder, public venteService: VenteService) { 
    this.profileForm = this.form.group({
      Date_Vente:['', {
        validators: [ Validators.required], 
        updateOn: 'blur'
      }],
      Quantit_Sortie:['', {
        validators: [ Validators.required], 
        updateOn: 'blur'
      }],
     });
        this.Date_Vente=this.profileForm.controls['Date_Vente'];
        this.Quantit_Sortie=this.profileForm.controls['Quantit_Sortie'];
       

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
   this.vente={
    Date_Vente: this.Date_Vente.value,
    Quantit_Sortie: this.Quantit_Sortie.value,
    
   }
   console.log(this.vente) 
    this.venteService.createVente(this.vente).subscribe(data =>{
      console.log(data)
   
   }
  
   );
 	 }
  ngOnInit() {
  }

}
