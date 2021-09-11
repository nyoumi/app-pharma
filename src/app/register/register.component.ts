import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from '../../core/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup;
  formErrors = {
    'username': '',
    'password': '',
    'firstname':'',
    'email':'',
    'userphone':''

  };
  validationMessages = {
    'username': {
      'required': 'Please enter your username',
    },
    'email': {
      'required': 'Please enter your email',
    },
    'password': {
      'required': 'please enter your password',
      'pattern': 'The password must contain numbers and letters',
      'minlength': 'Please enter more than 4 characters',
      'maxlength': 'Please enter less than 25 characters',
    }
  };
  data: any;

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
      'firstname': ['', [
        Validators.required
      ]
      ],
      'email': ['', [
        Validators.required
      ]
      ],
      'userphone': ['', [
        Validators.required
      ]
      ],
      'sex': ['', [
        Validators.required
      ]
      ],
      'confirm_password': ['', [
        Validators.minLength(6),
        Validators.maxLength(25)
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
  register() {
    console.log(this.data)
    this.userService.register(this.data).subscribe(data =>{
      console.log(data)
      if(data.id){
        let snackBarRef = this.snackbar.open('registered successfully! please login','OK', {
          duration: 3000,
          panelClass: ['green-snackbar']
        });
        localStorage.setItem("user",JSON.stringify(data.utilisateur));
        localStorage.setItem("token",data.jwtToken);
        
  
        this.router.navigate(['/login']);
      }else{
        let snackBarRef = this.snackbar.open('registration error! Verify your datas','OK', {
          duration: 3000,
          panelClass: ['red-snackbar']
        });
      }
   
   },error=>{
     console.log(error)
     let snackBarRef = this.snackbar.open('Authentication error! Try again','OK', {
          duration: 3000
        });
   })

    //this.router.navigate(['/']);
  }
}


