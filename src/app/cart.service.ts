import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public pizzaname: Array<String>=[];
  public pizzasize: Array<String>=[];
  public quantity: Array<number>=[];
  public total:number=0;


 
}
