import React from "react";

const ProductCard = ({ product }) => (
  <div className="border p-4 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
    <p className="text-gray-700 mb-2">{product.description}</p>
    <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
  </div>
);

export default ProductCard;
