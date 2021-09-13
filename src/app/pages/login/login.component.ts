import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from '../../core/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  formErrors = {
    'username': '',
    'password': ''
  };
  validationMessages = {
    'username': {
      'required': 'Please enter your username',
    },
    'password': {
      'required': 'please enter your password',
      'pattern': 'The password must contain numbers and letters',
      'minlength': 'Please enter more than 4 characters',
      'maxlength': 'Please enter less than 25 characters',
    }
  };
  data: any;
  working: boolean;

  constructor(private router: Router,private userService:UserService,
    private snackbar:MatSnackBar,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.fb.group({
      'username': ['', [
        Validators.required
      ]
      ],
      'password': ['', [
        //Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25)
      ]
      ],
    });

    this.userForm.valueChanges.subscribe(data => {
      this.onValueChanged(data)
      console.log(data)
    });
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    this.data=data;
    if (!this.userForm) {
      return;
    }
    const form = this.userForm;
    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
  login() {
    this.working=true;
    console.log(this.data)
    this.userService.authenticate(this.data).subscribe(data =>{
      this.working=false;
      console.log(data)
      if(data.jwtToken){
        let snackBarRef = this.snackbar.open('Authenticated successfully! You are redirected to dashboard','OK', {
          duration: 3000,
          panelClass: ['green-snackbar']
        });
        localStorage.setItem("user",JSON.stringify(data.utilisateur));
        localStorage.setItem("token",data.jwtToken);
        
  
        this.router.navigate(['/auth/dashboard']);
      }else{
        let snackBarRef = this.snackbar.open('Authentication error! Username or password incorrect','OK', {
          duration: 3000,
          panelClass: ['red-snackbar']
        });
      }
   
   },error=>{
    this.working=false;
     console.log(error)
     let snackBarRef = this.snackbar.open('Authentication error! Try again','OK', {
          duration: 3000
        });
   })

    //this.router.navigate(['/']);
  }
}

