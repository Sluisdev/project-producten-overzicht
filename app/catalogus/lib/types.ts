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
    categorie: string
    zoek: string
    sorteer: Sort
    page?: string
}

export type Paginated = {
    pages: number
    paginatedProducts: ProductDetails[]
}

export type Categories = {
    categories: Promise<string[]> | string[]
}

export type FilterList = {
    items: string[]
    filterValues: FilterValues
    handleFilters: (name: string, el: string) => void
    name: string
    searchValue: string
}


export type FilterValues = {
    [key: string]: string | undefined
}

export type SearchParams = { [key: string]: string | string[] | undefined }

export type PageProps = {
    searchParams:Promise<SearchParams>
}

export type ArrowBtnProps = {
    handleClick: () =>  void
    className: string
    direction: string
    disabled: boolean
}

