import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = signal<Product[]>([
    { id: 1, name: 'Laptop', price: 1000, description: 'High-performance laptop' },
    { id: 2, name: 'Smartphone', price: 800, description: 'Latest smartphone model' },
    { id: 3, name: 'Headphones', price: 150, description: 'Noise-cancelling headphones' },
  ]);

  getProducts() {
    return this.products.asReadonly();
  }

  addProduct(product: Omit<Product, 'id'>): void {
    const newProduct = { ...product, id: this.products().length + 1 };
    this.products.update((products) => [...products, newProduct]);
  }

  updateProduct(updatedProduct: Product): void {
    this.products.update((products) =>
      products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
  }

  deleteProduct(id: number): void {
    this.products.update((products) => products.filter((p) => p.id !== id));
  }
}