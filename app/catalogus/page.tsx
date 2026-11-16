import Image from "next/image";

import {Suspense} from 'react'
import ProductListControl  from './components/ProductListControl'
import ProductCard from './components/ProductCard'
import Pagination from './components/Pagination'
import {Product} from '@/app/catalogus/lib/types'
import Cards from '@/app/catalogus/components/cardsContainer'

export default function Catalogus() {
  return (
    <section className="product-overview border">
            <h1 className='heading-overview'>Alle Producten</h1>
            <ProductListControl/>
            <Suspense fallback="loading...">
                <Cards />
            </Suspense>
        <Pagination />
        </section>
    )
}
