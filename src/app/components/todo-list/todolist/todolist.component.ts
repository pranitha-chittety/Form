import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  // standalone: true,
  // imports: [],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss'
})
export class TodolistComponent {
  
  productForm: FormGroup<any> = new FormGroup({
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
       this.productForm.reset()
      // this.productService.addProduct(requestBody);
      // this.productForm.reset();
    }

    else {
      alert('Please fill all the fields correctly!');
    }
  }

}
