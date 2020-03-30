import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {

  name : Array<String>=this.cart.pizzaname;
  size : Array<String>=this.cart.pizzasize;
  quantity : Array<number>=this.cart.quantity;
  i =this.cart.pizzaname.length;
  total : number=this.cart.total;
  
  
  


  constructor(public cart:CartService) {
    
   }

  ngOnInit(): void {
    
  }



}
