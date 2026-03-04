export interface Product {
  id: number;
  name: string;
  categoryId: number;
  description: string;
  price: number;
  rating: number;
  image: string;      // Главное изображение для превью
  likes: number;
  images: string[];   // Массив из минимум 3-х изображений для галереи
  link: string;       // Ссылка на kaspi.kz
}