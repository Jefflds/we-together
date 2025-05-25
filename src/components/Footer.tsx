import React from 'react';
import { Heart, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-500 to-pink-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <p className="text-xl font-semibold flex items-center justify-center mb-4">
            "Cada segundo ao seu lado é um presente."
            <Heart className="w-5 h-5 ml-2 animate-pulse" fill="white" />
          </p>
          
          <div className="flex justify-center space-x-4 mb-6">
            <a href="#" className="hover:text-pink-200 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-pink-200 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
          
          <p className="text-pink-100">
            Feito com <Heart className="w-4 h-4 inline-block" fill="white" /> por João para Ana
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;