import {fetchData} from '@/app/catalogus/lib/data'
import {Product, Query, ProductDetails, Paginated, Sort} from "@/app/catalogus/lib/types"
import { cacheLife, cacheTag } from 'next/cache'

// levert alle producten aan
export async function getAllProducts():Promise<ProductDetails[] | undefined> {
    try {
        let products = await fetchData()
         return products
    } catch (error) {
        console.error("Error getAllProducts, zie logs:", error)
         return
    }

}

//Wanneer filter, sorteer, en/of de zoek functies gebruikt worden, levert deze functie de gemodificeerde data terug. 
export async function getModifiedProducts(query: Partial<Query>):Promise<ProductDetails[] | undefined> {
    let products = await fetchData()
    if (!products) {
        console.error("Error getModifiedProducts, zie logs.")
        return
    }
    if (query.categorie) products = filter(products, query.categorie)
    if (query.zoek) products = search(products, query.zoek)
    if (query.sorteer) products = sort(products, query.sorteer)
    return products

}

// Deze functie geeft alleen het deel van de product data terug op basis van de pagina nummer. 
export function paginate (products:ProductDetails[], pageNr:number):Paginated {
    const productsPerPage = 8 // Zou mooier zijn om dit progammatisch te bepalen op basis van scherm grote.
    const endIndex = productsPerPage * pageNr
    const startIndex = endIndex - productsPerPage
    return {
        pages: Math.ceil(products.length / productsPerPage),
        paginatedProducts: products.slice(startIndex, endIndex) // wanneer endIndex groter is dan array.length, alle resterende elementen worden  ge-returned.  

    }
}


// Maakt eerst een nieuwe array met alle categorieën & gebruikt dan Set om een nieuwe Array te maken met alleen unieke waardes.
export async function getCategories ():Promise<string[]> {
    try {
        const data = await fetchData()
        const categories = typeof data === 'object' ? data.map(e => (e.category)) : []
        return Array.from(new Set(categories))
    } catch (e) {
        console.error("Error in functie getCategories", e)
        return []
    }
    
    
}

export function capitalize(string: string):string {
    return `${string.slice(0, 1).toUpperCase()}${string.slice(1, string.length)}`
}

export function shortDescription(string: string):string {
    return `${string.slice(0, 150)}.....`
}

export function shortTitle(string: string):string {
    const result = string.split(" ").slice(0, 3).join(" ")
    return result
}

export function copyrightYear():string {
    return new Date().getFullYear.toString()
} // moet ge-prerendered worden voordat deze in een Component gebruikt kan worden. 

// filtered product data per gegeven categorie
function filter(products:ProductDetails[], filter:string) {
    return products.filter(p => (p.category === filter))
}

// filtered product data per gegeven zoek term
function search (products:ProductDetails[], term:string) {
    return products.filter(p => (p.title.toLowerCase().includes(term.toLowerCase())))
}

// sorteert product data op basis van prijs
function sort (products:ProductDetails[], order:string) {
    const splitIndex = order.indexOf(" ")
    const isDescening = order.slice(0, splitIndex - 1) === "aflopend"
    return [...products].sort((a, b) => (isDescening ? b.price - a.price : a.price - b.price ))
}
