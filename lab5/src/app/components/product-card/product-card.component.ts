import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() deleteProduct = new EventEmitter<number>();

  getStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  onLike() {
    this.product.likes++;
  }

  onDelete() {
    if (confirm(`Удалить «${this.product.name}»?`)) {
      this.deleteProduct.emit(this.product.id);
    }
  }

  shareToTelegram() {
    const text = `Посмотри: ${this.product.name}`;
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(text)}`,
      '_blank'
    );
  }

  shareToWhatsApp() {
    const text = `${this.product.name} — ${this.product.link}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  }
}