import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'cdk-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
	isOpen: boolean = false;

  	//currentUser = null;
  	Hari="host";
  	

  	@Input() currentUser = null;
  	@HostListener('document:click', ['$event', '$event.target'])
  	onClick(event: MouseEvent, targetElement: HTMLElement) {
		 

    	if (!targetElement) {
     		return;
    	}

    	const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    	if (!clickedInside) {
      		this.isOpen = false;
    	}
  	}
  	
    
  	constructor(private elementRef: ElementRef,private router: Router,private userService:UserService) { }


  	ngOnInit() {
		this.currentUser=this.userService.daoGetUser();
		if(this.currentUser)this.currentUser.photoURL= 'assets/images/avatars/hari.jpg';
		  //this.currentUser=localStorage.getItem("user")
  	}
logout(){
	console.log('disconnect')
	localStorage.clear();
	this.router.navigate(['/login']);
	
}
}
