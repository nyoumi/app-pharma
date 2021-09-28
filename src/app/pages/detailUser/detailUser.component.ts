import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './detailUser.component.html',
  styleUrls: ['./detailUser.component.scss']
})
export class detailUserComponent implements OnInit {
	checked = false;
    indeterminate = false;
  detailUserService: any;
  dataSource: any;
  constructor() { }

  ngOnInit() {
    this.detailUserService.getAllUser().subscribe(data =>{
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

   );
  }
  user = [
				{userName: 'Hassan', status: 'Full stack developer'},
				{select: 'Paul', position: 'Full stack developer'},
				{select: 'Jullien', position: 'Full stack developer'},
				{select: 'Germin', position: 'Full stack developer'},
				{select: 'Bouba', position: 'Full stack developer'},
				{select: 'Rodrigue', position: 'Full stack developer'},
			];
}
