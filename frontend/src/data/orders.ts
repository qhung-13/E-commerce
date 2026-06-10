export interface OrderItem {
  name: string
  qty: number
  price: number
}

export interface Order {
  id: string
  date: string
  status: 'pending' | 'shipping' | 'delivered' | 'cancelled'
  statusText: string
  total: number
  items: OrderItem[]
}

export const mockOrders: Order[] = [
  {
    id: 'ORD-20240601-001',
    date: '01/06/2024',
    status: 'delivered',
    statusText: 'Đã giao',
    total: 8990000,
    items: [
      { name: 'Sony WH-1000XM5', qty: 1, price: 8990000 },
    ],
  },
  {
    id: 'ORD-20240528-002',
    date: '28/05/2024',
    status: 'shipping',
    statusText: 'Đang giao',
    total: 4340000,
    items: [
      { name: 'Nike Air Max 270', qty: 1, price: 2850000 },
      { name: 'Serum Vitamin C', qty: 1, price: 890000 },
      { name: 'Áo Khoác Uniqlo', qty: 1, price: 1490000 },
    ],
  },
  {
    id: 'ORD-20240510-003',
    date: '10/05/2024',
    status: 'pending',
    statusText: 'Chờ xác nhận',
    total: 27990000,
    items: [
      { name: 'MacBook Air M3', qty: 1, price: 27990000 },
    ],
  },
]