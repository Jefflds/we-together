import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ChevronRight } from "lucide-react";

interface Letter {
  id: string;
  title: string;
  description: string;
  date: string;
  color: string;
  coverImage: string;
  available: boolean;
}

export function LettersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const letters: Letter[] = [
    {
      id: "o-que-vejo-em-voce",
      title: "O que vejo em você que você não vê",
      description:
        "Um olhar sobre tudo o que você é e conquistou, mesmo quando você mesma não consegue enxergar sua própria grandeza.",
      date: "02 de Junho, 2025",
      color: "from-[#7d0039] to-[#fe016b]",
      coverImage: "/letters/letter-1.jpg",
      available: true,
    },
    {
      id: "pedido-de-desculpas",
      title: "Do fundo do meu coração",
      description:
        "Uma reflexão sincera sobre erros, crescimento e o verdadeiro significado de amar com liberdade e respeito.",
      date: "16 de Junho, 2025",
      color: "from-[#8c0041] to-[#b9014d]",
      coverImage: "/letters/letter-2.jpg",
      available: true,
    },
  ];

  return (
    <section
      className="py-16 sm:py-20 bg-gradient-to-b from-[#fff5f8]/50 to-[#f8f4ff]/50 relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block bg-gradient-to-r from-[#7d0039] to-[#fe016b] p-3 sm:p-4 rounded-full mb-4 sm:mb-6">
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="white" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {letters.map((letter, index) => (
            <motion.div
              key={letter.id}
              className="flex h-full"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
            >
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-pink-100/50 h-full flex flex-col ${
                    !letter.available &&
                    "opacity-75 grayscale pointer-events-none"
                  }`}
                  onClick={() =>
                    letter.available && navigate(`/carta/${letter.id}`)
                  }
                >
                  <div
                    className={`h-32 sm:h-40 bg-gradient-to-r ${letter.color} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0">
                      <img
                        src={letter.coverImage}
                        alt={letter.title}
                        className="w-full h-full object-cover opacity-30 mix-blend-overlay"
                      />
                    </div>
                    <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between">
                      <div className="text-white">
                        <time className="text-xs sm:text-sm font-medium text-white/90">
                          {letter.date}
                        </time>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-1">
                          {letter.title}
                        </h3>
                      </div>
                      {letter.available && (
                        <div className="text-white flex justify-end items-center group">
                          <span className="text-xs sm:text-sm mr-1 group-hover:mr-2 transition-all">
                            Ler carta
                          </span>
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 flex-grow">
                    <p className="text-gray-600 text-sm sm:text-base">
                      {letter.description}
                    </p>
                  </div>
                  {letter.available && (
                    <div className="absolute top-4 -right-8 bg-yellow-400 text-[#7d0039] text-xs font-bold px-8 py-1 rotate-45 transform origin-center">
                      NOVA
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
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
        </motion.div>
      </div>
    </section>
  );
}
