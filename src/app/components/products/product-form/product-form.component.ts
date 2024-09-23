import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  
  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) 
  {}

  productForm: FormGroup<any> = this.fb.group({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    category: new FormControl('', [Validators.required, Validators.minLength(3)]),
    quantity: new FormControl('', [Validators.required, Validators.min(1)]),
  });

  onSubmit() {
    if (this.productForm.valid) {
      console.log('Form Submitted!', this.productForm.value);

      const requestBody = {
        ...this.productForm.value,
        status: this.productForm.value.quantity > 0 ? true : false
      }

      this.productService.addProduct(requestBody);
      this.productForm.reset();
    }

    else {
      alert('Please fill all the fields correctly!');
    }
  }
}
