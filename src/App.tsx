import { useState, useEffect } from "react";
import { Countdown } from "./components/Countdown";
import AboutSection from "./components/AboutSection";
import LettersSection from "./components/LettersSection";
import LoadingPage from "./view/components/LoadingPage";
import { DefaultLayout } from "./view/layout/Default";

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
      {isLoading && <LoadingPage onLoadingComplete={handleLoadingComplete} />}
      {!isLoading && (
        <DefaultLayout>
          <Countdown />
          <AboutSection />
          <LettersSection />
        </DefaultLayout>
      )}
    </div>
  );
}

export default App;
