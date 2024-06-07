import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../context/CartContext';

function CheckoutPage() {
  document.title = 'Checkout | E-shop';
  const { cartItems, totalAmount, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    clearCart();
    navigate('/checkout-success');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1>Checkout</h1>
          <h2>Order Summary</h2>
          {cartItems.length === 0 ? (
            <>
              <div className="alert alert-warning" role="alert">
                Your cart is empty.
              </div>
              <Link to="/" className="btn btn-primary mt-3">
              « Back to Home
              </Link>
            </>
          ) : (
            <ul className="list-group mb-3">
              {cartItems.map((item) => (
                <li key={item.id} className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                  <div className="d-flex align-items-center flex-column flex-md-row">
                    <img src={item.image.url} className="card-img-top checkoutImg mb-3 me-md-3" alt={item.title} />
                    <div className="d-flex flex-column">
                      <h6 className="my-0">{item.title}</h6>
                      <small className="text-muted">{item.description}</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-md-0 mt-3">
                    <span className="text-muted me-3">${item.price}</span>
                    <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>${totalAmount}</strong>
              </li>
            </ul>
          )}
          {cartItems.length > 0 && (
            <button type="button" className="btn btn-success" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
