import React from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';

const ProductDetailPage = ({ onAddToCart }) => {
    // useParams se usa para obtener los parámetros de la URL
    const { id } = useParams();

    // useProducts es un hook personalizado que obtiene los productos y su estado de carga
    const { products, loading } = useProducts();

    // useEffect se usa dentro de useProducts para cargar los datos
    const product = products.find(p => p.id === parseInt(id));

    console.log('Producto:', product);
    
    if (loading) {
        return <h2>Cargando...</h2>;
    }

    if (!product) {
        return <h2>Producto no encontrado</h2>;
    }

    return (
        <div style={styles.container}>
            <img src={`/${product.imageUrl}`} alt={product.name} style={styles.image} />
            <div style={styles.details}>
                <h1>{product.name}</h1>
                <p style={styles.brand}>Marca: {product.brand}</p>
                <p style={styles.price}>${product.price.toFixed(2)}</p>
                <p><strong>Descripción:</strong> {product.longDescription}</p>
                <button onClick={() => onAddToCart(product)} style={styles.button}>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: { display: 'flex', margin: '2rem', gap: '2rem' },
    image: { width: '400px', height: '400px', objectFit: 'cover', border: '1px solid #ddd' },
    details: { flex: 1 },
    brand: { color: '#555', fontSize: '1.1rem' },
    price: { fontWeight: 'bold', fontSize: '1.5rem', color: '#007bff' },
    button: { padding: '1rem 2rem', fontSize: '1.2rem', backgroundColor: '#28a745', color: 'white', border: 'none', cursor: 'pointer' }
};

export default ProductDetailPage;
