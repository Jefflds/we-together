import { useState, useEffect } from "react";
import AboutSection from "./view/partials/about/AboutSection";
import LoadingPage from "./view/components/LoadingPage";
import { DefaultLayout } from "./view/layout/Default";
import { Countdown } from "./view/partials/countdown/Countdown";

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
        </DefaultLayout>
      )}
    </div>
  );
}

export default App;
