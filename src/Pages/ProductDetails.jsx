import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { request } from 'graphql-request';

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Assuming you have a function to fetch product details from the API
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3444/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [slug]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const { Availability_, Description, Image, Name, Price, Stock } = product;

  return (
    <div className="product-detail">
      <img src={Image[0]} alt={Name} />
      <h2>{Name}</h2>
      <p dangerouslySetInnerHTML={{ __html: Description }} />
      <p>Price: ${Price}</p>
      <p>Availability: {Availability_ ? 'In Stock' : 'Out of Stock'}</p>
      <p>Stock: {Stock}</p>
    </div>
  );
};

export default ProductDetail;