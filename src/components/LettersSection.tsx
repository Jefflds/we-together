import React, { useState } from 'react';
import { Mail, Gift, ChevronRight, X } from 'lucide-react';
import { letterData } from '../data/letterData';
import { DailyLetter } from '../types';

const LetterModal: React.FC<{ 
  letter: DailyLetter | null; 
  onClose: () => void;
}> = ({ letter, onClose }) => {
  if (!letter) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-pink-800">{letter.title}</h3>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <X size={24} />
            </button>
          </div>
          
          <p className="text-gray-600 mb-6">
            {letter.letterContent || "Conteúdo da carta será revelado na data especial..."}
          </p>
          
          {letter.giftImageUrl && (
            <div className="rounded-lg overflow-hidden">
              <img 
                src={letter.giftImageUrl} 
                alt={`Presente para ${letter.title}`}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const LetterCard: React.FC<{ 
  letter: DailyLetter; 
  onClick: (letter: DailyLetter) => void;
}> = ({ letter, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg"
      onClick={() => onClick(letter)}
    >
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <span className="bg-pink-100 text-pink-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            Dia {letter.day}
          </span>
          <span className="text-sm text-gray-500">{letter.date}</span>
        </div>
        <h3 className="text-lg font-semibold text-pink-800 mb-2">{letter.title}</h3>
        <div className="flex justify-between items-center text-pink-600">
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-1" />
            <span className="text-sm">Carta</span>
          </div>
          <div className="flex items-center">
            <Gift className="w-4 h-4 mr-1" />
            <span className="text-sm">Presente</span>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-pink-500 to-pink-600 px-4 py-2 text-white text-sm flex justify-center items-center cursor-pointer">
        <span>Abrir</span>
        <ChevronRight className="w-4 h-4 ml-1" />
      </div>
    </div>
  );
};

const LettersSection: React.FC = () => {
  const [selectedLetter, setSelectedLetter] = useState<DailyLetter | null>(null);
  
  const openLetter = (letter: DailyLetter) => {
    setSelectedLetter(letter);
  };
  
  const closeLetter = () => {
    setSelectedLetter(null);
  };
  
  return (
    <section id="letters" className="py-16 bg-gradient-to-b from-pink-50 to-pink-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-pink-200 p-3 rounded-full mb-4">
            <Mail className="w-8 h-8 text-pink-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">
            Cartas e Presentes
          </h2>
          <p className="text-pink-600 max-w-2xl mx-auto">
            De 5 a 11 de junho, cada dia terá uma carta especial e um presente planejado para você.
            Clique em cada carta para descobrir a surpresa!
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {letterData.map((letter) => (
            <LetterCard 
              key={letter.day} 
              letter={letter} 
              onClick={openLetter}
            />
          ))}
        </div>
        
        {selectedLetter && (
          <LetterModal letter={selectedLetter} onClose={closeLetter} />
        )}
      </div>
    </section>
  );
};

export default LettersSection;