import initialProducts from "../data/products";

const ProductAPI = {
  getAllProducts: () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(initialProducts), 300);
    }),

  getProductById: (id) =>
    new Promise((resolve) => {
      setTimeout(() => {
        const product = initialProducts.find((p) => p.id === id);
        resolve(product || null);
      }, 300);
    }),
};

export default ProductAPI;
