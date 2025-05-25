import { useState, useEffect } from "react";
import {
  Heart,
  Menu,
  X,
  Scale,
  Sparkles,
  Gavel,
  BookOpen,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSymbol, setActiveSymbol] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const zodiacSymbols = [
    "♈",
    "♉",
    "♊",
    "♋",
    "♌",
    "♍",
    "♎",
    "♏",
    "♐",
    "♑",
    "♒",
    "♓",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const symbolInterval = setInterval(() => {
      setActiveSymbol((prev) => (prev + 1) % zodiacSymbols.length);
    }, 3000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(symbolInterval);
    };
  }, [zodiacSymbols.length]);

  const navLinks = [
    { href: "#countdown", label: "Contagem Regressiva" },
    { href: "#about", label: "Sobre Você" },
    { href: "#letters", label: "Cartas e Presentes" },
  ];

  const legalIcons = [
    { Icon: Scale, tooltip: "Balança da Justiça" },
    { Icon: BookOpen, tooltip: "Código do Amor" },
    { Icon: Gavel, tooltip: "Decreto do Afeto" },
  ];

  return (
    <header
      className={`bg-gradient-to-r from-[#7d0039] to-[#fe016b] py-3 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg shadow-pink-900/20 py-2" : "shadow-none py-3"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center relative">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative mr-3 group">
            <Heart
              className="w-8 h-8 text-pink-200 transition-transform duration-300 group-hover:scale-110"
              fill="#ffb6c1"
            />
            <motion.div
              className="absolute -top-1 -right-1 text-yellow-200 text-xs"
              animate={{
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.2, 1],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles size={16} />
            </motion.div>
          </div>

          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-pink-50 tracking-tight">
              Jeff <span className="text-pink-200 animate-pulse">&</span> Manu
            </h1>
            <div className="ml-2 hidden sm:flex items-center space-x-1">
              <motion.div
                className="text-pink-200 opacity-80 text-sm font-semibold"
                key={activeSymbol}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
              >
                {zodiacSymbols[activeSymbol]}
              </motion.div>
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              >
                <Star className="w-3 h-3 text-yellow-200" fill="#ffee58" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
          {legalIcons.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <item.Icon className="w-5 h-5 text-pink-200" />
              </motion.div>
              <span className="text-xs text-pink-100 opacity-0 group-hover:opacity-100 transition-opacity absolute top-full mt-1 bg-[#7d0039]/80 backdrop-blur-sm px-2 py-1 rounded whitespace-nowrap">
                {item.tooltip}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center">
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-pink-100 hover:text-white transition-colors flex items-center group relative"
              >
                <span>{link.label}</span>
                <div className="absolute h-0.5 bg-pink-200 w-0 group-hover:w-full bottom-0 left-0 transition-all duration-300"></div>
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-200 rounded-full p-1 ml-4 hover:bg-pink-800/30 transition-colors"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>
      </div>

      <motion.div
        className={`md:hidden overflow-hidden`}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="bg-gradient-to-b from-[#7d0039] to-[#9d0048] py-4 px-4 shadow-inner">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="text-pink-100 hover:text-white transition-colors flex items-center space-x-2 p-2 rounded-md hover:bg-pink-800/20"
                onClick={() => setIsMenuOpen(false)}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <Star className="w-4 h-4 text-pink-200" />
                <span>{link.label}</span>
              </motion.a>
            ))}

            <div className="flex justify-center pt-3 space-x-8 border-t border-pink-300 border-opacity-20">
              {legalIcons.map((item, index) => (
                <motion.div
                  key={index}
                  className="p-2 rounded-full hover:bg-pink-800/20 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.Icon className="w-5 h-5 text-pink-200" />
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center space-x-3 text-pink-300 text-xs pt-2">
              {zodiacSymbols.slice(0, 6).map((symbol, index) => (
                <motion.span
                  key={index}
                  animate={{
                    opacity: activeSymbol % 12 === index ? 1 : 0.5,
                    scale: activeSymbol % 12 === index ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {symbol}
                </motion.span>
              ))}
            </div>
          </nav>
        </div>
      </motion.div>
    </header>
  );
}
