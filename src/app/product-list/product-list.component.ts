import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: () => Product[];

  constructor(private productService: ProductService, private router: Router) {
    this.products = () => this.productService.getProducts()();
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id);
  }
}
