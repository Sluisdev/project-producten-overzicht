'use client'

import {useState, Suspense} from 'react'
import ProductListControl  from './ProductListControl'
import ProductCard from './ProductCard'
import Pagination from './Pagination'
import {Product} from '@/app/catalogus/lib/types'


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