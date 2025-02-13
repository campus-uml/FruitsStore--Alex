export interface Product {
  id: number
  name: string
  price: number
  originalPrice: number
  priceUnit: string
  image: string
  isFresh?: boolean
  isBest?: boolean
}

export interface Category {
  id: string
  name: string
  isActive?: boolean
}

