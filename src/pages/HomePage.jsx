import React from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';

const HomePage = ({ onAddToCart }) => {
    
    // Obtiene los productos y el estado de carga desde el hook personalizado
    const { products, loading } = useProducts();

    if (loading) {
        // Muestra un mensaje de carga mientras se obtienen los productos
        return <h2>Cargando productos...</h2>;
    }

    return (
        <div>
            <h1>Bienvenidos a Speed Sneakers</h1>
            <p>Los mejores tenis, a un clic de distancia.</p>
            <h2>Productos Destacados</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {
                products
                    .slice(0, 3)
                    .map(product => ( // Muestra solo los primeros 3
                        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                    ))
                }
            </div>
        </div>
    );
};

export default HomePage;
