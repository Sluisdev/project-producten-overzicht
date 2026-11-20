import {getModifiedProducts, getAllProducts, paginate} from '@/app/catalogus/lib/utils'
import ProductCard from './productCard'
import Pagination from '@/app/catalogus/components/pagination'
import {SearchParams, Query} from '@/app/catalogus/lib/types'

export default async function Cards ({searchParams}:{searchParams: Partial<Query> | undefined}) {
    const products =  searchParams ? await getModifiedProducts(searchParams) : await getAllProducts()
    const currPage = searchParams?.page ? parseInt(searchParams.page) : 1
    if (!products) {throw new Error("Onze excuses, deze pagina kon niet geladen worden")}
    const {pages, paginatedProducts} = paginate(products, currPage)
    // als paginatedProducts.length = 0, laat een error zien "Geen producten gevonden"
    return (
        <section className="product-cards-container">
            {paginatedProducts.map(p => (<ProductCard key={p.id} details={p} />))}
            <Pagination pages={parseInt(pages)} currentPage={currPage}/>
        </section>
    )
}