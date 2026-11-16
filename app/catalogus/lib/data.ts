import { cacheLife, cacheTag } from "next/cache"
import {Product, Query, ProductDetails, Paginated} from "./types"

// Data fetching functie, wordt gecached om API calls te verminderen
async function fetchData():Promise<ProductDetails[] | undefined>{
    "use cache"
    cacheLife("hours")
    cacheTag("products")
    try {
        const data = await fetch("https://fakestoreapi.com/products")
        console.log("API call send and received:", data)
        const products = await data.json()
        // rating property wordt verwijdered
        return products.map((e:Product) => {const {rating, ...restProperties} = e; return restProperties})
    } catch (error){
        // throw new Error ("Oh no an error occurred!")
        console.error("fetchingData failed:", error)
        return
    }
}

// deze functie levert alle producten in een Array aan. Als de relevante properties aanwezig zijn in 'query', 
// worden de filter, sort of zoek functies ge-called. 'paginate' wordt altijd ge-called om maar een selectie producten aan te leveren.
//  
export async function getProducts(query: Query | undefined):Promise<Paginated | undefined> {
    let products = await fetchData()
    if (!products) {
        console.error("data fetch leverde geen data terug, zie error log.")
        return
    }
    if (query?.filter) products = filter(products, query.filter)
    if (query?.search) products = search(products, query.search)
    if (query?.sort) products = sort(products, query.sort)
    const productsPerPage = 10
    products = paginate(products, query?.page, productsPerPage)
    console.log("products returned after modifications & pagination:", products)
    return {
            pages: Math.ceil(products.length / productsPerPage ),
            products: products
        }

}

function paginate (products:ProductDetails[], pageNr: string | undefined, productsPerPage: number) {
    const pageNumber = Number(pageNr) || 1
    const endIndex = productsPerPage * pageNumber
    const startIndex = endIndex - productsPerPage
    return products.slice(startIndex, endIndex)
}

function filter(products:ProductDetails[], category:string) {
    return products.filter(p => (p.category === category))
}

function search (products:ProductDetails[], term:string) {
    return products.filter(p => (p.title.includes(term)))
}

function sort (products:ProductDetails[], order:string) {
    return [...products].sort((a, b) => (order === "desc" ? b.price - a.price : a.price - b.price ))
}

