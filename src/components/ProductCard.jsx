import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div className="border p-4 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold">{product.name}</h2>
    <p className="text-gray-600">{product.description}</p>
    <p className="text-lg font-bold mb-2">${product.price.toFixed(2)}</p>
    <Link to={`/product/${product.id}`} className="text-blue-500 underline">
      View Details
    </Link>
  </div>
);

export default ProductCard;
    