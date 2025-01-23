import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[600px] mt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">
            Espetaria Miro Freitas
          </h1>
          <p className="text-xl mb-8">
            Sabores únicos em cada espeto, tradição e qualidade desde 1995.
            Uma experiência gastronômica inesquecível para você e sua família.
          </p>
          <a 
            href="#menu"
            className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg
                     hover:bg-amber-700 transition duration-300"
          >
            Ver Cardápio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;