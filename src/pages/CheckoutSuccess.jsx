import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function CheckoutSuccessPage() {
  return (
    <div className="container">      
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center mt-5">
          <h1>Order Successful!</h1>
          <p>Thank you for your purchase. Your order has been successfully processed.</p>
          <Link to="/" className="btn btn-primary m-3">
          « Back to Home 
          </Link>
        </div>
      </div>     
    </div>
  );
}

export default CheckoutSuccessPage;
