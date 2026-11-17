import Image from "next/image";

import {Suspense} from 'react'
import ProductListControl  from './components/ProductListControl'
import ProductCard from './components/ProductCard'
import Pagination from './components/Pagination'
import {Product} from '@/app/catalogus/lib/types'
import Cards from '@/app/catalogus/components/cardsContainer'
import {PageProps} from '@/app/catalogus/lib/types'




export default async function Catalogus(props: PageProps) {
  let searchParams 
  if (props) searchParams = await props.searchParams
  const hasParams = Object.keys(searchParams).length > 0
  return (
    <section className="product-overview border">
            <h1 className='heading-overview'>Alle Producten</h1>
            <ProductListControl/>
            <Suspense fallback="loading products...">
                <Cards searchParams={hasParams && searchParams}/>
            </Suspense>
        </section>
    )
}
