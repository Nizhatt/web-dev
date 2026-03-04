import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css']
})
export class ProductItemComponent {

  @Input() product!: Product;

  @Output() deleteProduct = new EventEmitter<Product>();

  onDelete() {
    this.deleteProduct.emit(this.product);
  }

  getStars(rating: number): number[] {
    return Array(Math.round(rating)).fill(0);
  }

  onLike() {
    this.product.likes++;
  }

  shareToTelegram() {
    const url = `https://t.me/share/url?url=${this.product.link}`;
    window.open(url, '_blank');
  }

  shareToWhatsApp() {
    const url = `https://wa.me/?text=${this.product.link}`;
    window.open(url, '_blank');
  }
}