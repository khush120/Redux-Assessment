
import React from 'react';
import styled from 'styled-components';

// Styled components for the product list and its elements
const ProductContainer = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  margin: 10px 0;
`;

const ProductName = styled.h3`
  font-size: 1.2em;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 1em;
  color: #555;
`;

const AddToCartButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #45a049;
  }
`;

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Product 1', price: 20 },
    { id: 2, name: 'Product 2', price: 30 },
    { id: 3, name: 'Product 3', price: 40 },
  ];

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <ProductContainer key={product.id}>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>Price: {product.price}</ProductPrice>
          <AddToCartButton onClick={() => addToCart(product)}>
            Add to Cart
          </AddToCartButton>
        </ProductContainer>
      ))}
    </div>
  );
};

export default ProductList;
