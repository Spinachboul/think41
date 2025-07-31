import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProductById } from "../api/productApi";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductById(id).then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <p className="p-4">Loading product details...</p>;

  if (!product) return <p className="p-4">Product not found.</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="mt-2 text-gray-700">{product.description}</p>
      <p className="mt-2 text-lg font-bold">${product.price.toFixed(2)}</p>
      <Link to="/" className="text-blue-500 underline mt-4 block">← Back to products</Link>
    </div>
  );
};

export default ProductDetail;
