import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
    selector: 'app-dashboard-crm',
    templateUrl: './dashboard-crm.component.html',
    styleUrls: ['./dashboard-crm.component.scss']
})

export class DashboardCrmComponent implements OnInit {
    public showbar:boolean=true;

    public dashCard = [
        { colorDark: '#5C6BC0', colorLight: '#7986CB', number: 0, title: 'SALES', icon: 'local_grocery_store' },
        { colorDark: '#42A5F5', colorLight: '#64B5F6', number: 0, title: 'DRUGS', icon: 'pie_chart_outlined' },
        { colorDark: '#26A69A', colorLight: '#4DB6AC', number: 0, title: 'USERS', icon: 'people' },
        { colorDark: '#66BB6A', colorLight: '#81C784', number: 0, title: 'DRUGSTORES', icon: 'local_pharmacy' }
    ];

    tableData = [
        { country: 'India', sales: 5400, percentage: '40%' },
        { country: 'Us', sales: 3200, percentage: '30.33%' },
        { country: 'Australia', sales: 2233, percentage: '18.056%' },
        { country: 'Spaim', sales: 600, percentage: '6%' },
        { country: 'China', sales: 200, percentage: '4.50%' },
        { country: 'Brazil', sales: 100, percentage: '2.50%' },
    ];

    currentUser: User;
    statistiques: any;
    evolution: boolean=true;
    sales: { colorDark: string; colorLight: string; number: number; title: string; icon: string; }[];

    constructor(private userService:UserService,private snackbar:MatSnackBar) { 
        this.currentUser=this.userService.daoGetUser();

    }

    ngOnInit() {
     
      let id_pharma;
      console.log(this.currentUser.roles)
      if((this.currentUser.roles.includes("SUPER_ADMIN") || this.currentUser.roles.includes("ADMIN")) ){
          console.log("dddddd")
          id_pharma=null;

      }else{
            id_pharma=this.currentUser.id_pharma;
      }

        

        this.userService.getStatistiques(id_pharma).subscribe(data =>{
            console.log(data)
            if(data.utilisateurs){
              
                 this.statistiques=data;
                
                 this.dashCard[0].number=   this.statistiques.ventes 
                 this.dashCard[1].number=   this.statistiques.medicaments 
                  this.dashCard[2].number=   this.statistiques.utilisateurs 
                  this.dashCard[3].number=   this.statistiques.pharmacies       
      
                  this.filterProfile()
              
            }else{
                  let snackBarRef = this.snackbar.open('No result from database!','OK', {
              duration: 3000,
              panelClass: ['red-snackbar']
            });
            }
         
         },error=>{
          let snackBarRef = this.snackbar.open('No result from database!','OK', {
              duration: 3000,
              panelClass: ['red-snackbar']
            });
         }
        
         );
      } 
    filterProfile() {
        if(!(this.currentUser.roles.includes("SUPER_ADMIN") 
        || this.currentUser.roles.includes("ADMIN") ) ){
            this.evolution=false;
         
  
          this.dashCard=this.dashCard.filter(function(value, index, arr){ 
            return value.title !="DRUGSTORES";
        });
        
  
         
        }

        if(!(this.currentUser.roles.includes("SUPER_ADMIN") 
        || this.currentUser.roles.includes("ADMIN") 
        || this.currentUser.roles.includes("PHARMACIST") ) ){
            this.showbar=false;
            
         
  
          this.dashCard=this.dashCard.filter(function(value, index, arr){ 
            return value.title !="USERS";
        });
        
  
         
        }
        if(!(this.currentUser.roles.includes("SUPER_ADMIN") 
        || this.currentUser.roles.includes("ADMIN") 
        || this.currentUser.roles.includes("PHARMACIST")
        || this.currentUser.roles.includes("EMPLOYE_PHARMA")  ) ){
            
            
         
  
          this.dashCard=this.dashCard.filter(function(value, index, arr){ 
            return value.title !="SALES";
        });
        
  
         
        }
    }
    

}
