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
    zoek: string
    sorteer: Sort
    page?: string
}

export type Paginated = {
    pages: number
    paginatedProducts: ProductDetails[]
}

type SearchParams = { [key: string]: string | string[] | undefined }


export type PageProps = {
    searchParams:Promise<SearchParams>
}

