import { Component, OnInit } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'cdk-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent implements OnInit {
model = {name:"nyoumi", pwd:"azerty",number:"677777777777"};
  submitted = false;
 hide;
  onSubmit() { this.submitted = true; }
 
  newUser() { 
    this.model = {name:"nyoumi", pwd:"azerty",number:"677777777777"};
  }
  constructor() { }

  ngOnInit() {
  }

}
