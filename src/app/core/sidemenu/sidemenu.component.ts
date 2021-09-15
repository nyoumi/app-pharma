import { Component, OnInit, Input } from '@angular/core';
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
  currentUser: import("c:/Users/GOOGLE/app_pharma_front/dashbord/src/app/user").User;

    constructor(private userService:UserService) { }

    ngOnInit() {
      this.currentUser=this.userService.daoGetUser();
      if(!this.currentUser.roles.includes("SUPER_ADMIN") ){
        menus.slice(2,1)
      }
    }

}
