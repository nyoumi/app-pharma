import { Component, OnInit } from '@angular/core';
import { LIST_HELPERS,  Messages, Links} from './helpers.data';
import { ActivatedRoute,Route,Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {

  showMultiListCode: boolean = false;
  elements:any = [];
  research: any;
  user:any;
 constructor(private route: Router,private userService:UserService) { 
       console.log(this.route);
       let datas=this.route.getCurrentNavigation().extras.state.data ;
       this.elements =datas.results
       console.log(datas.research);
       this.research=datas.research;
 }

 ngOnInit() {
  this.user=this.userService.daoGetUser();

 }

}
