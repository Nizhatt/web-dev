import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root' // сервис доступен во всём приложении
})
export class ProductService {

  getCategories(): Category[] {
    return [
      { id: 1, name: 'Смартфоны' },
      { id: 2, name: 'Ноутбуки' },
      { id: 3, name: 'Наушники' },
      { id: 4, name: 'Игры и консоли' },
    ];
  }

  getProducts(): Product[] {
    return [
      // ── Смартфоны (categoryId: 1) ──
      {
        id: 1, categoryId: 1, likes: 0,
        name: 'iPhone 14 Pro Max 256GB',
        description: 'Мощный процессор A16 Pro обеспечивает невероятную производительность в играх.',
        price: 540000, rating: 4.9,
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSaALZA7viBY78LRpBTPROYWnciJxUhLszThoLsI4TjtkGll8HLainWakHqxb7bsEeZ817ZNuBBW-rNl6ggTJc9247DHpseBbb6DqWZ7jnS_W7Wjz7yPQVEYtXT&usqp=CAc',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h1a/h45/84378448265246.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h03/h7e/84378448396318.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-sinii-113138428/?c=710000000'
      },
      {
        id: 2, categoryId: 1, likes: 0,
        name: 'Samsung Galaxy S25 Ultra',
        description: 'Смартфон с Galaxy AI, камерой 200 МП и встроенным стилусом S Pen.',
        price: 650000, rating: 4.9,
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSgqTDslpRcnV3GuDQYp2EU3V1mP4g_ZyOtLl1kipk459sBl8o-T4_nFJTjZQWWEQ03aL2yXBzpRzhCfIlH6t2T_njzMmz854u4sgn7ny43f_5jkm11Llxv1exqa0vPTqX8j4G9ca80&usqp=CAc',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h2a/h7c/83559333330974.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h2a/h15/83559333396510.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hf4/h99/83559333527582.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=710000000'
      },
      {
        id: 3, categoryId: 1, likes: 0,
        name: 'Google Pixel 8 Pro',
        description: 'Смартфон от Google с фирменным чипом Tensor G3 и продвинутыми AI-функциями камеры.',
        price: 420000, rating: 4.6,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h26/h67/63603038289950.jpg?format=preview-large',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h8b/h82/85399449370654.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h8b/h82/85399449370654.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h8b/h82/85399449370654.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/google-pixel-7-pro-12-gb-128-gb-chernyi-107066141/?c=750000000'
      },
      {
        id: 4, categoryId: 1, likes: 0,
        name: 'Xiaomi 14 Ultra',
        description: 'Флагман Xiaomi с камерой Leica, мощным чипом Snapdragon 8 Gen 3 и быстрой зарядкой 90W.',
        price: 480000, rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/p81/67214865.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h9a/h8c/86092590211102.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h9a/h8c/86092590211102.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h9a/h8c/86092590211102.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-pro-8-gb-256-gb-chernyi-133335702/?c=750000000'
      },
      

      // ── Ноутбуки (categoryId: 2) ──
      {
        id: 6, categoryId: 2, likes: 0,
        name: 'MacBook PRO M5',
        description: 'Тонкий ноутбук Apple на чипе M5 с дисплеем Liquid Retina и автономностью до 20 часов.',
        price: 1200000, rating: 5.0,
        image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTyFboDie9QlYuDoFnCFB-doQjS_FySXWYSaZtpRFf5umep6e623jgxJlhR70BDFi7G27LJUHovL9NiPGvkNoil1ARxC7wylHe1lpTnukXYA01VHzknY_UB_zWNUrvGjTRYlt2YHQ&usqp=CAc',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hbf/h31/64515211198494.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h57/h26/64515214049310.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hc6/hc0/64515216900126.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-256-gb-macos-mc7x4ru-a-132428983/?c=710000000'
      },
      {
        id: 7, categoryId: 2, likes: 0,
        name: 'ASUS ROG Zephyrus G14',
        description: 'Игровой ноутбук с AMD Ryzen 9, RTX 4060 и компактным корпусом весом 1.65 кг.',
        price: 580000, rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pa2/pe5/48835854.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h5f/hef/85870534246430.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h5f/hef/85870534246430.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h5f/hef/85870534246430.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g14-14-32-gb-ssd-1000-gb-bez-os-90nr0m82-m000w0-141343982/?c=750000000'
      },
      {
        id: 8, categoryId: 2, likes: 0,
        name: 'Lenovo Loq',
        description: 'Игровой ноутбук с Intel Core i5, сверхлёгким корпусом и высокой производительностью.',
        price: 620000, rating: 4.7,
        image: 'data:image/webp;base64,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',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h87/hac/84874040713246.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h87/hac/84874040713246.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h87/hac/84874040713246.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/lenovo-thinkpad-x1-carbon-gen-13-aura-edition-14-32-gb-m-2-1024-gb-win-11-pro-21nx00f8fw-147042340/?c=750000000'
      },
      

      // ── Наушники (categoryId: 3) ──
      {
        id: 11, categoryId: 3, likes: 0,
        name: 'AirPods Pro 2 USB-C',
        description: 'Наушники Apple с улучшенным ANC, процессором H2 и защитой от воды.',
        price: 115000, rating: 4.8,
        image: 'data:image/jpeg;base64,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',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/83819401936926.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h13/h34/83819401970334.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h35/h12/83819402035870.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-air-pro-2-belyi-118366664/?c=710000000'
      },
      {
        id: 12, categoryId: 3, likes: 0,
        name: 'Sony WH-1000XM6',
        description: 'Накладные наушники Sony с лучшим в классе шумоподавлением и до 30 часов работы.',
        price: 180000, rating: 4.9,
        image: 'data:image/jpeg;base64,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',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h84/h24/64349773692958.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h84/h24/64349773692958.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h84/h24/64349773692958.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000'
      },
      {
        id: 13, categoryId: 3, likes: 0,
        name: 'Samsung Galaxy Buds3 Pro',
        description: 'Вкладыши Samsung с ANC, Hi-Fi звуком 24bit и умным переключением режимов.',
        price: 85000, rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p67/p37/108495081.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h49/hf4/86047706513438.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h49/hf4/86047706513438.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h49/hf4/86047706513438.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds3-pro-serebristyi-121198974/?c=750000000'
      },
      

      // ── Игры и консоли (categoryId: 4) ──
      {
        id: 16, categoryId: 4, likes: 0,
        name: 'Sony PlayStation 5 Slim',
        description: 'Обновлённая PS5 с тонким дизайном, трассировкой лучей и SSD для мгновенной загрузки.',
        price: 245000, rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h00/h18/84534509109278.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h74/h79/84534509174814.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h0c/h49/84534509305886.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=710000000'
      },
      {
        id: 17, categoryId: 4, likes: 0,
        name: 'Nintendo Switch OLED',
        description: 'Консоль с 7-дюймовым OLED-экраном для игр дома и в дороге.',
        price: 155000, rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h49/64374883188766.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h71/h19/64103173161502.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h1d/h52/64103174242334.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hb1/h3b/64103175815198.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/nintendo-switch-oled-belyi-102927428/?c=710000000'
      },
      {
        id: 18, categoryId: 4, likes: 0,
        name: 'Xbox Series X 1TB',
        description: 'Самая мощная консоль Xbox с поддержкой 4K/120fps и Game Pass Ultimate.',
        price: 220000, rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h26/ha1/63982141407262.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hdb/he9/64062600175646.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hdb/he9/64062600175646.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hdb/he9/64062600175646.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/xbox-series-x-1tb-chernyi-100824897/?c=750000000'
      },
      
      
    ];
  }

  // Вспомогательный метод: вернуть продукты по id категории
  getProductsByCategory(categoryId: number): Product[] {
    return this.getProducts().filter(p => p.categoryId === categoryId);
  }
}