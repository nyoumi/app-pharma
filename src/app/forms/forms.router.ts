import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutMedicamentComponent } from './ajout-Medicament/ajout-Medicament.component';
import { AjoutPharmacieComponent } from './ajout-Pharmacie/ajout-Pharmacie.component';
import { AjoutUtilisateurComponent } from './ajout-Utilisateur/ajout-Utilisateur.component';
import { AjoutLotComponent } from './ajout-Lot/ajout-Lot.component';
import { AjoutVenteComponent } from './ajout-Vente/ajout-Vente.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
const FormsRoutes: Routes = [
  	{ path: 'reactive_forms', component: ReactiveFormsComponent },
  	{ path: 'template_forms', component: TemplateDrivenFormsComponent },
    { path: 'medicament_forms', component: AjoutMedicamentComponent },
    { path: 'utilisateur_forms', component: AjoutUtilisateurComponent },
    { path: 'pharmacie_forms', component: AjoutPharmacieComponent },
    { path: 'lot_forms', component: AjoutLotComponent },
    { path: 'vente_forms', component: AjoutVenteComponent },

  	
];

@NgModule({
  imports: [
    RouterModule.forChild(FormsRoutes)
  	],
  exports: [
    RouterModule
  ]
})
export class FormsRouterModule {}