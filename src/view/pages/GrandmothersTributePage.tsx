import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Heart,
  Star,
  Calendar,
  FlowerIcon as Flower,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export function GrandmothersTributePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    document.title = "Homenagem às Queridas Avós | Jeff & Manu ❤️";
  }, []);

  const grandmothers = [
    {
      name: "Vó Kátia",
      subtitle: "Avó Materna",
      image: "/vovos/vo-katia.jpeg",
      //   birthDate: "1945",
      description:
        "Uma mulher de coração imenso, que ensinou o valor do amor incondicional e da família. Sua presença iluminava qualquer ambiente e seu carinho era sentido por todos ao redor.",
      prideMessages: [
        "Ela ficaria radiante ao ver a mulher trabalhadora e dedicada que você se tornou",
        "Sorriria com orgulho vendo sua determinação nos estudos e no trabalho",
        "Se encheria de alegria ao perceber como você carrega o amor pela família no coração",
        "Celebraria cada conquista sua como se fosse dela própria",
      ],
    },
    {
      name: "Vó Alda",
      subtitle: "Avó Paterna",
      image: "/vovos/vo-alda.jpeg",
      //   birthDate: "1943",
      description:
        "Força e determinação personificadas, que mostrou que a vida deve ser vivida com coragem. Uma mulher à frente de seu tempo, que ensinou que não há limites para quem tem fé e persistência.",
      prideMessages: [
        "Ela se orgulharia imensamente da sua força e coragem diante dos desafios",
        "Admiraria sua inteligência e sede de conhecimento que nunca se esgota",
        "Ficaria emocionada vendo como você enfrenta a vida com tanta garra",
        "Reconheceria em você a mesma determinação que ela sempre teve",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff5f8] via-[#ffcfe0] to-[#f8f4ff]">
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-pink-200/30">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center text-[#7d0039] hover:text-[#fe016b] transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Voltar para início</span>
          </button>
        </div>
      </div>
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-block bg-gradient-to-r from-[#7d0039] to-[#fe016b] p-4 sm:p-5 rounded-full mb-6 sm:mb-8 relative">
              <Heart
                className="w-10 h-10 sm:w-12 sm:h-12 text-white"
                fill="white"
              />
              <motion.div
                className="absolute -top-2 -right-2 bg-yellow-300 rounded-full p-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-4 h-4 text-[#7d0039]" fill="currentColor" />
              </motion.div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8">
              <span className="text-[#7d0039]">Nossas Queridas</span>
              <span className="block text-[#fe016b] mt-2">Avós</span>
            </h1>

            <div className="w-32 sm:w-40 h-1.5 bg-gradient-to-r from-[#7d0039] via-[#fe016b] to-[#7d0039] mx-auto rounded-full mb-8 sm:mb-10"></div>

            <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Uma homenagem especial às mulheres extraordinárias que moldaram o
              coração da nossa querida Manu e que estariam imensamente
              orgulhosas da mulher incrível que ela se tornou.
            </p>
          </motion.div>
        </div>
      </section>
      {grandmothers.map((grandmother, index) => (
        <section
          key={index}
          className={`py-16 sm:py-20 ${
            index % 2 === 0 ? "bg-white/40" : "bg-transparent"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <motion.div
                className={`${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <div className="relative">
                  <motion.div
                    className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden relative"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.6 }}
                    onHoverStart={() => setActiveCard(index)}
                    onHoverEnd={() => setActiveCard(null)}
                  >
                    <div className="relative h-80 sm:h-96 md:h-[28rem] overflow-hidden">
                      <img
                        src={grandmother.image}
                        alt={grandmother.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#7d0039]/60 via-transparent to-transparent"></div>

                      <motion.div
                        className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-3"
                        animate={
                          activeCard === index
                            ? {
                                rotate: [0, 15, 0, -15, 0],
                                scale: [1, 1.1, 1],
                              }
                            : {}
                        }
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Flower className="w-6 h-6 text-white" />
                      </motion.div>

                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                          {grandmother.name}
                        </h3>
                        <div className="flex items-center text-pink-200">
                          <Calendar className="w-5 h-5 mr-2" />
                          <span className="text-lg">
                            {grandmother.subtitle}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                className={`${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-[#7d0039] mb-6">
                      {grandmother.name}
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
                      {grandmother.description}
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-[#7d0039]/5 to-[#fe016b]/5 rounded-2xl p-6 sm:p-8 border border-[#fe016b]/20">
                    <h4 className="text-2xl sm:text-3xl font-bold text-[#fe016b] mb-6 flex items-center">
                      <Sparkles className="w-6 h-6 mr-3" />O Orgulho que Ela
                      Sentiria
                    </h4>
                    <div className="space-y-4">
                      {grandmother.prideMessages.map((message, mIndex) => (
                        <motion.div
                          key={mIndex}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isVisible ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.6 + mIndex * 0.1 }}
                        >
                          <Heart
                            className="w-5 h-5 text-[#fe016b] mr-3 mt-1 flex-shrink-0"
                            fill="currentColor"
                          />
                          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            {message}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-[#7d0039] to-[#fe016b] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="text-7xl sm:text-8xl mb-8 opacity-30">"</div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
              Elas estariam tão orgulhosas...
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  Da Mulher Trabalhadora
                </h3>
                <p className="text-lg sm:text-xl leading-relaxed">
                  Que enfrenta cada dia com{" "}
                  <span className="font-bold">determinação</span> e nunca
                  desiste de seus sonhos, sempre buscando crescer e evoluir.
                </p>
              </motion.div>
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  Da Estudante Dedicada
                </h3>
                <p className="text-lg sm:text-xl leading-relaxed">
                  Cuja <span className="font-bold">inteligência</span> brilha em
                  cada conquista e que nunca para de aprender e se superar.
                </p>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  Da Guerreira Corajosa
                </h3>
                <p className="text-lg sm:text-xl leading-relaxed">
                  Que enfrenta os desafios da vida com{" "}
                  <span className="font-bold">coragem</span> e força, mesmo
                  quando o caminho parece difícil.
                </p>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  Do Coração Bondoso
                </h3>
                <p className="text-lg sm:text-xl leading-relaxed">
                  Que carrega todos os{" "}
                  <span className="font-bold">valores</span> que elas plantaram
                  e espalha amor por onde passa.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 sm:p-12 mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                Manu, você é o reflexo do amor delas
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
                Cada conquista sua é uma homenagem ao legado que deixaram. Elas
                vivem em seu coração, em sua força, em sua bondade e em cada
                sonho que você realiza.
              </p>
            </motion.div>

            <div className="text-2xl sm:text-3xl italic opacity-90 mb-8">
              "O amor das avós é eterno e vive para sempre em nossos corações"
            </div>

            <div className="text-xl font-medium">
              Com todo amor e saudade,
              <br />
              Jeff & Manu ❤️
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: Math.random() * 4 + 6,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
