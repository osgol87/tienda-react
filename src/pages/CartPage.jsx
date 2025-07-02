import React from 'react';

const CartPage = ({ cartItems, onRemoveFromCart }) => {

    // Calcula el precio total del carrito
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div>
            <h1>Tu Carrito de Compras</h1>
            {cartItems.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <div key={item.id} style={styles.cartItem}>
                            <img src={`/${item.imageUrl}`} alt={item.name} style={styles.image} />
                            <div style={styles.itemDetails}>
                                <h2>{item.name}</h2>
                                <p>Cantidad: {item.quantity}</p>
                                <p>Precio: ${item.price.toFixed(2)}</p>
                            </div>
                            <button onClick={() => onRemoveFromCart(item.id)} style={styles.removeButton}>
                                Eliminar
                            </button>
                        </div>
                    ))}
                    <div style={styles.total}>
                        <h2>Total: ${totalPrice.toFixed(2)}</h2>
                        <button style={styles.checkoutButton}>Proceder al Pago</button>
                    </div>
                </div>
            )}
        </div>
    );
};

const styles = {
    cartItem: { display: 'flex', alignItems: 'center', marginBottom: '1rem', padding: '1rem', border: '1px solid #ddd' },
    image: { width: '100px', height: '100px', marginRight: '1rem' },
    itemDetails: { flex: 1 },
    removeButton: { backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '0.5rem 1rem', cursor: 'pointer' },
    total: { marginTop: '2rem', textAlign: 'right' },
    checkoutButton: { backgroundColor: '#28a745', color: 'white', border: 'none', padding: '1rem 2rem', fontSize: '1.2rem', cursor: 'pointer' }
};

export default CartPage;
