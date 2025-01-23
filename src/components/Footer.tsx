import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white"> {/* Fundo preto e texto branco */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sobre a Espetaria */}
          <div>
            <h3 className="text-xl font-bold mb-4">Espetaria Miro Freitas</h3>
            <p className="text-gray-300"> {/* Texto cinza claro */}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, eveniet?
            </p>
          </div>
          
          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#menu" className="hover:text-amber-300">Cardápio</a></li>
              <li><a href="#about" className="hover:text-amber-300">Sobre Nós</a></li>
              <li><a href="#contact" className="hover:text-amber-300">Contato</a></li>
            </ul>
          </div>
          
          {/* Horário de Funcionamento */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horário de Funcionamento</h4>
            <ul className="space-y-2 text-gray-300"> {/* Texto cinza claro */}
              <li>Terça a Quinta das 16h às 23h</li>
              <li>Sexta a Domingo das 16h às 00h</li>
            </ul>
          </div>
          
          {/* Redes Sociais */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-amber-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-amber-300">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Rodapé Inferior */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300"> {/* Borda e texto cinza claro */}
          <p>&copy; {new Date().getFullYear()} Espetaria Miro Freitas. Desenvolvido por paulocsa.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;