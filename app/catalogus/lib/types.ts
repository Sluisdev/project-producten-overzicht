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

export type Sort = "asc" | "desc"

export type Query = {
    filter: string
    search: string
    sort: Sort
    page?: string
}

export type Paginated = {
    pages: number
    paginatedProducts: ProductDetails[]
}

export type PageProps = {
    searchParams:Promise<{
        search: string
        filter: string
        sort: Sort
        page: string
    }>
}

