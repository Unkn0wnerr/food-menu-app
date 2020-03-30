import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodDetailsComponent } from './food-details/food-details.component';


const routes: Routes = [
  { path: 'cart', component: FoodDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FoodDetailsComponent]
