import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup } from '@angular/forms';
import { EmailValidator } from '@angular/forms';
@Component({
  selector: 'cdk-ajout-Medicament',
  templateUrl: './ajout-Medicament.component.html',
  styleUrls: ['./ajout-Medicament.component.scss']
})
export class AjoutMedicamentComponent implements OnInit {
  public profileForm:FormGroup;
  submitted = false;
  hide;
  constructor(public form: FormBuilder) { 
    this.profileForm = this.form.group({
          username:['', {
            validators: [Validators.minLength(6)], 
            updateOn: 'blur'
          }],
          email:['', 
            Validators.required
          ],
          number:[ '', {
            validators: [Validators.minLength(10)], updateOn: 'blur'
          }],
          pwd:['', 
            Validators.required
          ]
        });

  }
  get number() {
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
