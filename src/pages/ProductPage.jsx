import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../context/CartContext';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [addToCartSuccess, setAddToCartSuccess] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const APIURL = `https://v2.api.noroff.dev/online-shop/${id}`;
      try {
        const response = await fetch(APIURL);
        if (!response.ok) {
          throw new Error('API response was not ok');
        }
        const data = await response.json();
        setProduct(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    setAddToCartSuccess(true);
    setTimeout(() => setAddToCartSuccess(false), 2000);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">     
      {product && (
        <div className="row">
          <div className="col-md-6">
            <img src={product.image.url} alt={product.title} className="img-fluid productimg2 rounded mx-auto d-block mt-3" />
          </div>
          <div className="col-md-6">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Rating: {'⭐'.repeat(product.rating)}</p>
            <p>
              {product.discountedPrice < product.price ? (
                <span>
                  <strong className="text-danger">Discounted Price: ${product.discountedPrice}</strong>
                  <br />
                  <span className="text-muted text-decoration-line-through">
                    Original Price: ${product.price}
                  </span>
                </span>
              ) : (
                <strong>Price: ${product.price}</strong>
              )}
            </p>
            <button className="btn btn-primary" onClick={handleAddToCart}>
              Add to Cart
            </button>
            {addToCartSuccess && <div className="alert alert-success mt-2">Item added to cart!</div>}
          </div>
        </div>
      )}
      {product && product.reviews && product.reviews.length > 0 && (
        <div className="row mt-5">
          <div className="col-md-12">
            <h2>Reviews</h2>
            {product.reviews.map((review) => (
              <div key={review.id} className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">{review.username}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Rating: {'⭐'.repeat(review.rating)}</h6>
                  <p className="card-text">{review.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
