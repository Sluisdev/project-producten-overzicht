import {JSX} from 'react'

export function Footer ():JSX.Element {
    return <footer className="footer"></footer>
}

export function Header ():JSX.Element {
    return (
        <header className="header">
            <ul>
                <li><a href="/catalogus">Home</a></li>
                <li><a href="/catalogus">Catalogus</a></li>
            </ul>
            <div className='shoppingCart'>
                <button className='shoppingCart not-allowed'>
                    <img src="/shopping_cart.svg" alt="" />
                </button>
            </div>
        </header>
    )
}