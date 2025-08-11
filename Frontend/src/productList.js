import React, { useEffect, useState } from 'react';
import ProductName from './productname';
import ProductPrice from './ProductPrice';
import ProductDescription from './ProductDescription';
import ProductCategory from './ProductCategory';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Failed to fetch products', err));
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, index) => (
            <tr key={index}>
              <ProductName name={p.name} />
              <ProductPrice price={p.price} />
              <ProductDescription description={p.description} />
              <ProductCategory category={p.category} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
