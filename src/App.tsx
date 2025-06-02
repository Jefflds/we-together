import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "./view/partials/about/AboutSection";
import LoadingPage from "./view/components/LoadingPage";
import { DefaultLayout } from "./view/layout/Default";
import { Countdown } from "./view/partials/countdown/Countdown";
import { GrandmothersSection } from "./view/partials/grandmothers/GrandmothersSection";
import { GrandmothersTributePage } from "./view/pages/GrandmothersTributePage";

function HomePage() {
  return (
    <>
      <Countdown />
      <About />
      <GrandmothersSection />
    </>
  );
}

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
        <Routes>
          <Route
            path="/"
            element={
              <DefaultLayout>
                <HomePage />
              </DefaultLayout>
            }
          />
          <Route
            path="/homenagem-vovos"
            element={<GrandmothersTributePage />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
