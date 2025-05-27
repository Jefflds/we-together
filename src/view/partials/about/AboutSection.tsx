import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Heart, Sparkles, Star, Calendar, Music, Coffee } from "lucide-react";

function MusicItem({
  title,
  artist,
  youtubeId,
}: {
  title: string;
  artist: string;
  youtubeId: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-sm"
      animate={{ height: expanded ? "auto" : "56px" }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="p-3 flex items-center justify-between cursor-pointer bg-gradient-to-r from-pink-50 to-white hover:bg-pink-50/80 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
              expanded
                ? "bg-[#fe016b] text-white"
                : "bg-pink-100 text-[#7d0039]"
            }`}
          >
            <Music className="w-4 h-4" />
          </div>
          <div>
            <div className="font-medium text-[#7d0039]">{title}</div>{" "}
            <div className="text-xs text-gray-500">{artist}</div>
          </div>
        </div>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="bg-pink-100/50 rounded-full p-2 hover:bg-pink-100 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#7d0039]"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </motion.div>
      </div>

      <motion.div
        className="w-full aspect-video bg-black/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.3, delay: expanded ? 0.2 : 0 }}
      >
        {expanded && (
          <iframe
            className="w-full aspect-video"
            src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </motion.div>
    </motion.div>
  );
}

export function About() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  const tabs = [
    { icon: Heart, label: "Nossa História" },
    { icon: Star, label: "Manu" },
    { icon: Sparkles, label: "Jeff" },
    { icon: Calendar, label: "Momentos" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const element = document.getElementById("about-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const fadeUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const boxScale = useTransform(scrollYProgress, [0.1, 0.3], [0.9, 1]);
  const boxOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0.8, 1]);

  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-[#fff0f5] to-[#ffcfe0]"
    >
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-[#7d0039]/5"></div>
        <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-[#fe016b]/5"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-[#fe016b]/5"></div>
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#fe016b]/10"
            style={{
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#7d0039]">
            Sobre Nós
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-[#7d0039] to-[#fe016b] mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            Nossa jornada juntos é uma história cheia de momentos incríveis,
            sorrisos, descobertas e amor. Cada dia é uma nova página sendo
            escrita nessa linda narrativa que construímos juntos.
          </p>
        </motion.div>
        <div className="flex justify-center mb-6 sm:mb-12 overflow-x-auto py-2 px-1 -mx-4 sm:mx-0">
          <div className="flex space-x-1 xs:space-x-2 sm:space-x-4 bg-white/80 backdrop-blur-sm rounded-full p-1.5 sm:p-2 shadow-md min-w-min">
            {tabs.map((tab, index) => (
              <motion.button
                key={index}
                className={`px-2.5 sm:px-4 py-2 rounded-full flex items-center space-x-1 sm:space-x-2 transition-colors ${
                  activeTab === index
                    ? "bg-gradient-to-r from-[#7d0039] to-[#fe016b] text-white font-medium"
                    : "text-[#7d0039] hover:bg-pink-100"
                }`}
                onClick={() => setActiveTab(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon className="w-4 h-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base truncate max-w-[60px] sm:max-w-none">
                  {tab.label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden"
          >
            {activeTab === 0 && (
              <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                <motion.div {...fadeUp} className="order-2 md:order-1">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-[#7d0039]">
                    Nossa História
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-4">
                    Nos conhecemos há quatro anos, sem imaginar que aquela
                    conversa casual mudaria completamente nossas vidas. Depois
                    de algumas tentativas, idas e vindas, o que parecia apenas
                    uma simples conversa à distância se transformou em algo
                    muito maior.
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 mb-4">
                    Hoje, escrevemos juntos uma linda história de amor,
                    construída dia após dia. Superamos desafios, celebramos
                    conquistas e, acima de tudo, crescemos como pessoas e como
                    casal. Cada momento ao seu lado é único e especial à sua
                    maneira.
                  </p>
                </motion.div>

                <motion.div
                  className="relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl order-1 md:order-2"
                  style={{ scale: boxScale, opacity: boxOpacity }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#7d0039]/40 to-transparent z-10 rounded-xl"></div>
                  <div className="absolute top-4 right-4 z-20">
                    <Heart className="w-6 h-6 text-white/70" fill="#fe016b" />
                  </div>
                  <img
                    src="/we-married.jpeg"
                    alt="Nossa história de amor"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  />
                  <div className="absolute bottom-0 inset-x-0 p-4 z-20 bg-gradient-to-t from-[#7d0039]/80 to-transparent">
                    <p className="text-white text-sm md:text-base font-medium text-center">
                      Nossa jornada juntos
                    </p>
                  </div>
                </motion.div>
              </div>
            )}
            {activeTab === 1 && (
              <div className="p-6 grid md:grid-cols-2 gap-8">
                <motion.div {...fadeUp}>
                  <h3 className="text-2xl font-semibold mb-4 text-[#7d0039]">
                    Sobre Manu
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Manu é simplesmente incrível. Com seu sorriso contagiante e
                    sua personalidade única, ela ilumina todos os ambientes por
                    onde passa.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-pink-50 p-3 sm:p-4 rounded-lg">
                      <Coffee className="w-4 h-4 sm:w-5 sm:h-5 text-[#fe016b] mb-1 sm:mb-2" />
                      <h4 className="font-medium text-sm sm:text-base text-[#7d0039]">
                        Favoritos
                      </h4>
                      <ul className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2 space-y-0.5 sm:space-y-1">
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-[#fe016b]/80 rounded-full mr-2"></span>
                          Mc Donalds - Quarteirão
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-[#fe016b]/80 rounded-full mr-2"></span>
                          Strogonoff de Frango
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-[#fe016b]/80 rounded-full mr-2"></span>
                          Chocolate MMs
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-[#fe016b]/80 rounded-full mr-2"></span>
                          Direito
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-[#fe016b]/80 rounded-full mr-2"></span>
                          Mamãe e Vovós
                        </li>
                      </ul>
                    </div>

                    <div className="bg-pink-50 p-3 sm:p-4 rounded-lg relative">
                      <Music className="w-4 h-4 sm:w-5 sm:h-5 text-[#fe016b] mb-1 sm:mb-2" />
                      <h4 className="font-medium text-sm sm:text-base text-[#7d0039]">
                        Músicas
                      </h4>

                      <div className="mt-2 sm:mt-3 space-y-2 sm:space-y-3">
                        <MusicItem
                          title="Aliança"
                          artist="Tribalistas"
                          youtubeId="4118vSxbktc"
                        />
                        <MusicItem
                          title="Caso Sério"
                          artist="Rita Lee"
                          youtubeId="9BX34gRH5po"
                        />
                        <MusicItem
                          title="Infinito Particular"
                          artist="Marisa Monte"
                          youtubeId="dLQ33EHkypU"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    className="aspect-square rounded-xl overflow-hidden shadow-md relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#7d0039]/40 to-transparent z-10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src="/manu-1.jpeg"
                      alt="Foto de Manu"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 z-20">
                      <Star className="w-4 h-4 text-white/80" fill="#fe016b" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="aspect-square rounded-xl overflow-hidden shadow-md relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#7d0039]/40 to-transparent z-10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src="/manu-2.jpeg"
                      alt="Foto de Manu"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 z-20">
                      <Star className="w-4 h-4 text-white/80" fill="#fe016b" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="col-span-1 xs:col-span-2 aspect-video rounded-xl overflow-hidden shadow-lg relative"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7d0039]/30 to-[#fe016b]/30 z-10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 inset-x-0 h-1/4 bg-gradient-to-t from-[#7d0039]/60 to-transparent z-10"></div>
                    <img
                      src="/manu-3.jpeg"
                      alt="Foto de Manu"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-3 left-4 z-20 opacity-70 hover:opacity-100 transition-opacity">
                      <p className="text-white text-sm font-medium">
                        Momentos especiais
                      </p>
                    </div>
                    <div className="absolute top-3 right-3 z-20">
                      <Heart className="w-5 h-5 text-white/80" fill="#fe016b" />
                    </div>
                  </motion.div>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="p-6 grid md:grid-cols-2 gap-8">
                <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
                  <motion.div
                    className="col-span-2 aspect-video rounded-xl overflow-hidden shadow-lg relative"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7d0039]/30 to-[#fe016b]/30 z-10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 inset-x-0 h-1/4 bg-gradient-to-t from-[#7d0039]/60 to-transparent z-10"></div>

                    <img
                      src="/jeff-3.jpeg"
                      alt="Foto de Jeff"
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute bottom-3 left-4 z-20 opacity-70 hover:opacity-100 transition-opacity">
                      <p className="text-white text-sm font-medium">
                        Momentos especiais
                      </p>
                    </div>

                    <div className="absolute top-3 right-3 z-20">
                      <Heart className="w-5 h-5 text-white/80" fill="#fe016b" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="aspect-square rounded-xl overflow-hidden shadow-md relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#7d0039]/40 to-transparent z-10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src="/jeff-1.jpeg"
                      alt="Foto de Jeff"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 z-20">
                      <Star className="w-4 h-4 text-white/80" fill="#fe016b" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="aspect-square rounded-xl overflow-hidden shadow-md relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#7d0039]/40 to-transparent z-10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src="/jeff-2.jpeg"
                      alt="Foto de Jeff"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 z-20">
                      <Star className="w-4 h-4 text-white/80" fill="#fe016b" />
                    </div>
                  </motion.div>
                </div>
                <motion.div {...fadeUp} className="order-1 md:order-2">
                  <h3 className="text-2xl font-semibold mb-4 text-[#7d0039]">
                    Sobre Jeff
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Jeff é uma pessoa apaixonada e dedicada. Com seu humor único
                    e criatividade, ele traz alegria e novas perspectivas para
                    cada momento.
                  </p>
                </motion.div>
              </div>
            )}
            {activeTab === 3 && (
              <div className="p-6">
                <motion.h3
                  className="text-2xl font-semibold mb-6 text-[#7d0039] text-center"
                  {...fadeUp}
                >
                  Nossos Momentos Especiais
                </motion.h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <motion.div
                    key="moment-1"
                    className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm mx-auto sm:mx-0 w-full"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{
                      y: -5,
                      boxShadow:
                        "0 10px 25px -5px rgba(254, 1, 107, 0.1), 0 10px 10px -5px rgba(254, 1, 107, 0.04)",
                    }}
                  >
                    <div className="h-36 sm:h-44 md:h-48 bg-black relative overflow-hidden">
                      <video
                        src="/moment-1.mp4"
                        className="absolute inset-0 w-full h-full object-cover"
                        controls
                        preload="metadata"
                        muted
                        onClick={(e) => e.currentTarget.play()}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#7d0039]/60 to-transparent z-10 flex items-center justify-center opacity-70 hover:opacity-90 transition-opacity">
                        <div className="p-3 rounded-full bg-white/30 backdrop-blur-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-xs text-[#fe016b] font-medium mb-1 flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>09/08/2024</span>
                      </div>
                      <h4 className="font-semibold text-[#7d0039] mb-2">
                        Primeiro encontro
                      </h4>
                      <p className="text-sm text-gray-600">
                        Quando tudo começou e nossos caminhos se cruzaram pela
                        primeira vez...
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    key="moment-2"
                    className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm mx-auto sm:mx-0 w-full"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{
                      y: -5,
                      boxShadow:
                        "0 10px 25px -5px rgba(254, 1, 107, 0.1), 0 10px 10px -5px rgba(254, 1, 107, 0.04)",
                    }}
                  >
                    <div className="h-36 sm:h-44 md:h-48 relative overflow-hidden">
                      <img
                        src="/moment-2.jpeg"
                        alt="Dia especial"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#7d0039]/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-3 right-3">
                        <Heart
                          className="w-5 h-5 text-white/80 drop-shadow-md"
                          fill="#fe016b"
                        />
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-xs text-[#fe016b] font-medium mb-1 flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>07/09/2024</span>
                      </div>
                      <h4 className="font-semibold text-[#7d0039] mb-2">
                        Dia especial
                      </h4>
                      <p className="text-sm text-gray-600">
                        Aquele dia inesquecível que ficará para sempre em nossas
                        memórias...
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    key="moment-3"
                    className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm mx-auto sm:mx-0 w-full"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{
                      y: -5,
                      boxShadow:
                        "0 10px 25px -5px rgba(254, 1, 107, 0.1), 0 10px 10px -5px rgba(254, 1, 107, 0.04)",
                    }}
                  >
                    <div className="h-36 sm:h-44 md:h-48 relative overflow-hidden">
                      <img
                        src="/moment-3.jpeg"
                        alt="Nosso momento"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#7d0039]/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-3 right-3">
                        <Star
                          className="w-5 h-5 text-white/80 drop-shadow-md"
                          fill="#fe016b"
                        />
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-xs text-[#fe016b] font-medium mb-1 flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>10/05/2025</span>
                      </div>
                      <h4 className="font-semibold text-[#7d0039] mb-2">
                        Nosso momento
                      </h4>
                      <p className="text-sm text-gray-600">
                        Quando soubemos que era para sempre e que nosso amor é
                        verdadeiro...
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        <motion.button
          className="mx-auto mt-6 sm:mt-8 block bg-gradient-to-r from-[#7d0039] to-[#fe016b] px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-white text-sm sm:text-base font-medium shadow-lg shadow-pink-500/20"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          Adicionar novo momento
        </motion.button>
        <motion.div
          className="mt-10 sm:mt-16 md:mt-20 text-center max-w-xs sm:max-w-lg md:max-w-3xl mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <div className="text-3xl sm:text-4xl md:text-5xl text-[#fe016b]/30 mb-2 sm:mb-4">
            "
          </div>
          <p className="text-lg sm:text-xl italic text-gray-700">
            O amor não se vê com os olhos, mas com o coração.
          </p>
          <div className="mt-3 sm:mt-4 text-[#7d0039] text-sm sm:text-base font-medium">
            William Shakespeare
          </div>
        </motion.div>
      </div>
    </section>
  );
}
