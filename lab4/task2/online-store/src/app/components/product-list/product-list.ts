import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})

export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 13',
      description: 'Apple smartphone with A15 Bionic chip.',
      price: 350000,
      rating: 4.8,
      image: 'https://api.technodom.kz/f3/api/v1/images/800/800/252949_1.jpg',
      images: [],
      link: 'https://kaspi.kz'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      description: 'Flagship Android smartphone.',
      price: 420000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h56/hf4/86025936404510.png?format=gallery-large',
      images: [],
      link: 'https://kaspi.kz'
    },
    {
      id: 3,
      name: 'iPhone 14',
      description: 'Apple smartphone with A15 Bionic chip.',
      price: 380000,
      rating: 4.5,
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRvTeqdsLcg3jKkO7cauOfaXaSiOL0MSJJNgaNI-J-SNFTSjU2QtCm-RB_TIGl28gbWTLxaBM3pHgVxbZzfqpPt05opPp6NnZ_aY1vJEPcyH8Cjdx456IzM3CmjKFR6QZQJ9pFebg&usqp=CAc',
      images: [],
      link: 'https://kaspi.kz'
    },
    {
      id: 4,
      name: 'iPhone 15',
      description: 'Apple smartphone with A16 Bionic chip.',
      price: 430000,
      rating: 4.9,
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSsZd8zBT8j6gC9SCwUFzePbQVm0nM4ZUWapc1pE2R_96d20aFZm-CK5vUMUgl-Uh3M_jQwzRLuFFW8BguWqUM7j5uw-YuJS3Xz9yWcZWrqyzwLRtt2-FSS9gZTcqitvHZFl0VnYU-a&usqp=CAc',
      images: [],
      link: 'https://kaspi.kz'
    },
    {
      id: 5,
      name: 'iPhone 16',
      description: 'Apple smartphone with A17 Bionic chip.',
      price: 480000,
      rating: 5.0,
      image: 'data:image/webp;base64,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',
      images: [],
      link: 'https://kaspi.kz'
    },
    {
      id: 6,
      name: 'iPhone 17',
      description: 'Apple smartphone with A19 Bionic chip.',
      price: 620000,
      rating: 5.0,
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTaIUUAfHbUXqra0aQLBOIRyR9shin36KD89r_W0-g0Uf0vpgf9JhW7JB2DPYCstUEwvnW2e2a1gK4goVELPtyvOFyFpns-G_H6FH8nad5cn0sw6Z20F6Fh9YjQaI-JCG1VhmD5tw&usqp=CAc',
      images: [],
      link: 'https://kaspi.kz'
    },
    {
      id: 7,
      name: 'iPhone 17 Pro',
      description: 'Apple smartphone with A19 Pro Bionic chip.',
      price: 850000,
      rating: 5.0,
      image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRTGGrEGLbc6T2ecCC__qrulLuqMYZJXniYu0ElqwaoZmBgGK4VI1uLfw_7RCyIGzeTzsEZzeOULkGdMqHj-bQ1iJGq82xLclSTEWnmJP1nvVxqjdTg79xbEF2XZSLluAj1sAlynSN5trc&usqp=CAc',
      images: [],
      link: 'https://kaspi.kz'
    },
    {
      id: 8,
      name: 'iPhone 17 Pro Max',
      description: 'Apple smartphone with A19 Pro Max Bionic chip.',
      price: 1200000,
      rating: 5.0,
      image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSyM5F8ln5tAX1SMX2n-n9XvOzWvx7ctqMumhVqjmN_AL4CyE4H3VHbgVXWWI7DM8ji-YvxJEDkp9AMPmE_uhumE5-UzuyNdsGrTg2QBYCIVfUUO8SHR6WaJTZGswXkIimihs0M12o&usqp=CAc',
      images: [],
      link: 'https://kaspi.kz'
    },
    {
      id: 9,
      name: 'iPhone 16 Pro Max',
      description: 'Apple smartphone with A19 Pro Max Bionic chip.',
      price: 1200000,
      rating: 5.0,
      image: 'data:image/webp;base64,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',
      images: [],
      link: 'https://kaspi.kz'
    },
    {
      id: 10,
      name: 'iPhone 16 Pro',
      description: 'Apple smartphone with A18 Pro Max Bionic chip.',
      price: 850000,
      rating: 5.0,
      image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSyM5F8ln5tAX1SMX2n-n9XvOzWvx7ctqMumhVqjmN_AL4CyE4H3VHbgVXWWI7DM8ji-YvxJEDkp9AMPmE_uhumE5-UzuyNdsGrTg2QBYCIVfUUO8SHR6WaJTZGswXkIimihs0M12o&usqp=CAc',
      images: [],
      link: 'https://kaspi.kz'
    }
    
  ];

}
