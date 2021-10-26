import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Route,Router } from '@angular/router';
import { fadeAnimation } from '../animation';

@Component({
  selector: 'cdk-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [fadeAnimation]
})
export class ListComponent implements OnInit {


 showMultiListCode: boolean = false;
  elements:any = [];
  research: any;
 constructor(private route: Router) { 
       console.log(this.route);
       let datas=this.route.getCurrentNavigation().extras.state.data ;
       this.elements =datas.results
       console.log(datas.research);
       this.research=datas.research;
 }

 ngOnInit() {
      

 }

}
