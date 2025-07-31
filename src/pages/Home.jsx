import React, { useEffect, useState } from "react";
import ProductAPI from "../api/productApi";
import ProductCard from "../components/ProductCard";
import TestProduct from "../components/TestProduct";

window.ProductAPI = ProductAPI;

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [testProduct, setTestProduct] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      setMessage("Fetching products...");
      try {
        const allProds = await ProductAPI.getAllProducts();
        setProducts(allProds);

        const test = await ProductAPI.getProductById("prod003");
        setTestProduct(test);

        setMessage("Products loaded successfully!");
      } catch (error) {
        console.error("Error:", error);
        setMessage("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl text-gray-500">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Product List</h1>
      {message && <p className="text-green-500 mb-4">{message}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {testProduct && <TestProduct product={testProduct} />}
    </div>
  );
};

export default Home;
