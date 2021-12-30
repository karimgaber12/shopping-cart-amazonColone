import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
// code localStorage product into cart
// I do not understand it (remember)
  constructor() { }
  shopping_cart_items:any[] = [];


  addProduct = (product:any[]) =>{
    let items = this.get_shopping_cart_items();
    if (items) {
      items.push(product);
      localStorage.setItem("shopping-cart",JSON.stringify(items))
    }
    else{
      this.shopping_cart_items.push(product)
      localStorage.setItem("shopping-cart",JSON.stringify(this.shopping_cart_items))
    }
  }

  get_shopping_cart_items = ()=>{
    let items = localStorage.getItem("shopping-cart");
    return JSON.parse(items!)
  }


  getCartLength = ()=>{
    let items = this.get_shopping_cart_items();
    return items? this.get_shopping_cart_items().length:0;
  }

  getTotal = ()=> {
    let items = this.get_shopping_cart_items();
    return items?.reduce((acc:any, item:any) => acc + item.price,0)
  }

  removerItem=(p:any)=>{
    console.log('calling remover ', p)
    let items = this.get_shopping_cart_items();
    
    const index = items.findIndex((item:any)=> item.id == p.id);
    if(index>=0){
      console.log('hitting if')
      items.splice(index, 1);
      return localStorage.setItem('shopping-cart', JSON.stringify(items))
    }

  }

}
