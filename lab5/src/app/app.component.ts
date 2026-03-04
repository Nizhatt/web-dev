// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ProductListComponent } from './components/product-list/product-list.component';
// import { ProductService } from './product-service/product-service';
// import { Category } from './models/category.model';
// import { Product } from './models/product.model';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, ProductListComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent implements OnInit {
//   categories: Category[] = [];
//   // Продукты текущей выбранной категории
//   selectedProducts: Product[] = [];
//   // Какая категория сейчас выбрана (null = ничего не выбрано)
//   selectedCategoryId: number | null = null;

//   constructor(private productService: ProductService) {}

//   ngOnInit() {
//     this.categories = this.productService.getCategories();
//   }

//   // Вызывается при клике на категорию
//   onCategorySelect(categoryId: number) {
//     this.selectedCategoryId = categoryId;
//     // Каждый раз загружаем свежий список (копию) чтобы удаления не ломали данные сервиса
//     this.selectedProducts = this.productService.getProductsByCategory(categoryId);
//   }

//   // Слушаем событие удаления из ProductListComponent
//   onProductDeleted(productId: number) {
//     this.selectedProducts = this.selectedProducts.filter(p => p.id !== productId);
//   }
// }

import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
}