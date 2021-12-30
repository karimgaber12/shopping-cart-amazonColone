import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() products!: any[];  // to recive the data from HomeComponents

  constructor(private shoppingCart:ShoppingCartService) { }

  ngOnInit(): void {
  }

  addToCart(product:any[]){
    this.shoppingCart.addProduct(product);
  }
}
