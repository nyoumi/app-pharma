import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cdk-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent implements OnInit {
//model = new User(18, 'User','',8086824175);
  submitted = false;
 hide;
  onSubmit() { this.submitted = true; }
 
//  newUser() {
   // this.model = new User(42, '',' ' , );
 // }
  constructor() { }

  ngOnInit() {
  }

}
