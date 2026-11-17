import {fetchData} from '@/app/catalogus/lib/data'
import {Product, Query, ProductDetails, Paginated, Sort} from "./types"

export async function getAllProducts():Promise<ProductDetails[] | undefined> {
    let products = await fetchData()
    if (!products) {
        console.error("Error getAllProducts, zie logs.")
        return
    }
    return products

}

// deze functie levert alle producten in een Array aan. Als de relevante properties aanwezig zijn in 'query', 
// worden de filter, sort of zoek functies ge-called. 'paginate' wordt altijd ge-called om maar een selectie producten aan te leveren.
export async function getModifiedProducts(query: Query):Promise<ProductDetails[] | undefined> {
    let products = await fetchData()
    if (!products) {
        console.error("Error getModifiedProducts, zie logs.")
        return
    }
    if (query.filter) products = filter(products, query.filter)
    if (query.search) products = search(products, query.search)
    if (query.sort) products = sort(products, query.sort)
    console.log("products returned after modifications & pagination:", products)
    return products

}

// pageNr heeft een default value of 1 als deze parameter niet meegegeven is
// Hoeveel items zitten er in een array? Wat gebeurd er als de eind index groter is als de lengte van de array? 
export function paginate (products:ProductDetails[], pageNr:number = 1):Paginated {
    const productsPerPage = 8
    const endIndex = productsPerPage * pageNr
    const startIndex = endIndex - productsPerPage
    return {
        pages: Math.ceil(products.length / productsPerPage),
        paginatedProducts: products.slice(startIndex, endIndex) // wanneer endIndex groter is dan array.length, alle resterende elementen worden  ge-returned.  

    }
}

export function getCategories () {
    const data 
} 

function filter(products:ProductDetails[], filter:string) {
    return products.filter(p => (p.category === filter))
}

function search (products:ProductDetails[], term:string) {
    console.log(term)
    return products.filter(p => (p.title.toLowerCase().includes(term.toLowerCase())))
}

function sort (products:ProductDetails[], order:string) {
    return [...products].sort((a, b) => (order === "desc" ? b.price - a.price : a.price - b.price ))
}
