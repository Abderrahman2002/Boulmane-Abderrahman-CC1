import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="aspect-square">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold line-clamp-1">{product.name}</h3>
          <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs font-semibold rounded-full">
            {product.category}
          </span>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2 mb-2">{product.description}</p>
        <p className="text-xl font-bold text-blue-600">{product.price.toFixed(2)} €</p>
        <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

// Define prop types for ProductCard
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default function EcommerceApp() {
  const products = [
    {
      id: 1,
      name: "Smartphone XY",
      category: "Électronique",
      price: 599.99,
      description: "Un smartphone puissant avec appareil photo haute résolution",
      image: "/images/image5.webp" // Ensure the path is correct
    },
    {
      id: 2,
      name: "Chemise Classic",
      category: "Vêtements",
      price: 49.99,
      description: "Chemise élégante en coton de haute qualité",
      image: "/images/image6.webp" // Ensure the path is correct
    },
    {
      id: 3,
      name: "Tablette Pro",
      category: "Électronique",
      price: 399.99,
      description: "Tablette performante pour les professionnels",
      image: "/images/image9.webp" // Ensure the path is correct
    },
    {
      id: 4,
      name: "Jean Slim",
      category: "Vêtements",
      price: 79.99,
      description: "Jean confortable et tendance",
      image: "/images/image10.webp" // Ensure the path is correct
    }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("Tous");

  const categories = ["Tous", ...Array.from(new Set(products.map(product => product.category)))];

  const filteredProducts = selectedCategory === "Tous"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Notre Boutique en Ligne</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Catégories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full font-semibold transition duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
