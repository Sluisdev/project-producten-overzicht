export default function ProductCard ({details}) {
    return (
        <li className="border product-card">
            <img src="" alt="product-img" />
            <div>
                <h2>{details.title}</h2>
                <p>categorie</p>
            </div>
            <p>Omschrijving</p>
            <div>
                <p>Prijs</p>
                <button>Button</button>
            </div>
        </li>
    )
}