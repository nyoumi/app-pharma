import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	checked = false;
    indeterminate = false;
  constructor() { }

  ngOnInit() {
  }
  employees = [
				{select: 'Hassan', position: 'Full stack developer'},
				{select: 'Paul', position: 'Full stack developer'},
				{select: 'Jullien', position: 'Full stack developer'},
				{select: 'Germin', position: 'Full stack developer'},
				{select: 'Bouba', position: 'Full stack developer'},
				{select: 'Rodrigue', position: 'Full stack developer'},
			];
}
