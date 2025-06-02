import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function GrandmothersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const element = document.getElementById("grandmothers-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleNavigateToTribute = () => {
    navigate("/homenagem-vovos");
  };

  return (
    <section
      id="grandmothers-section"
      className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-b from-[#ffcfe0] via-[#fff5f8] to-[#f8f4ff]"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#fe016b]/5"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 rounded-full bg-[#7d0039]/10"></div>
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-pink-200/30"
            style={{
              width: Math.random() * 6 + 3,
              height: Math.random() * 6 + 3,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block bg-gradient-to-r from-[#7d0039] to-[#fe016b] p-3 sm:p-4 rounded-full mb-6 sm:mb-8 relative">
            <Heart
              className="w-8 h-8 sm:w-10 sm:h-10 text-white"
              fill="white"
            />
            <motion.div
              className="absolute -top-2 -right-2"
              animate={{
                rotate: [0, 10, 0, -10, 0],
                scale: [1, 1.2, 1, 1.2, 1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6 text-yellow-300" />
            </motion.div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-[#7d0039]">
            Em Memória das
            <span className="block text-[#fe016b] mt-2">
              Queridas Avós da Manu
            </span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#7d0039] via-[#fe016b] to-[#7d0039] mx-auto rounded-full mb-8 sm:mb-10"></div>
          <div className="space-y-4 sm:space-y-6 text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-10 sm:mb-12">
            <p>
              <span className="font-semibold text-[#7d0039]">Vó Kátia</span> e{" "}
              <span className="font-semibold text-[#7d0039]">Vó Alda</span> -
              duas mulheres extraordinárias que moldaram o coração da nossa
              querida Manu.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Seus ensinamentos de amor, força e determinação continuam vivos em
              cada conquista e em cada gesto de carinho dela.
            </p>
          </div>
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl border border-pink-200/30 mb-10 sm:mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-5xl sm:text-6xl text-[#fe016b]/30 mb-4">"</div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#7d0039] mb-4 sm:mb-6">
              Elas estariam tão orgulhosas...
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              Da{" "}
              <span className="font-semibold text-[#fe016b]">
                mulher trabalhadora
              </span>
              ,<span className="font-semibold text-[#7d0039]"> guerreira</span>{" "}
              e
              <span className="font-semibold text-[#fe016b]"> inteligente</span>{" "}
              que você se tornou, carregando todos os valores que elas plantaram
              em seu coração.
            </p>
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={handleNavigateToTribute}
              className="group bg-gradient-to-r from-[#7d0039] to-[#fe016b] text-white
                       px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 rounded-full
                       font-bold text-lg sm:text-xl md:text-2xl shadow-2xl shadow-pink-500/30
                       hover:shadow-3xl hover:shadow-pink-500/40 transition-all duration-300
                       flex items-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#8c0041] to-[#ff0170] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Ver Homenagem Completa</span>
              <ArrowRight className="relative z-10 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ml-3 sm:ml-4 group-hover:translate-x-2 transition-transform duration-300" />
              <motion.div
                className="absolute top-2 right-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-yellow-300 opacity-70" />
              </motion.div>
            </button>
          </motion.div>
          <motion.p
            className="text-base sm:text-lg italic text-gray-500 mt-8 sm:mt-10"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            "O amor das avós é eterno e vive para sempre em nossos corações"
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
