import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';

function ProductList() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const APIURL = 'https://v2.api.noroff.dev/online-shop';
    const fetchData = async () => {
      try {
        const response = await fetch(APIURL);
        if (!response.ok) {
          throw new Error('API response was not ok');
        }
        const data = await response.json();
        setAllProducts(data.data);
        setFilteredProducts(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="container">
     
      <SearchBar onSearch={handleSearch} />
      <div className="row justify-content-center">
        <div className="col-md-12 text-center">
          <h1>Products</h1>
          <div className="d-flex flex-wrap justify-content-center">
            {filteredProducts.map(product => {
              const { id, title, description, image, price, discountedPrice } = product;
              const isDiscounted = price !== discountedPrice;
              return (
                <Card
                  key={id}
                  id={id}             
                  title={title}
                  text={description}
                  image={image}
                  price={price}
                  discountedPrice={discountedPrice}
                  isDiscounted={isDiscounted}
                />
              );
            })}
          </div>
        </div>
      </div>     
    </div>
  );
}

export default ProductList;
