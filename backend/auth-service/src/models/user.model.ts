export interface User {
  id: string
  email: string
  password: string
  name: string
  role: 'customer' | 'admin'
  createdAt: Date
}

export const users: User[] = []