import React, { useState } from 'react';
import { Search } from 'lucide-react';

const menuItems = {
  carnes: [
    {
      id: 1,
      name: 'Picanha Premium',
      description: 'Espeto de picanha premium, temperada com sal grosso',
      price: 18.90,
      image: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Maminha',
      description: 'Espeto de maminha suculenta com temperos especiais',
      price: 16.90,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ],
  acompanhamentos: [
    {
      id: 3,
      name: 'Pão de Alho',
      description: 'Pão francês com manteiga e alho',
      price: 8.90,
      image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ],
  bebidas: [
    {
      id: 4,
      name: 'Cerveja Artesanal',
      description: 'Cerveja artesanal local 600ml',
      price: 12.90,
      image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ]
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('carnes');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'carnes', name: 'Carnes' },
    { id: 'acompanhamentos', name: 'Acompanhamentos' },
    { id: 'bebidas', name: 'Bebidas' }
  ];

  const filteredItems = menuItems[activeCategory as keyof typeof menuItems].filter(
    item => item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-amber-800">
          Nosso Cardápio
        </h2>

        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar no cardápio..."
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
          </div>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-2 rounded-md ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white'
                    : 'text-gray-600 hover:text-amber-600'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-600">
                    R$ {item.price.toFixed(2)}
                  </span>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;