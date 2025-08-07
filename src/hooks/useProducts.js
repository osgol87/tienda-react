import { useState, useEffect } from 'react';

export const useProducts = (searchTerm = '') => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);
            try {
                const gatewayUrl = import.meta.env.VITE_API_GATEWAY_URL;
                const productsPath = import.meta.env.VITE_API_PRODUCTS_URL;
                const baseUrl = (gatewayUrl && productsPath) ? `${gatewayUrl}${productsPath}` : 'http://localhost:8080/productservice/products';

                // Si se proporciona un término de búsqueda, lo añadimos a la URL.
                // Asumimos que la API soporta un parámetro `search` para filtrar.
                const apiUrl = searchTerm
                    ? `${baseUrl}?search=${encodeURIComponent(searchTerm)}`
                    : baseUrl;

                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Error al obtener los productos');
                }
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [searchTerm]);

    return { products, loading, error };
};