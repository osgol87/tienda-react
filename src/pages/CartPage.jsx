import React from 'react';

const CartPage = ({ cartItems, onRemoveFromCart }) => {

    // Calcula el precio total del carrito
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className='cart'>
            <h1 className='cart__title'>Tu Carrito de Compras</h1>
            {cartItems.length === 0 ? (
                <p className='cart__empty--message'>Tu carrito está vacío.</p>
            ) : (
                <div className='cart__items'>
                    {cartItems.map(item => (
                        <div key={item.id} className='cart__item'>
                            <img src={`/${item.imageUrl}`} alt={item.name} className='cart__item-image' />
                            <div className='cart__item-details'>
                                <h2 className='cart__item-name'>{item.name}</h2>
                                <p className='cart__item-quantity'>Cantidad: {item.quantity}</p>
                                <p className='cart__item-price'>Precio: ${item.price.toFixed(2)}</p>
                            </div>
                            <button onClick={() => onRemoveFromCart(item.id)} className='cart__item-remove-button'>
                                Eliminar
                            </button>
                        </div>
                    ))}
                    <div className='cart__summary'>
                        <h2 className='cart__summary-total'>Total: ${totalPrice.toFixed(2)}</h2>
                        <button className='cart__summary-checkout-button'>Proceder al Pago</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
