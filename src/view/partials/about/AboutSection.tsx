import React from 'react';
import { BookOpen, Scale, Pen, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-pink-200 p-3 rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-pink-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">
            Sobre Você
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-pink-100 to-pink-200 rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-pink-800 mb-6">
            Em breve, a advogada mais incrível!
          </h3>
          
          <p className="text-lg text-pink-700 mb-8 leading-relaxed">
            Sua dedicação aos estudos de Direito é inspiradora. A forma como você 
            enfrenta cada desafio, estuda cada lei e prepara cada argumento 
            mostra a profissional excepcional que você está se tornando. 
            Seu comprometimento e paixão pelo Direito são qualidades que admiro profundamente.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-md mb-3">
                <BookOpen className="w-10 h-10 text-pink-600" />
              </div>
              <span className="text-pink-700 font-medium">Conhecimento</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-md mb-3">
                <Scale className="w-10 h-10 text-pink-600" id="law-books-icon" />
              </div>
              <span className="text-pink-700 font-medium">Justiça</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-md mb-3">
                <Pen className="w-10 h-10 text-pink-600" />
              </div>
              <span className="text-pink-700 font-medium">Dedicação</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-md mb-3">
                <Award className="w-10 h-10 text-pink-600" />
              </div>
              <span className="text-pink-700 font-medium">Excelência</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;