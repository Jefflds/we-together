import React, { useState, useEffect } from 'react';
import { Sparkles, Cake, Coffee } from 'lucide-react';
import { easterEggs } from '../data/easterEggs';
import { EasterEgg } from '../types';

const EasterEggSection: React.FC = () => {
  const [foundEggs, setFoundEggs] = useState<string[]>([]);
  const [showMessage, setShowMessage] = useState<string | null>(null);
  const [keyBuffer, setKeyBuffer] = useState<string>('');
  
  // Track keypresses for the secret code egg
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newBuffer = keyBuffer + e.key.toLowerCase();
      setKeyBuffer(newBuffer.slice(-4)); // Keep only the last 4 characters
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keyBuffer]);
  
  // Check if the love code is typed
  useEffect(() => {
    if (keyBuffer === 'amor') {
      const loveEgg = easterEggs.find(egg => egg.id === 'secret-code');
      if (loveEgg && !foundEggs.includes(loveEgg.id)) {
        discoverEgg(loveEgg);
      }
    }
  }, [keyBuffer, foundEggs]);
  
  const discoverEgg = (egg: EasterEgg) => {
    if (!foundEggs.includes(egg.id)) {
      setFoundEggs([...foundEggs, egg.id]);
      setShowMessage(egg.message);
      
      setTimeout(() => {
        setShowMessage(null);
      }, 3000);
    }
  };
  
  return (
    <section id="easter-eggs" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-pink-200 p-3 rounded-full mb-4">
            <Sparkles className="w-8 h-8 text-pink-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">
            Easter Eggs
          </h2>
          <p className="text-pink-600 max-w-2xl mx-auto">
            Existem várias surpresas escondidas por toda a página. 
            Encontre-as para desbloquear mensagens especiais!
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-pink-50 rounded-xl shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold text-pink-700 mb-4">
              Dicas para encontrar os Easter Eggs:
            </h3>
            <ul className="space-y-3 text-pink-600">
              {easterEggs.map(egg => (
                <li key={egg.id} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{egg.hint}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-pink-200 rounded-lg p-5 flex items-center justify-center">
              <div 
                id="cake-icon"
                className="relative cursor-pointer"
                onDoubleClick={() => {
                  const egg = easterEggs.find(e => e.id === 'double-click');
                  if (egg) discoverEgg(egg);
                }}
              >
                <Cake className="w-20 h-20 text-pink-500" />
                <div className="absolute -top-1 -right-1">
                  {foundEggs.includes('double-click') && (
                    <div className="bg-pink-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                      ✓
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-pink-200 rounded-lg p-5 flex items-center justify-center">
              <div 
                id="pie-hover"
                className="relative"
                onMouseEnter={() => {
                  const egg = easterEggs.find(e => e.id === 'hover-photo');
                  if (egg) discoverEgg(egg);
                }}
              >
                <Coffee className="w-20 h-20 text-pink-500" />
                <div className="absolute -top-1 -right-1">
                  {foundEggs.includes('hover-photo') && (
                    <div className="bg-pink-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                      ✓
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Hidden heart for easter egg */}
          <div className="hidden">
            <div 
              id="hidden-heart-icon"
              onClick={() => {
                const egg = easterEggs.find(e => e.id === 'hidden-heart');
                if (egg) discoverEgg(egg);
              }}
            >
              Hidden heart
            </div>
          </div>
        </div>
        
        {/* Easter egg message popup */}
        {showMessage && (
          <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-pink-600 text-white py-3 px-6 rounded-full shadow-lg text-center max-w-xs w-full z-50 animate-bounce">
            {showMessage}
          </div>
        )}
      </div>
    </section>
  );
};

export default EasterEggSection;