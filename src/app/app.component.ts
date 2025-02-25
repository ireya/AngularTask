import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component'; // Import the component
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // Add ProductListComponent to the imports array
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}