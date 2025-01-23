import React from 'react';
import espetariaImage from '../imgs/espetaria miro freitas.jpg'; // Importação da imagem

const About = () => {
  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto"> {/* Aumentei o max-width para 6xl */}
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-800">
            Sobre Nós
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Imagem (maior e com mais destaque) */}
            <div className="w-full h-full">
              <img
                src={espetariaImage}
                alt="Nossa História"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
            
            {/* Texto (organizado em colunas para melhor leitura) */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Nossa História</h3>
              <div className="columns-1 md:columns-2 gap-8">
                <p className="text-gray-600 mb-6">
                  A chave da felicidade é sonhar. A chave do sucesso é tornar os sonhos realidade.
                </p>
                <p className="text-gray-600 mb-6">
                  No dia 04 de agosto de 2023, um sonho se tornou realidade. Foi nessa data que nasceu a Espetaria Miro Freitas, fruto da união de dois amigos de longa data, Felipe Cordeiro e Miro Freitas, que compartilharam não apenas a amizade, mas também a vontade de transformar ideias em conquistas.
                </p>
                <p className="text-gray-600 mb-6">
                  O que começou como uma ideia, na imaginação de dois amigos determinados a alcançar seus objetivos, se concretizou em um espaço único. Um ambiente acolhedor e descontraído, criado para reunir amigos e famílias em torno de boa conversa, risadas, cerveja gelada e, claro, o melhor churrasquinho da região!
                </p>
                <p className="text-gray-600 mb-6">
                  Cada detalhe foi pensado com carinho para oferecer experiências marcantes. Desde a decoração rústica de madeira até o sabor especial dos espetinhos que conquistaram nossos clientes. Não se trata apenas de um lugar para comer, mas de um espaço onde celebramos momentos especiais com todos que nos prestigiam.
                </p>
                <p className="text-gray-600 mb-6">
                  No último final de semana, tivemos o prazer de receber pessoas incríveis que contribuíram para o sucesso desse projeto. Gostaríamos de agradecer imensamente a cada um que esteve conosco e fez parte da nossa história.
                </p>
                <p className="text-gray-600 mb-6">
                  Nosso objetivo é simples: proporcionar momentos felizes, fortalecer laços e criar memórias inesquecíveis. A jornada da Espetaria Miro Freitas está apenas começando, e esperamos viver muitos momentos incríveis ao lado de vocês.
                </p>
                <p className="text-gray-600 mb-6">
                  Venham nos visitar, e juntos, continuaremos escrevendo essa história repleta de sabor e alegria.
                </p>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Nossa Missão</h3>
              <p className="text-gray-600 mb-6">
                Proporcionar momentos únicos de alegria e descontração, reunindo pessoas em um ambiente acolhedor para compartilhar boa conversa, risadas e o sabor especial do melhor espetinho, sempre com qualidade, carinho e excelência no atendimento.
              </p>
              
              {/* Estatísticas (em linha para melhor visualização) */}
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