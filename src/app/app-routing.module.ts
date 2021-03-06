import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CardsComponentsComponent} from "./components/cards-components/cards-components.component"

const routes: Routes = [
  {
    path: '',
    redirectTo: '/student',
    pathMatch: 'full'
  },
  {
    path: 'student',
    component: CardsComponentsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
