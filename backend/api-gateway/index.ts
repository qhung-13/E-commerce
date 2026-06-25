import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import { createProxyMiddleware } from 'http-proxy-middleware'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(helmet())
app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'api-gateway',
    services: {
      auth: process.env.AUTH_SERVICE_URL,
      product: process.env.PRODUCT_SERVICE_URL,
      order: process.env.ORDER_SERVICE_URL,
    },
  })
})

// Route đến Auth Service
app.use('/api/auth', createProxyMiddleware({
  target: process.env.AUTH_SERVICE_URL,
  changeOrigin: true,
}))

// Route đến Product Service
app.use('/api/products', createProxyMiddleware({
  target: process.env.PRODUCT_SERVICE_URL,
  changeOrigin: true,
}))

// Route đến Order Service
app.use('/api/orders', createProxyMiddleware({
  target: process.env.ORDER_SERVICE_URL,
  changeOrigin: true,
}))

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`)
  console.log(`→ Auth:    ${process.env.AUTH_SERVICE_URL}`)
  console.log(`→ Product: ${process.env.PRODUCT_SERVICE_URL}`)
  console.log(`→ Order:   ${process.env.ORDER_SERVICE_URL}`)
})