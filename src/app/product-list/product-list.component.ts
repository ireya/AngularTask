import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { NgFor } from '@angular/common'; // Import NgFor for *ngFor
import { RouterModule } from '@angular/router'; // Import RouterModule for routerLink

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, RouterModule], // Add NgFor and RouterModule to the imports array
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: () => Product[]; // Declare `products` as a function returning `Product[]`

  constructor(private productService: ProductService, private router: Router) {
    // Initialize `products` to call `getProducts()` and retrieve the signal's value
    this.products = () => this.productService.getProducts()();
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id);
  }
}