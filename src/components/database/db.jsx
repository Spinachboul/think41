import React , {useState, useEffect} from 'react';

// make sample data
const Products = [
    {id : "prod001", name : "Laptop pro", description : "Powerful laptop woth all advancd features", price : 240},
    {id : "prod002", name : "Smartphone X", description : "Latest smartphone with cutting-edge technology", price : 999},
    {id : "prod003", name   : "Smartwatch", description : "Stylish smartwatch with health tracking", price : 199}, 
    {id : "prod004", name : "Wireless Earbuds", description : "High-quality wireless earbuds with noise cancellation", price : 149},
    {id : "prod005", name : "Gaming Console", description : "Next-gen gaming console with 4K support", price : 499},
    {id : "prod006", name : "Tablet Pro", description : "Versatile tablet with powerful performance", price :   599},
    {id : "prod007", name : "Smart TV", description : "4K Smart TV with HDR support", price : 799},
    {id : "prod008", name : "Bluetooth Speaker", description : "Portable Bluetooth speaker with deep bass", price : 89},
    {id : "prod009", name : "Digital Camera", description : "High-resolution digital camera for photography enthusiasts", price : 1299},
    {id : "prod010", name : "Fitness Tracker", description : "Advanced fitness tracker with heart rate monitor", price : 79} 
];

function App() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setProducts(Products);
            setLoading(false);
            setMessage("Products loaded successfully!");
        }, 500
    );
}, []);

if (loading){
    return(
        <div className = "flex items-center justify-center h-screen">
            <p className="text-2xl text-gray-500">Loading products...</p>
        </div>
    );
}

return(
    <div className = "container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Product List</h1>
        {message && <p className="text-green-500 mb-4">{message}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
                <div key={product.id} className="border p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                    <p className="text-gray-700 mb-2">{product.description}</p>
                    <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                </div>
            ))}
        </div>
    </div>
);
}

export default App;