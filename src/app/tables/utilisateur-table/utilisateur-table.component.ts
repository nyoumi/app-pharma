import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { ExampleDatabase, ExampleDataSource } from './helpers.data';
import { Observable } from 'rxjs';
//import { User } from '../../forms/template-driven-forms/user';
import { User } from '../../user';
import { UserService } from '../../user.service';
import {MatButtonModule,MatButton} from '@angular/material/button';

@Component({
  selector: 'app-utilisateur-table',
  templateUrl: './utilisateur-table.component.html',
  styleUrls: ['./utilisateur-table.component.scss']
})
export class UtilisateurTableComponent implements OnInit {
	public displayedColumns = ['userId', 'userName', 'firstName', 
	'userPhone','adresse','delete','edit'];
	public exampleDatabase = new ExampleDatabase();
	public dataSource: Array<User>;
  	public showFilterTableCode;
  	constructor(private userService:UserService) { }

  	ngOnInit() {
  		 this.userService.getAllUser().subscribe(data =>{
			   console.log(data)
			this.dataSource =data;
		  }

		  );
    }

}
