import Image from "next/image";

import {Suspense} from 'react'
import ProductListControl  from '@/app/catalogus/components/productsListControl'
import ProductCard from '@/app/catalogus/components/productCard'
import Pagination from '@/app/catalogus/components/pagination'
import {Product} from '@/app/catalogus/lib/types'
import Cards from '@/app/catalogus/components/cardsContainer'
import {PageProps} from '@/app/catalogus/lib/types'
import {getCategories, capitalize} from '@/app/catalogus/lib/utils'
import { geist } from "@/app/catalogus/lib/fonts";



export default async function Catalogus({searchParams}:PageProps) {
    //getCategories() is een async functie, maar de promise wordt doorgegeven aan een Child component in een Suspense.
    const categories = getCategories() // 
    const searchParamateres = await searchParams
    const categorie = typeof searchParamateres.categorie === "string" 
                        ? searchParamateres.categorie
                        : searchParamateres.categorie?.[0] ?? "";
    const hasParams = Object.keys(searchParamateres).length > 0
  return (
    <section className="page-tsx">
        <h2 className={"heading-overview" + " " + geist.className}>{hasParams && searchParamateres.categorie ? capitalize(categorie) : "Alle Producten"}</h2>
            <ProductListControl categories={categories}/>
            <Suspense fallback="loading products...">
                <Cards searchParams={hasParams ? searchParamateres : undefined}/>
            </Suspense>
        </section>
    )
}
