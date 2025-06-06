import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Heart,
  Calendar,
  MapPin,
  Sparkles,
  Star,
  X,
  ZoomIn,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface TimelineItem {
  id: number;
  date: string;
  title: string;
  location: string;
  image: string;
  description: string;
  milestone: string;
  color: string;
}

export function TimelinePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [expandedImage, setExpandedImage] = useState<{
    src: string;
    alt: string;
    title: string;
  } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
    document.title = "Nossa Trajetória | Jeff & Manu ❤️";
  }, []);

  useEffect(() => {
    if (expandedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [expandedImage]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape" && expandedImage) {
        setExpandedImage(null);
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [expandedImage]);

  const handleImageClick = (item: TimelineItem) => {
    console.log("Clicou na imagem:", item.title);
    setExpandedImage({
      src: item.image,
      alt: item.title,
      title: item.title,
    });
  };

  const timelineData: TimelineItem[] = [
    {
      id: 1,
      date: "Abril/Maio 2021",
      title: "Primeiras Conversas",
      location: "2021",
      image: "/timeline/1.jpeg",
      description: `Foi assim que tudo começou... uma mensagem, algumas trocas de experiências e, de repente, eu me vi completamente encantado por você. Sua forma de ver o mundo, sua inteligência e seu jeito único de ser me conquistaram desde o primeiro instante.

Manu, desde o primeiro momento eu soube que você era especial, eu soube que você era para mim e que, em algum momento, eu iria te encontrar. E foi assim que começou nossa história, com algo que mudaria nossas vidas para sempre.

Mesmo sem saber, cada palavra trocada foi construindo algo sólido, sincero e verdadeiro, que ultrapassaria qualquer barreira de tempo e distância. E eu, cada vez mais, percebia que você era aquela pessoa rara que a gente passa a vida inteira procurando.`,
      milestone: "O início de tudo",
      color: "from-[#7d0039] to-[#fe016b]",
    },
    {
      id: 2,
      date: "Agosto 2024",
      title: "Nosso Primeiro Encontro",
      location: "2024 - Outback",
      image: "/timeline/2.png",
      description: `E, quem diria que, depois de mais de 3 anos depois de nos conhecermos, finalmente teríamos a chance de nos ver pessoalmente? De estar ao seu lado, de te olhar nos olhos, de ouvir sua risada ao vivo, de segurar a sua mão...

Foi uma experiência mágica, um divisor de águas na minha vida. Ver você pela primeira vez foi como ver um sonho se concretizando bem diante dos meus olhos. Eu me senti o homem mais sortudo do mundo por ter a chance de estar com você, de dividir aquele momento tão especial.

Mesmo com suas intenções iniciais de manter a amizade, eu sentia — com cada batida do meu coração — que havia algo muito maior entre nós. E foi nesse encontro que tive certeza: eu estava completamente apaixonado por você, Manu. A mulher que eu sempre procurei, que eu sempre esperei... e que, finalmente, estava ali comigo.`,
      milestone: "Primeiro Encontro",
      color: "from-[#8c0041] to-[#b9014d]",
    },
    {
      id: 3,
      date: "Setembro 2024",
      title: "Nosso Primeiro Evento",
      location: "2024 - Bienal do Livro",
      image: "/timeline/3.jpeg",
      description: `Nesse dia, fomos juntos à Bienal do Livro, um evento que você sempre quis ir e, finalmente, teve a oportunidade — comigo ao seu lado. Foi um dia incrível, cheio de descobertas, conversas e risadas.

Mesmo com o local cheio, o estresse das filas e a correria das pessoas, estar ao seu lado transformou tudo. Caminhar contigo, dividir opiniões sobre livros, te observar entusiasmada com cada estande... foram momentos que ficaram marcados para sempre no meu coração.

E foi nesse dia que eu me apaixonei ainda mais: pela sua beleza, sua inteligência, sua doçura e sua paixão pela vida. Tudo em você me encantou profundamente, e eu só conseguia pensar em como eu era feliz por viver aquilo com você.`,
      milestone: "Primeiro Evento Juntos",
      color: "from-[#7d0039] to-[#fe016b]",
    },
    {
      id: 4,
      date: "Setembro 2024",
      title: "Assumindo o Amor",
      location: "Nossos corações",
      image: "/timeline/4.jpeg",
      description: `Nesse dia, ficar contigo aqui em casa, assistindo, conversando, rindo... Foi simplesmente maravilhoso. Registramos nossos momentos com fotos, eternizando aquele sentimento. Você me surpreendeu com um presente e, principalmente, com a sua cartinha, onde dizia o que eu sempre sonhei ouvir: que me amava.

Foi um dia mágico, cheio de amor, carinho e cumplicidade. Eu me senti o homem mais sortudo do mundo por ter você ao meu lado, por poder compartilhar momentos tão especiais com alguém que transformou a minha vida para sempre. Foi nesse dia que eu tive a certeza de que nosso amor era real, forte e destinado a crescer cada vez mais.`,
      milestone: "Declaração de amor",
      color: "from-[#8c0041] to-[#b9014d]",
    },
    {
      id: 5,
      date: "Setembro 2024",
      title: "Nossa Primeira Foto Postada Juntos",
      location: "Primeira foto postada",
      image: "/timeline/5.jpeg",
      description: `E finalmente chegou o dia! A nossa primeira foto juntos postada para o mundo ver. Um gesto simples, mas carregado de significado, de coragem, de entrega.

Te ver ao meu lado, sorrindo, feliz, foi a confirmação de tudo o que eu já sentia: que estávamos vivendo algo único e verdadeiro. Foi um momento que eu esperei por muito tempo, e ter essa imagem eternizada foi como gravar na história que estávamos prontos para assumir esse amor. Não era mais apenas nós dois; agora o mundo também sabia.`,
      milestone: "Primeira foto postada",
      color: "from-[#7d0039] to-[#fe016b]",
    },
    {
      id: 6,
      date: "Fev 2025",
      title: "Primeira viagem Juntos",
      location: "Fev 2025 - Praia",
      image: "/timeline/6.jpeg",
      description: `Quem diria que, depois de meses afastados, a nossa próxima vez juntos seria em uma viagem? E não qualquer viagem: uma escapada para a praia, onde vivemos dias que pareceram um sonho.

Foi a nossa primeira experiência vivendo como um casal, dividindo não só o espaço, mas rotinas, risadas, confidências... Foram dias em que eu senti, com ainda mais força, como é bom ter você ao meu lado.

Cada caminhada na areia, cada abraço, cada beijo... tudo foi mágico. Senti que o nosso amor estava ainda mais forte, mais sólido, mais verdadeiro. Essa viagem foi mais do que um passeio, foi a certeza de que queremos estar juntos para construir muitos e muitos capítulos dessa nossa linda história.`,
      milestone: "Amor mais forte",
      color: "from-[#8c0041] to-[#b9014d]",
    },
    {
      id: 7,
      date: "Março 2025",
      title: "Primeiro Pagode Juntos",
      location: "Aqui e agora",
      image: "/timeline/7.jpeg",
      description: `Nosso primeiro pagode juntos foi simplesmente inesquecível! Estar ao seu lado, curtindo a música, rindo, dançando... foi um daqueles momentos que ficam para sempre gravados na memória.

Eu me lembro de olhar para você sentada naquela mesa do Quintal do Espeto perceber o quanto você é linda, cheia de vida e alegria. Ali, entre um samba e outro, eu percebi ainda mais o quanto amo sua companhia e como somos felizes juntos.

Foi um dia de celebração, de cumplicidade e de muita diversão, onde o nosso amor ficou ainda mais forte e leve.`,
      milestone: "Primeiro pagode juntos",
      color: "from-[#7d0039] to-[#fe016b]",
    },
    {
      id: 8,
      date: "Março 2025",
      title: "Pagode ao Vivo com Minha Família",
      location: "Aqui e agora",
      image: "/timeline/8.jpeg",
      description: `E dessa vez, além da nossa alegria juntos, tivemos mais um marco: você curtindo um pagode ao vivo com a minha família e comigo. Foi tão especial ver você ali, integrada, rindo e se divertindo com as pessoas que são importantes para mim.

Esse dia representou não só mais um momento feliz, mas também a confirmação de que estamos construindo uma história sólida, onde família, amor e amizade se entrelaçam.

Eu me senti ainda mais apaixonado, admirando o jeito como você se entregou e compartilhou esse momento tão significativo.`,
      milestone: "Integração com a família",
      color: "from-[#7d0039] to-[#fe016b]",
    },
    {
      id: 9,
      date: "Maio 2025",
      title: "Compra das Alianças",
      location: "Aqui e agora",
      image: "/timeline/9.jpeg",
      description: `Aquele momento tão simbólico e emocionante: fui juntos comprar as nossas alianças. Um gesto que representa não só compromisso, mas a escolha consciente e amorosa de caminharmos lado a lado.

Cada vez que olho para a nossa aliança, sinto um orgulho enorme do que estamos construindo: uma história de amor verdadeira e eterna.`,
      milestone: "Símbolo do compromisso",
      color: "from-[#7d0039] to-[#fe016b]",
    },
    {
      id: 10,
      date: "10 de Maio 2025",
      title: "PEDIDO DE NAMORO",
      location: "Aqui e agora",
      image: "/timeline/10.jpeg",
      description: `O grande dia! Depois de tantas vivências, encontros, viagens e momentos inesquecíveis, chegou a hora de oficializar aquilo que já era tão real para nós dois: o nosso namoro.

Com o coração acelerado, eu te pedi em namoro, selando esse amor com ainda mais força e propósito. Foi um momento emocionante, repleto de significado, que ficará para sempre guardado na nossa memória.

Você disse sim, e eu me senti o homem mais feliz e realizado do mundo. A nossa história ganhou um novo capítulo, e o melhor: juntos, como sempre foi para ser.`,
      milestone: "Pedido oficial",
      color: "from-[#7d0039] to-[#fe016b]",
    },
    {
      id: 11,
      date: "Nosso Primeiro Evento Namorando",
      title: "Nosso Presente 5",
      location: "Aqui e agora",
      image: "/timeline/11.jpeg",
      description: `O nosso primeiro evento juntos já namorando foi ainda mais especial. Ir de mãos dadas, te apresentar como minha namorada, sentir o carinho e a alegria das pessoas ao nosso redor... foi maravilhoso.

Cada olhar trocado, cada gesto de cumplicidade, reforçaram o quanto somos felizes juntos. Foi o início de uma nova fase, marcada pela segurança do nosso amor, pela confiança e pela vontade de construir uma vida plena e cheia de momentos inesquecíveis ao seu lado.

Esse dia foi, sem dúvidas, um presente — o primeiro de muitos que a vida ainda vai nos proporcionar.`,
      milestone: "Primeiro evento namorando",
      color: "from-[#7d0039] to-[#fe016b]",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff5f8] via-[#ffcfe0] to-[#f8f4ff]">
      {/* Header com botão de volta */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-pink-200/30">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center text-[#7d0039] hover:text-[#fe016b] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-sm sm:text-base">
              Voltar para início
            </span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-block bg-gradient-to-r from-[#7d0039] to-[#fe016b] p-3 sm:p-4 md:p-5 rounded-full mb-4 sm:mb-6 md:mb-8 relative">
              <Heart
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white"
                fill="white"
              />
              <motion.div
                className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-yellow-300 rounded-full p-0.5 sm:p-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Star
                  className="w-3 h-3 sm:w-4 sm:h-4 text-[#7d0039]"
                  fill="currentColor"
                />
              </motion.div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8">
              <span className="text-[#7d0039]">Nossa</span>
              <span className="block text-[#fe016b] mt-1 sm:mt-2">
                Trajetória
              </span>
            </h1>

            <div className="w-16 sm:w-24 md:w-32 lg:w-40 h-1 sm:h-1.5 bg-gradient-to-r from-[#7d0039] via-[#fe016b] to-[#7d0039] mx-auto rounded-full mb-6 sm:mb-8 md:mb-10"></div>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              A história mais linda que já vivi está sendo escrita com você,
              <span className="font-semibold text-[#fe016b]"> meu amor</span>.
              Cada momento, cada conquista, cada sorriso... tudo faz parte dessa
              jornada incrível.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="relative max-w-6xl mx-auto">
            {/* Linha central */}
            <div className="absolute left-4 sm:left-6 md:left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-0.5 sm:w-1 bg-gradient-to-b from-[#7d0039] via-[#fe016b] to-[#7d0039] h-full"></div>

            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative mb-12 sm:mb-16 md:mb-20 lg:mb-24"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onHoverStart={() => setActiveIndex(index)}
                onHoverEnd={() => setActiveIndex(null)}
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 sm:left-4.5 md:left-6.5 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 z-10">
                  <motion.div
                    className={`w-full h-full rounded-full bg-gradient-to-r ${item.color} shadow-lg relative`}
                    animate={
                      activeIndex === index ? { scale: 1.3 } : { scale: 1 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-white opacity-20"
                      animate={
                        activeIndex === index
                          ? { scale: 1.5, opacity: 0 }
                          : { scale: 1, opacity: 0.2 }
                      }
                      transition={{
                        duration: 0.6,
                        repeat: activeIndex === index ? Infinity : 0,
                      }}
                    />
                  </motion.div>
                </div>

                {/* Content Container */}
                <div
                  className={`
                  ml-8 sm:ml-12 md:ml-16 
                  lg:ml-0 lg:flex lg:items-center lg:justify-center
                  ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}
                `}
                >
                  {/* Card Content */}
                  <div
                    className={`
                    w-full lg:w-5/12 xl:w-2/5
                    ${index % 2 === 0 ? "lg:mr-4 xl:mr-8" : "lg:ml-4 xl:ml-8"}
                  `}
                  >
                    <motion.div
                      className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden"
                      whileHover={{ y: -5, scale: 1.01 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* Image Container - MELHORADO PARA GARANTIR O CLICK */}
                      <div
                        className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] 2xl:h-[36rem] overflow-hidden group cursor-pointer"
                        onClick={() => handleImageClick(item)}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-contain bg-gradient-to-br from-gray-50 to-gray-100 transition-transform duration-300 group-hover:scale-105 pointer-events-none"
                          style={{
                            objectPosition: "center center",
                          }}
                        />

                        {/* Overlay para indicar que é clicável */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center pointer-events-none">
                          <motion.div
                            className="bg-white/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                          >
                            <ZoomIn className="w-6 h-6 text-[#7d0039]" />
                          </motion.div>
                        </div>

                        <div
                          className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-10 pointer-events-none`}
                        ></div>

                        {/* Date badge */}
                        <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 bg-white/95 backdrop-blur-sm rounded-full px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 shadow-lg pointer-events-none">
                          <div className="flex items-center text-[#7d0039] text-xs sm:text-sm font-medium">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                            <span className="hidden sm:inline">
                              {item.date}
                            </span>
                            <span className="sm:hidden">
                              {item.date.split(" ")[0]}
                            </span>
                          </div>
                        </div>

                        {/* Milestone badge */}
                        <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 bg-[#7d0039]/95 backdrop-blur-sm rounded-full px-2 sm:px-3 py-0.5 sm:py-1 shadow-lg pointer-events-none">
                          <span className="text-white text-xs font-medium">
                            {item.milestone}
                          </span>
                        </div>

                        {/* Decorative elements */}
                        <motion.div
                          className="absolute bottom-2 sm:bottom-3 md:bottom-4 right-2 sm:right-3 md:right-4 pointer-events-none"
                          animate={
                            activeIndex === index
                              ? { rotate: 360 }
                              : { rotate: 0 }
                          }
                          transition={{
                            duration: 2,
                            repeat: activeIndex === index ? Infinity : 0,
                            ease: "linear",
                          }}
                        >
                          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white/90 drop-shadow-lg" />
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="p-4 sm:p-6 md:p-8">
                        <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#fe016b] mr-1 sm:mr-2" />
                          <span className="text-gray-600 text-xs sm:text-sm">
                            {item.location}
                          </span>
                        </div>

                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#7d0039] mb-2 sm:mb-3 md:mb-4 leading-tight">
                          {item.title}
                        </h3>

                        <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                          <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                            {item.description}
                          </p>
                        </div>

                        {/* Hearts decoration */}
                        <div className="flex justify-center mt-4 sm:mt-6 space-x-1 sm:space-x-2">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              animate={
                                activeIndex === index
                                  ? {
                                      y: [0, -8, 0],
                                      scale: [1, 1.2, 1],
                                    }
                                  : {}
                              }
                              transition={{
                                duration: 1.5,
                                repeat: activeIndex === index ? Infinity : 0,
                                delay: i * 0.2,
                              }}
                            >
                              <Heart
                                className="w-3 h-3 sm:w-4 sm:h-4 text-[#fe016b]"
                                fill="currentColor"
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer message */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#7d0039] to-[#fe016b] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            className="text-center max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8 opacity-30">
              "
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8">
              E essa é apenas o começo...
            </h2>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 sm:mb-8">
              Cada página dessa história foi escrita com amor, carinho e muita
              cumplicidade. E o melhor de tudo é que ainda temos toda uma vida
              pela frente para criar novos momentos inesquecíveis juntos.
            </p>

            <motion.div
              className="bg-white/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
                Manu, você é minha história favorita
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                Obrigado por escrever essa jornada incrível comigo. Obrigado por
                cada sorriso, cada conquista compartilhada, cada momento de
                felicidade que vivemos juntos.
              </p>
            </motion.div>

            <div className="text-base sm:text-lg md:text-xl font-medium mt-6 sm:mt-8">
              Com todo meu amor e gratidão,
              <br />
              Jeff ❤️
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
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
                opacity: [0.3, 0.8, 0.3],
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

      {/* Modal de Imagem Expandida */}
      <AnimatePresence>
        {expandedImage && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setExpandedImage(null)}
          >
            {/* Botão de fechar */}
            <motion.button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 text-white hover:bg-white/30 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                setExpandedImage(null);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            {/* Título da imagem */}
            <motion.div
              className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2 sm:px-6 sm:py-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-white font-bold text-sm sm:text-base md:text-lg">
                {expandedImage.title}
              </h3>
            </motion.div>

            {/* Imagem expandida */}
            <motion.div
              className="relative max-w-[95vw] max-h-[85vh] flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={expandedImage.src}
                alt={expandedImage.alt}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              />
            </motion.div>

            {/* Dica para fechar */}
            <motion.div
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-white text-xs sm:text-sm text-center">
                Clique fora da imagem ou pressione ESC para fechar
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
