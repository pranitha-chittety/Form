
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(
  ) { }

  getProducts() {
    return this.products.asObservable();
  }

  addProduct(product: any) { 
    this.products.next([...this.products.getValue(), product]);
  }

  deleteProduct(index: any) {
    const products = this.products.getValue();
    products.splice(index, 1);
    this.products.next(products);
  }

  increaseStock(index: any) {
    const products = this.products.getValue();
    products[index].quantity++;
    if(products[index].quantity > 0) {
      products[index].status = true;
    }
    this.products.next(products);
  }

  decreaseStock(index: any) {
    const products = this.products.getValue();
    products[index].quantity--;
    if(products[index].quantity <= 0) {
      products[index].status = false;
    }
    this.products.next(products);
  }

}
