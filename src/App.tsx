import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Countdown from './components/Countdown';
import AboutSection from './components/AboutSection';
import LettersSection from './components/LettersSection';
import EasterEggSection from './components/EasterEggs';
import Footer from './components/Footer';
import { Heart } from 'lucide-react';
import { easterEggs } from './data/easterEggs';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for a smoother initial animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Update document title
    document.title = "Nosso Dia dos Namorados ❤️";
  }, []);

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Initial loading animation */}
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-pink-100 z-50">
          <div className="flex flex-col items-center">
            <Heart className="w-16 h-16 text-pink-600 animate-pulse" />
            <p className="mt-4 text-pink-800 text-xl">Carregando nosso amor...</p>
          </div>
        </div>
      ) : (
        <>
          <Header />
          <Countdown />
          <AboutSection />
          <LettersSection />
          <EasterEggSection />
          <Footer />
          
          {/* Hidden heart for easter egg */}
          <div 
            id="hidden-heart-icon"
            className="fixed bottom-10 right-2 opacity-10 hover:opacity-100 cursor-pointer transition-opacity"
            onClick={() => {
              const heartEgg = easterEggs.find(egg => egg.id === 'hidden-heart');
              if (heartEgg) {
                const event = new CustomEvent('eggFound', { 
                  detail: { id: heartEgg.id, message: heartEgg.message } 
                });
                window.dispatchEvent(event);
              }
            }}
          >
            <Heart className="w-6 h-6 text-pink-600" fill="pink" />
          </div>
        </>
      )}
    </div>
  );
}

export default App;