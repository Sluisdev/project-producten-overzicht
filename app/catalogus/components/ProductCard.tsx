import { capitalize, shortDescription, shortTitle } from "../lib/utils"
export default function ProductCard ({details}) {
    return (
        <li className="product-card">
            <section className="img-container">
                <img src={details.image} alt={details.category} />

            </section>
            <section className="body-card">
                <div >
                    <h3>{shortTitle(details.title)}</h3>
                </div>
                <p>{shortDescription(details.description)}</p>
                <div className="card-price-category">
                    <p><b>Prijs:</b> €{details.price}</p>
                    <p>{capitalize(details.category)}</p>
                </div>
            </section>
            
        </li>
    )
}