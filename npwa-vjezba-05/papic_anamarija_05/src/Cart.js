import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  return (
    <div>
      <Link to="/" className="home-button">
        Home
      </Link>

      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.name}>
            {item.displayName} - Quantity: {item.quantity}
            <button onClick={() => handleRemoveFromCart(item)}>Remove from Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
