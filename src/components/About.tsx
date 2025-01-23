import React from 'react';
import espetariaImage from '../imgs/espetaria miro freitas.jpg'; // Importação da imagem

const About = () => {
  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-800">
            Sobre Nós
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={espetariaImage} // Uso da imagem importada
                alt="Nossa História"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Nossa História</h3>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis dolores cupiditate dolor neque, voluptas praesentium facere adipisci nemo fugiat libero quasi quos nam dignissimos quod quis officiis quae. Tenetur, nemo.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4">Nossa Missão</h3>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ab, illo sint labore vero eaque nobis quae earum, est doloremque esse minus similique facere. Omnis dicta saepe cupiditate dignissimos minima.
              </p>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-amber-50 rounded-lg">
                  <h4 className="font-bold text-amber-800">+</h4>
                  <p className="text-sm text-gray-600">Lorem, ipsum dolor.</p>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg">
                  <h4 className="font-bold text-amber-800">10+</h4>
                  <p className="text-sm text-gray-600">Tipos de Espetos</p>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg">
                  <h4 className="font-bold text-amber-800">2k+</h4>
                  <p className="text-sm text-gray-600">Clientes Felizes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;