'use client'

import {useState} from 'react'
import ProductListControl  from './ProductListControl'
import ProductCard from './ProductCard'

export default function ProductOverview() {

    return (
        <section>
            <h1>Alle Producten</h1>
            <ProductListControl/>
            <ul>
                <ProductCard />
            </ul>
        </section>
    )
}

// Auto-placement can detect whether an element already has a fixed position on the grid and will not place other grid items there. 

/* TO-DO
- Static Content first, components need to create and define: 

* ProductOverview - partially
* ProductListControl - partially
    * SearchField - V
    * Filter - V
    * Sort - V
*  Pagination - V
* Cards - V
* 




*/