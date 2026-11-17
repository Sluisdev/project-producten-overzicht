import {getModifiedProducts, getAllProducts, paginate} from '@/app/catalogus/lib/utils'
import ProductCard from './ProductCard'
import Pagination from '@/app/catalogus/components/Pagination'

export default async function Cards ({searchParams}) {
    console.log(searchParams)
    const products =  searchParams ? await getModifiedProducts(searchParams) : await getAllProducts()
    console.log("products:", products)
    const currPage = searchParams.page && parseInt(searchParams.page)  
    const {pages, paginatedProducts} = paginate(products, currPage)
    console.log("paginated products", paginatedProducts)
    return (
        <section className="product-cards-container">
            {paginatedProducts.map(p => (<ProductCard key={p.id} details={p} />))}
            <Pagination pages={parseInt(pages)} currentPage={currPage ? currPage : 1 }/>
        </section>
    )
}