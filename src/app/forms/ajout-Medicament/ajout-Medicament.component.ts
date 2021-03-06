import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup, AbstractControl, FormControl } from '@angular/forms';
import { EmailValidator } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MedicamentService } from '../../medicament.service';
import { PharmacieService } from '../../pharmacie.service';
import { UserService } from '../../user.service';
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
  hide: true;

  medicament:any ;
 
  constructor(public form: FormBuilder,private snackbar:MatSnackBar,private route: Router,
     private medicamentService: MedicamentService,private userService:UserService) { 
      this.medicament =this.route.getCurrentNavigation().extras  ;
      console.log(this.medicament);

    this.profileForm = this.form.group({
      code_cip:['', {
            validators: [ Validators.required], 
            updateOn: 'blur'
          }],
          nom_medoc:['',{
            validators: [ Validators.required], 
            updateOn: 'blur'
          }
           
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
    console.log(this.categories.value)
  
    this.medicament={
    
      id:this.medicament.id||null,
  
      code_cip: this.code_cip.value.trim(),
      nom_medoc: this.nom_medoc.value.trim(),
      forme: this.forme.value.trim(),
      dosage_medoc: this.dosage_medoc.value.trim(),
      notice_medoc: this.notice_medoc.value.trim(),
      conditionnement_medoc: this.conditionnement_medoc.value.trim(),
      marque_medoc: this.marque_medoc.value.trim(),
      categories: this.categories.value.trim().split(","),
      tag: this.tag.value.trim().split(","),
      id_pharmacie:this.userService.daoGetUser().id_pharma || null,
      added_by:this.userService.daoGetUser().id
      
  
      
    }

    
    console.log(this.medicament) 
    this.medicamentService.createMedicament(this.medicament).subscribe(data =>{
      console.log(data)
      if(data.id){
        let snackBarRef = this.snackbar.open('Drug created successfully!','OK', {
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
  

  // checkUserExists() {
    
       
  //         this.profileForm.value.userName.setErrors({ userExists: `User Name  already exists` });
       
  // }
 
  ngOnInit() {
    if(this.medicament.id){
      
      this.code_cip.setValue( this.medicament.code_cip);
      this.nom_medoc.setValue(this.medicament.nom_medoc);
      this.forme.setValue(this.medicament.forme);
      this.dosage_medoc.setValue(this.medicament.dosage_medoc);
      this.notice_medoc.setValue(this.medicament.notice_medoc);
      this.conditionnement_medoc.setValue(this.medicament.conditionnement_medoc);
      this.marque_medoc.setValue(this.medicament.marque_medoc);
      this.categories.setValue(this.medicament.categories.toString());
      this.tag.setValue(this.medicament.tag.toString());
    }
  }

}
