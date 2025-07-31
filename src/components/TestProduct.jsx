import React from "react";

const TestProduct = ({ product }) => (
  <div className="mt-8 p-4 border rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-2">Test Product</h2>
    <p><strong>ID:</strong> {product.id}</p>
    <p><strong>Name:</strong> {product.name}</p>
    <p><strong>Description:</strong> {product.description}</p>
    <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
  </div>
);

export default TestProduct;
