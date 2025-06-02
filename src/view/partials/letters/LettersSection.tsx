import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Heart, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function LettersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const element = document.getElementById("letters-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const letters = [
    {
      id: "o-que-vejo-em-voce",
      title: "O que vejo em você que você não vê",
      preview:
        "Meu amor, quero te mostrar a mulher incrível que você se tornou através dos meus olhos...",
      date: "02 de Junho, 2025",
      color: "from-[#7d0039] to-[#fe016b]",
      icon: Heart,
      available: true,
    },
  ];

  return (
    <section
      id="letters-section"
      className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-b from-[#f8f4ff] via-[#fff5f8] to-[#ffcfe0]"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[#fe016b]/5"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 rounded-full bg-[#7d0039]/10"></div>

        {/* Floating elements */}
        {Array.from({ length: 8 }).map((_, i) => (
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
        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block bg-gradient-to-r from-[#7d0039] to-[#fe016b] p-3 sm:p-4 rounded-full mb-6 sm:mb-8 relative">
            <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
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
            Cartas de
            <span className="block text-[#fe016b] mt-2">Amor</span>
          </h2>

          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#7d0039] via-[#fe016b] to-[#7d0039] mx-auto rounded-full mb-6 sm:mb-8"></div>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
            Palavras do coração escritas especialmente para você,
            <span className="font-semibold text-[#7d0039]"> meu amor</span>.
            Cada carta é uma declaração dos meus sentimentos mais profundos.
          </p>
        </motion.div>

        {/* Letters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {letters.map((letter, index) => (
            <motion.div
              key={letter.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
            >
              <motion.div
                className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden relative 
                           ${
                             letter.available
                               ? "cursor-pointer"
                               : "cursor-not-allowed opacity-70"
                           }`}
                whileHover={letter.available ? { y: -8, scale: 1.02 } : {}}
                transition={{ duration: 0.3 }}
                onClick={() =>
                  letter.available && navigate(`/carta/${letter.id}`)
                }
              >
                {/* Card Header */}
                <div
                  className={`bg-gradient-to-r ${letter.color} p-6 relative overflow-hidden`}
                >
                  <div className="absolute top-2 right-2">
                    <letter.icon className="w-6 h-6 text-white/70" />
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white/5 rounded-full"></div>

                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                      {letter.title}
                    </h3>
                    <p className="text-pink-100 text-sm sm:text-base">
                      {letter.date}
                    </p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                    {letter.preview}
                  </p>

                  {letter.available ? (
                    <div className="flex items-center justify-between">
                      <span className="text-[#7d0039] font-medium text-sm">
                        Ler carta completa
                      </span>
                      <ArrowRight className="w-5 h-5 text-[#fe016b] group-hover:translate-x-1 transition-transform" />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center py-2">
                      <span className="text-gray-500 font-medium text-sm italic">
                        Em breve...
                      </span>
                    </div>
                  )}
                </div>

                {/* Hover effect overlay */}
                {letter.available && (
                  <div className="absolute inset-0 bg-gradient-to-t from-[#7d0039]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                )}

                {/* Ribbon for available letters */}
                {letter.available && (
                  <div className="absolute top-4 -right-8 bg-yellow-400 text-[#7d0039] text-xs font-bold px-8 py-1 rotate-45 transform origin-center">
                    NOVA
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p className="text-base sm:text-lg italic text-gray-600 max-w-2xl mx-auto">
            "As palavras têm o poder de tocar o coração quando vêm da alma.
            Estas cartas são pedaços do meu amor por você."
          </p>
          <div className="mt-4 text-[#7d0039] font-medium">
            Com amor infinito, Jeff ❤️
          </div>
        </motion.div>
      </div>
    </section>
  );
}
