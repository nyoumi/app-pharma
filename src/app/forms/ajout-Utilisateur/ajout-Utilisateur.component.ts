import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { EmailValidator } from '@angular/forms';
import { User } from '../../user';
import { UserService } from '../../user.service';
@Component({
  selector: 'cdk-ajout-Utilisateur',
  templateUrl: './ajout-Utilisateur.component.html',
  styleUrls: ['./ajout-Utilisateur.component.scss']
})
export class AjoutUtilisateurComponent implements OnInit {
  public profileForm:FormGroup;
  
  private username: AbstractControl;
  private firstname: AbstractControl;
  private password: AbstractControl;
  private confirmpassword: AbstractControl;
  private email: AbstractControl;
  private userphone: AbstractControl;
  private ville: AbstractControl;
  private pays: AbstractControl;
  submitted = false;
  hide;
  private user:  User ;
  constructor(public form: FormBuilder, private userService:UserService) { 
    this.profileForm = this.form.group({
          username:['', {
            validators: [Validators.required], 
            updateOn: 'blur'
          }],
          firstname:['', {
            validators: [Validators.required], 
            updateOn: 'blur'
          }],
          email:['', 
            Validators.required,Validators.email
          ],
          password:['', {
            validators: [Validators.minLength(6),Validators.required], 
            updateOn: 'blur'

          }],
          confirmpassword:['', {
            validators: [Validators.minLength(6),Validators.required], 
            updateOn: 'blur'
          }],
          userphone:['', {
            validators: [Validators.required], 
            updateOn: 'blur'
          }],
          ville:['', {
            validators: [], 
            updateOn: 'blur'
          }],
         pays:['', {
            validators: [], 
            updateOn: 'blur'
          }],
          
         
          /* pwd:['', 
            Validators.required
          ] */

        });
        this.username= this.profileForm.controls['username'];
        this.firstname= this.profileForm.controls['firstname'];
        this.email= this.profileForm.controls['email'];
        this.password= this.profileForm.controls['password'];
        this.confirmpassword= this.profileForm.controls['confirmpassword'];
        this.userphone= this.profileForm.controls['userphone'];
        this.ville= this.profileForm.controls['ville'];
        this.pays= this.profileForm.controls['pays'];
       

  }
  
createUser(){
  
  this.user={

    username: this.username.value,
    firstname:this.firstname.value, 
    password: this.password.value,
    email:this.email.value,
    userphone:this.userphone.value,
    adresse:{
      ville:this.ville.value,
      pays:this.pays.value,
    }
  }
  console.log(this.user)
  this.userService.createUser(this.user).subscribe(data =>{
    console.log(data)
 
 }

 );

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
