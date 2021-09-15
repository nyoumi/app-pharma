import { Component, OnInit } from '@angular/core';
import { LIST_HELPERS,  Messages, Links} from './helpers.data';
import { ActivatedRoute,Route,Router } from '@angular/router';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {

    listHelpers: any = LIST_HELPERS;
     links = Links;

    showMultiListCode: boolean = false;
     elements:any = Messages;
    constructor(private route: Router) { 
          console.log(this.route);
          this.elements =this.route.getCurrentNavigation().extras ;
          console.log(this.elements);
    }

    ngOnInit() {
         

    }

}
