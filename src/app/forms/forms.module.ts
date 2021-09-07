import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsRouterModule } from './forms.router';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import {  ReactiveFormsModule } from '@angular/forms';
import {MatSnackBar,MatSnackBarModule,MatSnackBarConfig} from '@angular/material/snack-bar';

import { FormsModule }   from '@angular/forms';
import { AjoutMedicamentComponent } from './ajout-Medicament/ajout-Medicament.component';
import { AjoutUtilisateurComponent } from './ajout-Utilisateur/ajout-Utilisateur.component';
import { AjoutPharmacieComponent } from './ajout-Pharmacie/ajout-Pharmacie.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
	imports: [
		CommonModule,
		FormsRouterModule,
		FlexLayoutModule,
		MatButtonModule,
		MatToolbarModule,
		MatCardModule,
		MatTabsModule,
		MatIconModule,
		 MatInputModule,
		 ReactiveFormsModule,
		 FormsModule,
		 MatSnackBarModule,
		 MatSelectModule,

	],
	declarations: [ReactiveFormsComponent, 
		TemplateDrivenFormsComponent,
		AjoutMedicamentComponent,
		AjoutUtilisateurComponent,
		AjoutPharmacieComponent

	]
})
export class FormModule { }
   