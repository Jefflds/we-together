import { useState, useEffect } from "react";
import {
  Heart,
  Star,
  Sparkles,
  Calendar,
  Mail,
  Music,
  Coffee,
  Instagram,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Footer() {
  const [year] = useState(new Date().getFullYear());
  const [hoveredHeart, setHoveredHeart] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);

  const loveMessages = [
    "Juntos para sempre",
    "Um amor verdadeiro",
    "De coração para coração",
    "Nosso laço eterno",
    "Escrito nas estrelas",
  ];

  const [currentMessage, setCurrentMessage] = useState(loveMessages[0]);

  useEffect(() => {
    if (messageVisible) {
      const timeout = setTimeout(() => {
        setMessageVisible(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [messageVisible]);

  const handleHeartClick = () => {
    setMessageVisible(true);
    setCurrentMessage(
      loveMessages[Math.floor(Math.random() * loveMessages.length)]
    );
  };

  return (
    <footer className="bg-gradient-to-b from-[#300017] to-[#4d0025] text-pink-100 relative overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#fe016b]/5"></div>
        <div className="absolute bottom-20 -left-10 w-40 h-40 rounded-full bg-[#7d0039]/10"></div>

        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-pink-300/10"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10 pt-12 pb-6 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <motion.div
                className="relative mr-2"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Heart className="h-8 w-8 text-[#fe016b]" fill="#fe016b" />
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="h-3 w-3 text-yellow-200" />
                </motion.div>
              </motion.div>
              <h2 className="text-2xl font-bold text-pink-100">
                Jeff <span className="text-[#fe016b]">&</span> Manu
              </h2>
            </div>
            <p className="text-pink-200/70 text-center md:text-left mb-4">
              Nossa história de amor, escrita a cada dia com carinho e dedicação
            </p>

            <div className="flex space-x-3 text-pink-300/70 text-sm">
              <div className="flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-1" />
                <span>Est. 2023</span>
              </div>
              <span>•</span>
              <div className="flex items-center">
                <Star className="w-3.5 h-3.5 mr-1" />
                <span>Para sempre</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4 text-pink-200">
              Navegação
            </h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <a
                  href="#countdown"
                  className="hover:text-[#fe016b] transition-colors flex items-center justify-center md:justify-start"
                >
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Contagem Regressiva</span>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[#fe016b] transition-colors flex items-center justify-center md:justify-start"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  <span>Sobre Nós</span>
                </a>
              </li>
              <li>
                <a
                  href="#letters"
                  className="hover:text-[#fe016b] transition-colors flex items-center justify-center md:justify-start"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  <span>Cartas e Presentes</span>
                </a>
              </li>
            </ul>

            <div className="mt-6 relative">
              <motion.div
                className="cursor-pointer"
                onHoverStart={() => setHoveredHeart(true)}
                onHoverEnd={() => setHoveredHeart(false)}
                onClick={handleHeartClick}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Heart
                  className={`w-8 h-8 ${
                    hoveredHeart ? "text-[#fe016b]" : "text-pink-300/80"
                  }`}
                  fill={hoveredHeart ? "#fe016b" : "none"}
                />
              </motion.div>

              <AnimatePresence>
                {messageVisible && (
                  <motion.div
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#7d0039] px-4 py-2 rounded-full whitespace-nowrap text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {currentMessage}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#7d0039] rotate-45"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-4 text-pink-200">
              Contato
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:nossoamor@forever.com"
                className="flex items-center text-pink-200/70 hover:text-[#fe016b] transition-colors group"
              >
                <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                <span>nossoamor@forever.com</span>
              </a>
              <a
                href="https://instagram.com/jeffemanu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-pink-200/70 hover:text-[#fe016b] transition-colors group"
              >
                <Instagram className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                <span>@jeffemanu</span>
              </a>

              <div className="flex items-center space-x-2 mt-4 pt-2 border-t border-pink-900/30 text-sm text-pink-300/50">
                <Coffee className="w-3 h-3" />
                <span>Feito com amor</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-pink-900/40 flex flex-col md:flex-row justify-between items-center text-xs text-pink-300/50">
          <p>&copy; {year} Jeff & Manu · Todos os direitos reservados</p>
          <div className="flex items-center mt-3 md:mt-0">
            <Music className="w-3 h-3 mr-1" />
            <span>Trilha sonora do nosso amor</span>
          </div>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-[#7d0039] via-[#fe016b] to-[#7d0039]"></div>
    </footer>
  );
}
