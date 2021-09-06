import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup, AbstractControl, FormControl } from '@angular/forms';
import { EmailValidator } from '@angular/forms';
import { MedicamentService } from '../../medicament.service';
import { PharmacieService } from '../../pharmacie.service';
@Component({
  selector: 'cdk-ajout-Medicament',
  templateUrl: './ajout-Medicament.component.html',
  styleUrls: ['./ajout-Medicament.component.scss']
})


export class AjoutMedicamentComponent implements OnInit {
  private code_cip: AbstractControl;
  private nom_medoc: AbstractControl;
  private forme: AbstractControl;
  private dosage_medoc: AbstractControl;
  private notice_medoc: AbstractControl;
  private conditionnement_medoc: AbstractControl;
  private marque_medoc: AbstractControl; 
  private categories: AbstractControl;
  private tag: AbstractControl;

  public profileForm:FormGroup;
  submitted = false;
  hide;
  medicament:any ;
 
  constructor(public form: FormBuilder, private medicamentService: MedicamentService) { 
    this.profileForm = this.form.group({
      code_cip:['', {
            validators: [ Validators.required], 
            updateOn: 'blur'
          }],
          nom_medoc:['', 
            Validators.required
          ],
          forme:[ '', {
            validators: [Validators.required], updateOn: 'blur'
          }],
          dosage_medoc:['', 
            Validators.required
          ],
          notice_medoc:[ '', {
            validators: [Validators.required], updateOn: 'blur'
          }],
          marque_medoc:[ '', {
            validators: [Validators.required], updateOn: 'blur'
          }],
          conditionnement_medoc:[ '', {
            validators: [Validators.required], updateOn: 'blur'
          }],
          categories:[ '', {
            validators: [], updateOn: 'blur'
          }],
          tag:[ '', {
            validators: [], updateOn: 'blur'
          }]
        });

   


        this.code_cip= this.profileForm.controls['code_cip'];
        this.nom_medoc= this.profileForm.controls['nom_medoc'];
        this.forme= this.profileForm.controls['forme'];
        this.dosage_medoc= this.profileForm.controls['dosage_medoc'];
        this.notice_medoc= this.profileForm.controls['notice_medoc'];
        this.conditionnement_medoc= this.profileForm.controls['conditionnement_medoc'];
        this.marque_medoc= this.profileForm.controls['marque_medoc'];
        this.categories= this.profileForm.controls['categories'];
        this.tag= this.profileForm.controls['tag'];



  }

  onSubmit(){
  
    this.medicament={
  
      code_cip: this.code_cip.value,
      nom_medoc: this.nom_medoc.value,
      forme: this.forme.value,
      dosage_medoc: this.dosage_medoc.value,
      notice_medoc: this.notice_medoc.value,
      conditionnement_medoc: this.conditionnement_medoc.value,
      marque_medoc: this.marque_medoc.value,
      categories: this.categories.value,
      tag: this.tag.value,
      
  
      
    }
    console.log(this.medicament) 
    this.medicamentService.createMedicament(this.medicament).subscribe(data =>{
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
