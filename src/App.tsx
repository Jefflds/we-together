import { useState, useEffect } from "react";
import Header from "./components/Header";
import Countdown from "./components/Countdown";
import AboutSection from "./components/AboutSection";
import LettersSection from "./components/LettersSection";
import EasterEggSection from "./components/EasterEggs";
import Footer from "./components/Footer";
import LoadingPage from "./view/components/LoadingPage";
import { Heart } from "lucide-react";
import { easterEggs } from "./data/easterEggs";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Nosso Dia dos Namorados ❤️";
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-pink-50">
      {isLoading ? (
        <LoadingPage onLoadingComplete={handleLoadingComplete} />
      ) : (
        <>
          <Header />
          <Countdown />
          <AboutSection />
          <LettersSection />
          <EasterEggSection />
          <Footer />
          <div
            id="hidden-heart-icon"
            className="fixed bottom-10 right-2 opacity-10 hover:opacity-100 cursor-pointer transition-opacity"
            onClick={() => {
              const heartEgg = easterEggs.find(
                (egg) => egg.id === "hidden-heart"
              );
              if (heartEgg) {
                const event = new CustomEvent("eggFound", {
                  detail: { id: heartEgg.id, message: heartEgg.message },
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
