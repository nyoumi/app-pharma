import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResearchComponent } from './research.component';
import { RouterModule, Routes } from '@angular/router'; 

const appRoutes: Routes = [
    { path: '', component: ResearchComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ],
  declarations: [ResearchComponent]
})
export class ResearchModule { }
