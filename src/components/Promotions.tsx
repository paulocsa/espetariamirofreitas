import React from 'react';

const promotions = [
  {
    id: 1,
    title: 'Combo Família',
    description: '4 espetos de picanha, 2 pães de alho, 2 refrigerantes 2L',
    price: 89.90,
    originalPrice: 120.00,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Happy Hour',
    description: '2 espetos + 1 cerveja artesanal',
    price: 39.90,
    originalPrice: 50.00,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const Promotions = () => {
  return (
    <section id="promotions" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-amber-800">
          Promoções Especiais
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {promotions.map((promo) => (
            <div 
              key={promo.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{promo.title}</h3>
                <p className="text-gray-600 mb-4">{promo.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-amber-600">
                      R$ {promo.price.toFixed(2)}
                    </span>
                    <span className="ml-2 text-lg text-gray-500 line-through">
                      R$ {promo.originalPrice.toFixed(2)}
                    </span>
                  </div>
                  <button className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition duration-300">
                    Aproveitar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;