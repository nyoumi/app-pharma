import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { EmailValidator } from '@angular/forms';
import { User } from '../../user';
import { UserService } from '../../user.service';
import {MatSnackBar,MatSnackBarModule,MatSnackBarConfig} from '@angular/material/snack-bar';
import { ActivatedRoute,Route,Router } from '@angular/router';
import { MedicamentService } from '../../medicament.service';
import { PharmacieService } from '../../pharmacie.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

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
  private pharmacie:AbstractControl;
  private role:AbstractControl;
  private sex:AbstractControl;

  submitted = false;
  hide=true;
  user:  User ;
  pharmacies: any;
  selected_role: any;
  currentUSer: User;
  constructor(public form: FormBuilder,private route: Router,
    private pharmacieService:PharmacieService,
     private userService:UserService,private snackbar:MatSnackBar) { 
       this.currentUSer=userService.daoGetUser();
      this.user =this.route.getCurrentNavigation().extras as User;
      console.log(this.user);
    this.profileForm = this.form.group({
          username:['', {
            validators: [Validators.required], 
             
          }],
          firstname:['', {
            validators: [Validators.required], 
             
          }],
          email:['',{
            validators:[Validators.required,Validators.email], 
             
          } 
           
          ],
          password:['', {
            validators: [Validators.minLength(6),Validators.required], 
             

          }],
          confirmpassword:['', {
            validators: [Validators.minLength(6),Validators.required], 
             
          }],
          userphone:['', {
            validators: [Validators.required], 
             
          }],
          ville:['', {
             
          }],
         pays:['', {
             
          }],
          pharmacie:['', {
             
          }],
          role:['', {
            validators: [Validators.required], 
             
          }],
          sex:['', {
            validators: [Validators.required], 
             
          }]
          
         
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
        this.pharmacie= this.profileForm.controls['pharmacie'];
        this.role= this.profileForm.controls['role'];
        this.sex=this.profileForm.controls['sex']

  }
  
createUser(){
  
  let user:User={

    id:this.user.id || null,
    username: this.username.value.trim() || this.user.username,
    firstname:this.firstname.value.trim() || this.user.firstname, 
    password: this.password.value || this.user.password,
    email:this.email.value ||  this.user.email,
    userphone:this.userphone.value.trim()  ||  this.user.userphone,
    id_pharma:this.pharmacie.value,
    roles:[this.role.value] || this.user.roles,
    sex:this.sex.value ||  this.user.sex,
    adresse:{
      ville:this.ville.value.trim(),
      pays:this.pays.value.trim(),
    }
  }
  if(! (user.roles[0].trim().length>0)){
    user.roles=this.user.roles
  }

 this.userService.createUser(user).subscribe(data =>{
  console.log(data)
  if(data.id){
    let snackBarRef = this.snackbar.open('User created successfully!','OK', {
      duration: 3000,
      panelClass: ['green-snackbar']
    });
    this.route.navigate(['auth/tables/utilisateur']);

    
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
    
    this.pharmacieService.getAllPharmacie().subscribe(data =>{
			console.log(data)
		 this.pharmacies =data;
	   }

	   );
    if(this.user.id){
      this.username.setValue(this.user.username)
      this.firstname.setValue(this.user.firstname)
      this.userphone.setValue(this.user.userphone)
      this.email.setValue(this.user.email)
      this.pays.setValue(this.user.adresse.pays)
      this.ville.setValue(this.user.adresse.ville)
      this.sex.setValue(this.user.sex)

    }
  }
  changeRole(role){
    console.log(role.value)
    this.selected_role=role.value;
  }
}
