export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  badge?: string;
  stock: number;
  description: string;
  specs: string[];
}

export interface Category {
  id: string;
  name: string;
}

export const categories: Category[] = [
  { id: "all", name: "Tất cả" },
  { id: "electronics", name: "Điện tử" },
  { id: "fashion", name: "Thời trang" },
  { id: "home", name: "Nhà cửa" },
  { id: "sports", name: "Thể thao" },
  { id: "beauty", name: "Làm đẹp" },
];

export const products: Product[] = [
  {
    id: 1,
    category: "electronics",
    name: "Sony WH-1000XM5 Headphones",
    price: 8990000,
    originalPrice: 11990000,
    rating: 4.8,
    reviews: 2341,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    badge: "Bán chạy",
    stock: 45,
    description:
      "Tai nghe chống ồn hàng đầu với âm thanh hi-res và pin 30 giờ.",
    specs: ["Chống ồn ANC", "Pin 30 giờ", "Bluetooth 5.2", "Hi-Res Audio"],
  },
  {
    id: 2,
    category: "electronics",
    name: 'MacBook Air M3 13"',
    price: 27990000,
    originalPrice: 31990000,
    rating: 4.9,
    reviews: 1890,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    badge: "Mới",
    stock: 12,
    description: "Laptop siêu mỏng chip M3, hiệu năng vượt trội, pin 18 giờ.",
    specs: ["Apple M3", "RAM 8GB", "SSD 256GB", "Pin 18 giờ"],
  },
  {
    id: 3,
    category: "fashion",
    name: "Nike Air Max 270 React",
    price: 2850000,
    originalPrice: 3500000,
    rating: 4.6,
    reviews: 3102,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    badge: "Sale 18%",
    stock: 88,
    description: "Giày thể thao đế React êm ái, thiết kế năng động.",
    specs: ["Đế React", "Air Max 270", "Upper Mesh", "Unisex"],
  },
  {
    id: 4,
    category: "home",
    name: "Nồi Cơm Điện Panasonic 1.8L",
    price: 1290000,
    originalPrice: 1690000,
    rating: 4.7,
    reviews: 5601,
    image:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop",
    badge: "Bán chạy",
    stock: 200,
    description: "Nồi cơm IH áp suất, cơm ngon đều hạt, dung tích 1.8L.",
    specs: ["Công nghệ IH", "1.8L", "700W", "Hẹn giờ"],
  },
  {
    id: 5,
    category: "beauty",
    name: "Serum Vitamin C La Roche-Posay",
    price: 890000,
    originalPrice: 1100000,
    rating: 4.8,
    reviews: 7823,
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    badge: "Yêu thích",
    stock: 300,
    description: "Serum 10% Vitamin C thuần túy, dưỡng sáng và chống lão hóa.",
    specs: ["Vitamin C 10%", "30ml", "Da nhạy cảm", "Không hương liệu"],
  },
  {
    id: 6,
    category: "sports",
    name: "Xe Đạp Thể Thao Giant ATX 2024",
    price: 7500000,
    originalPrice: 8900000,
    rating: 4.5,
    reviews: 432,
    image:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400&h=400&fit=crop",
    badge: "Sale",
    stock: 15,
    description: "Xe đạp địa hình khung nhôm nhẹ, 21 tốc độ Shimano.",
    specs: ["Khung Aluminium", "21 tốc độ", "Phanh đĩa", "Size M/L"],
  },
];
