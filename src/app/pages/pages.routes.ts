import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { detailUserComponent } from './detailUser/detailUser.component';
import { detailDrugComponent } from './detailDrug/detailDrug.component';
import { detailVenteComponent } from './detailVente/detailVente.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';

const pagesRoutes: Routes = [
  	{ path: 'contact', component: ContactComponent ,data: { animation: 'contact' } },
  	{ path: 'about', component: AboutComponent ,data: { animation: 'about' }},
  	{ path: 'services', component: ServicesComponent ,data: { animation: 'services' }},
    { path: 'detailUser', component: detailUserComponent ,data: { animation: 'detailUser' }},
    { path: 'detailDrug', component: detailDrugComponent ,data: { animation: 'detailDrug' }},
    { path: 'detailVente', component: detailVenteComponent ,data: { animation: 'detailVente' }},
];

@NgModule({
  imports: [
    RouterModule.forChild(pagesRoutes)
  	],
  exports: [
    RouterModule
  ]
})
export class PagesRouterModule {}