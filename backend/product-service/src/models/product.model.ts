export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  stock: number;
  category: string;
  image: string;
  badge?: string;
  rating: number;
  reviews: number;
  createdAt: Date;
}

// Mock data tạm thời, sau thay bằng DB
export const products: Product[] = [
  {
    id: "1",
    name: "Sony WH-1000XM5 Headphones",
    description:
      "Tai nghe chống ồn hàng đầu với âm thanh hi-res và pin 30 giờ.",
    price: 8990000,
    originalPrice: 11990000,
    stock: 45,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    badge: "Bán chạy",
    rating: 4.8,
    reviews: 2341,
    createdAt: new Date(),
  },
  {
    id: "2",
    name: 'MacBook Air M3 13"',
    description: "Laptop siêu mỏng chip M3, hiệu năng vượt trội, pin 18 giờ.",
    price: 27990000,
    originalPrice: 31990000,
    stock: 12,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    badge: "Mới",
    rating: 4.9,
    reviews: 1890,
    createdAt: new Date(),
  },
  {
    id: "3",
    name: "Nike Air Max 270 React",
    description: "Giày thể thao đế React êm ái, thiết kế năng động.",
    price: 2850000,
    originalPrice: 3500000,
    stock: 88,
    category: "fashion",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    badge: "Sale 18%",
    rating: 4.6,
    reviews: 3102,
    createdAt: new Date(),
  },
];
