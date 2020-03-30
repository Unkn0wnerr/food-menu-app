import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  
  pizzas = ['Farmhouse', 'Margherita', 'Peppy Paneer', 'Pepperoni'];
  

  constructor(public cart :CartService) { }



  ngOnInit(): void {
  }

  check(e){


    if(e.target.checked)
    {
      
      this.cart.pizzaname.push(e.target.value);
    }
    else{
      this.cart.pizzaname.pop();
    }
  }

  radioCheck(e){

    if(e.target.checked)
    {
      this.cart.pizzasize.push(e.target.value);
    }
    else{
      this.cart.pizzasize.pop();
    }
  }

  optionCheck(e){
      this.cart.quantity.push(e.target.value);
  }

  onClick()
  {
   

    
     
    
     for( var index in this.cart.pizzaname )
     {

      
       if(this.cart.pizzasize[index]==="small")
       {
         this.cart.total=(100*this.cart.quantity[index])+this.cart.total;
         
       }

       if(this.cart.pizzasize[index]==="medium")
       {
         this.cart.total=200*this.cart.quantity[index]+this.cart.total;
       }

       if(this.cart.pizzasize[index]==="large")
       {
         this.cart.total=300*this.cart.quantity[index]+this.cart.total;
       }

       
     }
     console.log(this.cart.total);
     

  }

}
