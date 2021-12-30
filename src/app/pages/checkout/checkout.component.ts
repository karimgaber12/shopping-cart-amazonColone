import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items! :any[];

  constructor(public shoppingCart:ShoppingCartService) { }

  ngOnInit(): void {
    this.getShoppingItems()
  }

  getShoppingItems(){
    this.items = this.shoppingCart.get_shopping_cart_items()
  }

  deleteEventHandler(p:any){

    this.getShoppingItems()
  }

}
