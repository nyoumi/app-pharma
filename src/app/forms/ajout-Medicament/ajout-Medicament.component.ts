import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup, AbstractControl } from '@angular/forms';
import { EmailValidator } from '@angular/forms';
import { MedicamentService } from '../../medicament.service';
import { PharmacieService } from '../../pharmacie.service';
@Component({
  selector: 'cdk-ajout-Medicament',
  templateUrl: './ajout-Medicament.component.html',
  styleUrls: ['./ajout-Medicament.component.scss']
})
export class AjoutMedicamentComponent implements OnInit {
  private username: AbstractControl;
  private firstname: AbstractControl;
  private password: AbstractControl;
  private confirmpassword: AbstractControl;
  private email: AbstractControl;
  private userphone: AbstractControl;
  private ville: AbstractControl;
  private pays: AbstractControl;
  public profileForm:FormGroup;
  submitted = false;
  hide;
  Code_cip: any;
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
            validators: [Validators.minLength(10)], updateOn: 'blur'
          }],
          dosage_medoc:['', 
            Validators.required
          ],
          notice_medoc:[ '', {
            validators: [Validators.minLength(10)], updateOn: 'blur'
          }],
          conditionnement_medoc:[ '', {
            validators: [Validators.minLength(10)], updateOn: 'blur'
          }],
          categories:[ '', {
            validators: [Validators.minLength(10)], updateOn: 'blur'
          }],
          tag:[ '', {
            validators: [Validators.minLength(10)], updateOn: 'blur'
          }]
        });
        this.Code_cip= this.profileForm.controls['Code_cip'];
        this.firstname= this.profileForm.controls['firstname'];
        this.email= this.profileForm.controls['email'];
        this.password= this.profileForm.controls['password'];
        this.confirmpassword= this.profileForm.controls['confirmpassword'];
        this.userphone= this.profileForm.controls['userphone'];
        this.ville= this.profileForm.controls['ville'];
        this.pays= this.profileForm.controls['pays'];

  }
  

  // checkUserExists() {
    
       
  //         this.profileForm.value.userName.setErrors({ userExists: `User Name  already exists` });
       
  // }
 onSubmit() { 
 	console.log('');
 	this.submitted = true; }
  ngOnInit() {
  }

}
