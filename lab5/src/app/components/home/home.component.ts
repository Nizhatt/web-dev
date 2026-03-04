import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductService } from '../../product-service/product-service';
import { Category } from '../../models/category.model';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  selectedProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  onCategorySelect(id: number) {
    this.selectedCategoryId = id;
    this.selectedProducts = this.productService.getProductsByCategory(id);
  }

  onProductDeleted(product: Product) {
    this.selectedProducts = this.selectedProducts.filter(p => p.id !== product.id);
  }
}