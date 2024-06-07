import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card(props) {
  const navigate = useNavigate();
  const priceClass = props.isDiscounted ? 'text-danger' : '';
  const discountPercentage = ((props.price - props.discountedPrice) / props.price) * 100;
  const saleText = props.isDiscounted ? `On Sale! ${discountPercentage.toFixed(0)}% off ` : '';

  const handleButtonClick = () => {
    navigate(`/product/${props.id}`);
  };

  return (
    <div className="card m-2 col-8">
    <div className="card-container d-flex flex-column flex-md-row">
      <img src={props.image.url} className="card-img-top productimg order-md-2 mx-auto" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className={`card-text ${priceClass}`}>Price: {props.price}$ {saleText}</p>
        <button className="btn btn-dark" onClick={handleButtonClick}>View Product</button>
      </div>
    </div>
  </div>
  
  );
}

export default Card;
