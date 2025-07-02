import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';

const ProductListPage = ({ onAddToCart }) => {

    // Hook para obtener los productos y el estado de carga
    const { products, loading } = useProducts();

    // Estado para almacenar los productos filtrados
    const [filteredProducts, setFilteredProducts] = useState([]);
  
    // Hook para obtener los parámetros de la URL (para la búsqueda)
    const location = useLocation();

    // Extrae el término de búsqueda de los parámetros de la URL
    const queryParams = new URLSearchParams(location.search);

    // Obtiene el término de búsqueda, o un string vacío si no existe
    const searchTerm = queryParams.get('search') || '';

    useEffect(() => {

        if (!loading) {

            const filtered = products.filter(p => 
                p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.category.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    }, [searchTerm, products, loading]);

    if (loading) {
        return <h2>Cargando...</h2>;
    }

    return (
        <div>
            <h1>{searchTerm ? `Resultados para "${searchTerm}"` : "Todos los Productos"}</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {filteredProducts.length > 0 ? 
                (
                    filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                    ))
                ) : 
                (
                    <p>No se encontraron productos.</p>
                )}
            </div>
        </div>
    );
};

export default ProductListPage;
