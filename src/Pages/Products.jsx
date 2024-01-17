import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { Name, Description, Price, Image, collectionId, id } = product;
  const imageUrl = `http://127.0.0.1:8090/api/files/${collectionId}/${id}/${Image[0]}`;

  return (
    <div className="product-card">
      <img src={imageUrl} alt={Name} className="cocktail-img" />
      <h3>{Name}</h3>
      <p dangerouslySetInnerHTML={{ __html: Description }}></p>
      <p>Price: ${Price}</p>
      <Link to={`/products/${product.slug}`}>
      <button>Add to Cart</button>
      </Link>
    </div>
  );
};
const Products = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3444/')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

	return (
	    <>
	    <p>Rendered </p>
    <div className="container">
      <button className="btn" >
        Go Back
      </button>

      <div className="cocktails-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    </>
  );
};
export default Products;
