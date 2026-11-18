import Image from "next/image";

import {Suspense} from 'react'
import ProductListControl  from './components/ProductListControl'
import ProductCard from './components/ProductCard'
import Pagination from './components/Pagination'
import {Product} from '@/app/catalogus/lib/types'
import Cards from '@/app/catalogus/components/cardsContainer'
import {PageProps} from '@/app/catalogus/lib/types'
import {getCategories} from '@/app/catalogus/lib/utils'




export default async function Catalogus({searchParams}:PageProps) {
    const categories = getCategories()
    let searchParamateres
    if (searchParams) searchParamateres = await searchParams
    // const category = searchParamateres?.filter.charAt(0).toUpperCase() + searchParamateres?.filter.slice(1)
    const hasParams = Object.keys(searchParamateres).length > 0
  return (
    <section className="product-overview">
        <h2 className='heading-overview'>Alle Producten</h2>
            <ProductListControl categories={categories}/>
            <Suspense fallback="loading products...">
                <Cards searchParams={hasParams && searchParamateres}/>
            </Suspense>
        </section>
    )
}
