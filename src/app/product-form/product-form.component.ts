import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  productService = inject(ProductService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  product: Product = { id: 0, name: '', price: 0, description: '' };
  isEditMode = false;

  constructor() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.isEditMode = true;
      const id = +productId;
      const products = this.productService.getProducts()();
      this.product = products.find((p) => p.id === id)!;
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.productService.updateProduct(this.product); 
    } else {
      this.productService.addProduct(this.product); 
    }
    this.router.navigate(['/']); 
  }
}