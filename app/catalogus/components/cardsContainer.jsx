import {getProducts} from '@/app/catalogus/lib/data'
import ProductCard from './ProductCard'

export default async function Cards () {
    const data = await getProducts()
    console.log(data)
    return (
        <section>
            {data.products.map(e => (<ProductCard key={e.id}/>))}
        </section>
    )
}