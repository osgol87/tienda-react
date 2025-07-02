import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProductListPage from './pages/ProductListPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import CartPage from './pages/CartPage'
import './styles/styles.css'

const SneakerStoreApp = () => {

  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (product) => {
    
    // Actualiza el contador de productos en el carrito
    setCartItems((prevItems) => {

      // Revisa si el producto ya está en el carrito
      const existingItem = prevItems.find(item => item.id === product.id);

      if (existingItem) {

        // Si ya está, incrementa la cantidad
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 }
          : item
        );
      }
      
      // Si no está, añade el producto con cantidad 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId) => {

    // Elimina un producto del carrito
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  return (
    <Router>
        <Header cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)} />
        <main>
          <Routes>
            <Route path='/' element={<HomePage onAddToCart={handleAddToCart} />} />
            <Route path='/products' element={<ProductListPage onAddToCart={handleAddToCart} />} />
            <Route path='/products/:id' element={<ProductDetailsPage onAddToCart={handleAddToCart} />} />
            <Route path='/cart' element={<CartPage cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />} />
            { /* Agregar /returns /contact */ }
          </Routes>
        </main>
        <Footer />
    </Router>
  )
}

export default SneakerStoreApp
