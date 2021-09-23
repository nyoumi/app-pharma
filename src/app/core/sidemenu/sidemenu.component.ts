import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../user.service';
import { menus } from './menu-element';

@Component({
  selector: 'cdk-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

    @Input() iconOnly:boolean = false;
    public menus = menus;
  currentUser: User;

    constructor(private userService:UserService) { }

    ngOnInit() {
      
      this.currentUser=this.userService.daoGetUser();
      
      if(!(this.currentUser.roles.includes("SUPER_ADMIN") 
      || this.currentUser.roles.includes("ADMIN") ) ){
       

        this.menus=this.menus.filter(function(value, index, arr){ 
          return value.name !="Pharma management";
      });
      

       
      }
     
      if(!(this.currentUser.roles.includes("SUPER_ADMIN") 
      || this.currentUser.roles.includes("ADMIN") 
      || this.currentUser.roles.includes("PHARMACIST")) ){
       

        this.menus=this.menus.filter(function(value, index, arr){ 
          return value.name !="User Management";
      });
      this.menus=this.menus.filter(function(value, index, arr){ 
        return value.name !="Drugs management";
    });
  

       
      }

      if(!(this.currentUser.roles.includes("SUPER_ADMIN") 
      || this.currentUser.roles.includes("PHARMACIST") 
      || this.currentUser.roles.includes("EMPLOYE_PHARMA")) ){
       

        this.menus=this.menus.filter(function(value, index, arr){ 
          return value.name !="Batch management";
      });
      this.menus=this.menus.filter(function(value, index, arr){ 
        return value.name !="Sales management";
    });
      

       
      }

    
    }

}
