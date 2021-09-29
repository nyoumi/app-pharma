import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../user';

@Component({
  selector: 'app-contacts',
  templateUrl: './detailUser.component.html',
  styleUrls: ['./detailUser.component.scss']
})
export class detailUserComponent implements OnInit {
	checked = false;
    indeterminate = false;
  detailUserService: any;
  user: User
  dataSource: any;
  constructor(private route: Router) {this.user =this.route.getCurrentNavigation().extras as User; 
  console.log(this.user)
 // console.log("tt")
}

  ngOnInit() {
   /*  this.detailUserService.getAllUser().subscribe(data =>{
      console.log(data)
   
   const pharmacies=data[1];
   data[0].forEach(user => {
     if(user.id_pharma!=null && user.id_pharma!=""){
       let pharma=pharmacies.filter(pharmacie => pharmacie.id === user.id_pharma)
       console.log(pharma)
       console.log(user)
       if(pharma[0]) user.pharma_name=pharma[0].nom_phar;
       
     } 
     
 });
   this.dataSource =data[0];
   }

   ); */
  }
  /* user = [
				{userName: 'Hassan', status: 'Full stack developer'},
				{userName: 'Paul', status: 'Full stack developer'},
				{userName: 'Jullien', status: 'Full stack developer'},
				{userName: 'Germin', status: 'Full stack developer'},
				{userName: 'Bouba', status: 'Full stack developer'},
				{userName: 'Rodrigue', status: 'Full stack developer'},
			]; */
}
