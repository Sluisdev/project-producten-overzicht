import {getModifiedProducts, getAllProducts, paginate} from '@/app/catalogus/lib/utils'
import ProductCard from './ProductCard'
import Pagination from '@/app/catalogus/components/Pagination'
import '@/app/catalogus/styles/products.css'

export default async function Cards ({searchParams}) {
    const products =  searchParams ? await getModifiedProducts(searchParams) : await getAllProducts()
    const currPage = searchParams.page && parseInt(searchParams.page)  
    const {pages, paginatedProducts} = paginate(products, currPage)
    // als paginatedProducts.length = 0, laat een error zien "Geen producten gevonden"
    return (
        <section className="product-cards-container">
            {paginatedProducts.map(p => (<ProductCard key={p.id} details={p} />))}
            <Pagination pages={parseInt(pages)} currentPage={currPage ? currPage : 1 }/>
        </section>
    )
}