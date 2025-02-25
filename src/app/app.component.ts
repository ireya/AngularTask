import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component'; // Import the component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent], // Add ProductListComponent to the imports array
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}