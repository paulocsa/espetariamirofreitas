import React, { useState } from 'react';
import { Menu, ShoppingCart, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-black shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
        <div className="text-3xl font-bold text-white" style={{ fontFamily: 'Adagio Serif', fontWeight: 'bold' }}>
  Espetaria Miro Freitas
</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#menu" className="text-white hover:text-amber-600">Cardápio</a>
            {/* <a href="#promotions" className="text-white hover:text-amber-600">Promoções</a> */}
            <a href="#about" className="text-white hover:text-amber-600">Sobre Nós</a>
            <a href="#contact" className="text-white hover:text-amber-600">Contato</a>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#menu" 
                className="text-gray-700 hover:text-amber-600 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Cardápio
              </a>
              <a 
                href="#promotions" 
                className="text-gray-700 hover:text-amber-600 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Promoções
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-amber-600 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-amber-600 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;