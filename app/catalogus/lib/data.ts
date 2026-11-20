import { cacheLife, cacheTag } from "next/cache"
import {Product, Query, ProductDetails, Paginated} from "@/app/catalogus/lib/types"

// Data fetching functie, wordt gecached om API calls te verminderen
export async function fetchData():Promise<ProductDetails[] | undefined>{
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





