import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {

  constructor(
    private productService: ProductService
  ) { }

  products: any;
  productsCopy: any;

  ngOnInit() {

    this.productService.getProducts().subscribe(products => {
      console.log(products);
      this.products = products;
      this.productsCopy = products;
    });
  }

  increaseStock(index: any, product: any) {
    this.productService.increaseStock(index);
  }

  decreaseStock(index: any, product: any) {
    if(product.quantity <= 0) {
      return alert('Stock is already 0');
    }
    this.productService.decreaseStock(index);
  }

  deleteProduct(index: any) {
    this.productService.deleteProduct(index);
  }

  searchFilter($event: any) {
    this.products = this.productsCopy.filter((product: any) => {
      return product.name.toLowerCase().includes($event.toLowerCase());
    });
  }
}
