import React, { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-pink-200 to-pink-300 py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Heart className="w-8 h-8 text-pink-600 mr-2 animate-pulse" />
          <h1 className="text-2xl font-bold text-pink-800">Ana & João</h1>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-pink-800 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#countdown" className="text-pink-800 hover:text-pink-600 transition-colors">
            Contagem Regressiva
          </a>
          <a href="#about" className="text-pink-800 hover:text-pink-600 transition-colors">
            Sobre Você
          </a>
          <a href="#letters" className="text-pink-800 hover:text-pink-600 transition-colors">
            Cartas e Presentes
          </a>
          <a href="#easter-eggs" className="text-pink-800 hover:text-pink-600 transition-colors">
            Easter Eggs
          </a>
        </nav>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-pink-100 py-4 px-4 shadow-inner">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#countdown" 
              className="text-pink-800 hover:text-pink-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contagem Regressiva
            </a>
            <a 
              href="#about" 
              className="text-pink-800 hover:text-pink-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Você
            </a>
            <a 
              href="#letters" 
              className="text-pink-800 hover:text-pink-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Cartas e Presentes
            </a>
            <a 
              href="#easter-eggs" 
              className="text-pink-800 hover:text-pink-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Easter Eggs
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;