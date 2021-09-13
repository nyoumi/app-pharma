import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FixedTableComponent } from './fixed-table/fixed-table.component';
import { MedicamentTableComponent } from './medicament-table/medicament-table.component';
import { FeatureTableComponent } from './feature-table/feature-table.component';
import { ResponsiveTableComponent } from './responsive-table/responsive-table.component';
import { UtilisateurTableComponent } from './utilisateur-table/utilisateur-table.component';
import { PharmacieTableComponent } from './pharmacie-table/pharmacie-table.component';
import { LotTableComponent } from './Lot-table/lot-table.component';
import { VenteTableComponent } from './vente-table/vente-table.component';

const materialWidgetRoutes: Routes = [
  	{ path: 'fixed', component: FixedTableComponent , data: { animation: 'fixed' }},
    { path: 'medicament', component: MedicamentTableComponent , data: { animation: 'medicament' }},
    { path: 'utilisateur', component: UtilisateurTableComponent , data: { animation: 'utilisateur' }},
    { path: 'pharmacie', component: PharmacieTableComponent , data: { animation: 'pharmacie' }},
    { path: 'lot', component: LotTableComponent , data: { animation: 'lot' }},
    { path: 'vente', component: VenteTableComponent , data: { animation: 'vente' }},
   // { path: 'utilisateur', component: MedicamentTableComponent , data: { animation: 'utilisateur' }},
  	{ path: 'featured', component: FeatureTableComponent ,data: { animation: 'featured' }},
  	{ path: 'responsive', component: ResponsiveTableComponent ,data: { animation: 'responsive' }}
];

@NgModule({
  imports: [
    RouterModule.forChild(materialWidgetRoutes)
  	],
  exports: [
    RouterModule
  ]
})
export class TablesRouterModule {}