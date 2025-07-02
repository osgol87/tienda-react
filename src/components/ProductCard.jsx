import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div style={styles.card}>
            <Link to={`/products/${product.id}`}>
                <img src={`/${product.imageUrl}`} alt={product.name} style={styles.image} />
            </Link>
            <div style={styles.cardBody}>
                <h3 style={styles.title}>{product.name}</h3>
                <p style={styles.brand}>{product.shortDescription}</p>
                <p style={styles.brand}>Por {product.brand}</p>
                <p style={styles.price}>${product.price.toFixed(2)}</p>
                <button onClick={() => onAddToCart(product)} style={styles.button}>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    );
};

const styles = {
    card: { border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', width: '300px', margin: '1rem' },
    image: { width: '100%', height: '200px', objectFit: 'cover' },
    cardBody: { padding: '1rem' },
    title: { fontSize: '1.2rem', margin: '0 0 0.5rem 0' },
    brand: { color: '#777', margin: '0 0 1rem 0' },
    price: { fontWeight: 'bold', fontSize: '1.1rem' },
    button: { width: '100%', padding: '0.75rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

export default ProductCard;
