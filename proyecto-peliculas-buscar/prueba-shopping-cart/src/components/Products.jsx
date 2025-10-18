import './Products.css'
import { AddToCartIcon } from './Icons.jsx'

export function Products({ products, onAddToCart }) {
    return (
        <main className="products">
            <ul>
                {products.map(product => (
                    <li key={product.id} className="product">
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                        />
                        <div>
                            <strong>{product.title} - ${product.price}</strong>
                        </div>
                        <div>
                            <button
                                className="add-to-cart-button"
                                onClick={() => onAddToCart(product)}
                            >
                                <AddToCartIcon />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}
