import { useState, useEffect } from "react";
import productsData from "../data/products";

// Custom Hook para manejar la lógica de los productos
export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Simula una llamada a una API
  useEffect(() => {
    // Simula un retraso de red de 1 segundo
    setTimeout(() => {
      setProducts(productsData);
      setLoading(false);
    }, 1000);
  }, []);

  return { products, loading };
};
