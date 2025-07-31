const mockProducts = [
  { id: "prod001", name: "Laptop Pro", description: "Powerful laptop", price: 240 },
  { id: "prod002", name: "Smartphone X", description: "Latest phone", price: 999 },
  { id: "prod003", name: "Smartwatch", description: "Tracks health", price: 199 },
];

export const fetchAllProducts = () =>
  fetch("/api/products") // fake call to show up in dev tools
    .then(() => new Promise((res) => setTimeout(() => res(mockProducts), 500)));

export const fetchProductById = (id) =>
  fetch(`/api/products/${id}`)
    .then(() => new Promise((res) => setTimeout(() => {
      const product = mockProducts.find((p) => p.id === id);
      res(product || null);
    }, 500)));
