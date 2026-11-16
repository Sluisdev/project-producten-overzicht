export type Product = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}

export type ProductDetails = Omit<Product, 'rating'>

export type Paginated = {
    pages: number
    products: ProductDetails[]
}

export type Query = {
    filter: string
    search: string
    sort: "asc" | "desc"
    page?: string
}