import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart, Gift, ThumbsUp, Star, ImageIcon } from "lucide-react";

export function OurDaySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [currentModalImage, setCurrentModalImage] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const carouselImages = [
    "/nosso-dia/1.jpeg",
    "/nosso-dia/2.jpeg", 
    "/nosso-dia/3.jpeg"
  ];
  
  const gifts = [
    {
      image: "/nosso-dia/meu-presente.jpeg",
      title: "Seu presente para mim",
      description: "Um presente especial que guardarei para sempre com carinho."
    },
    {
      image: "/nosso-dia/seu-presente.jpeg",
      title: "Meu presente para você",
      description: "Escolhido com todo amor e carinho, pensando em você."
    }
  ];

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

  useEffect(() => {
    if (isImageModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isImageModalOpen]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  }, [carouselImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  }, [carouselImages.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const openImageModal = useCallback((imageSrc: string) => {
    setCurrentModalImage(imageSrc);
    setIsImageModalOpen(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isVisible && !isImageModalOpen) {
        nextSlide();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isVisible, isImageModalOpen, currentSlide, nextSlide]);

  return (
    <section 
      className="py-16 sm:py-20 bg-gradient-to-b from-[#fff5f8]/60 to-[#ffcfe0]/60 relative overflow-hidden" 
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block bg-gradient-to-r from-[#7d0039] to-[#fe016b] p-3 sm:p-4 rounded-full mb-4 sm:mb-6 relative">
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="white" />
            <motion.div
              className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-yellow-300 rounded-full p-0.5 sm:p-1"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[#7d0039]" fill="currentColor" />
            </motion.div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-[#7d0039]">Nosso</span>
            <span className="text-[#fe016b] ml-2">Dia Especial</span>
          </h2>
          
          <div className="w-16 sm:w-24 md:w-32 lg:w-40 h-0.5 sm:h-1 bg-gradient-to-r from-[#7d0039] via-[#fe016b] to-[#7d0039] mx-auto rounded-full mb-6 sm:mb-8"></div>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
            Momentos inesquecíveis do nosso dia especial, 
            <span className="font-semibold text-[#7d0039]"> eternizados em imagens</span> e 
            com lembranças que guardaremos para sempre em nossos corações.
          </p>
        </motion.div>
        <motion.div
          className="max-w-4xl mx-auto mb-16 sm:mb-20 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[30rem] overflow-hidden rounded-2xl shadow-xl cursor-pointer group">
            {carouselImages.map((image, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: index === currentSlide ? 1 : 0,
                  scale: index === currentSlide ? 1 : 1.1
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                onClick={() => openImageModal(image)}
              >
                <img
                  src={image}
                  alt={`Nosso dia especial ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl"></div>
                
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white flex justify-between items-center">
                  <p className="font-medium text-sm sm:text-base md:text-lg">
                    Momentos especiais <span className="text-pink-200">♥</span>
                  </p>
                  <p className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm">
                    {index + 1}/{carouselImages.length}
                  </p>
                </div>
              </motion.div>
            ))}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-full">
                <ImageIcon className="w-6 h-6 sm:w-8 sm:h-8 text-[#7d0039]" />
              </div>
            </div>
            <button
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/95 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-md transition-colors z-10 opacity-70 hover:opacity-100"
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#7d0039]" />
            </button>
            
            <button
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/95 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-md transition-colors z-10 opacity-70 hover:opacity-100"
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#7d0039]" />
            </button>
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToSlide(index);
                  }}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                    currentSlide === index
                      ? "bg-white scale-125 w-4 sm:w-6"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          className="text-center mb-12 sm:mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-[#7d0039] to-[#fe016b] p-3 sm:p-4 rounded-full mb-4 sm:mb-6">
            <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#7d0039]">
            Nossos Presentes
          </h3>
          
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-8 sm:mb-10">
            Cada presente representa um pedacinho do nosso amor, 
            escolhido com carinho e entregue com o coração.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {gifts.map((gift, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => openImageModal(gift.image)}
            >
              <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden group">
                <img
                  src={gift.image}
                  alt={gift.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute inset-0 bg-[#fe016b]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/80 backdrop-blur-sm p-2 rounded-full">
                    <ImageIcon className="w-6 h-6 text-[#7d0039]" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="font-bold text-lg sm:text-xl">{gift.title}</h4>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-gray-700 text-sm sm:text-base">{gift.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg max-w-3xl mx-auto mt-12 sm:mt-16 border border-pink-200/30"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-[#7d0039] to-[#fe016b] p-2.5 sm:p-3 rounded-full">
              <ThumbsUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
          </div>
          
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#7d0039] text-center mb-4 sm:mb-6">
            Nosso Agradecimento
          </h3>
          
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-700">
            <p className="text-center">
              Quero agradecer profundamente por todos os presentes e momentos especiais 
              que compartilhamos neste dia tão significativo para nós. Cada presente recebido 
              representa não apenas um objeto material, mas um símbolo do carinho e 
              consideração que você tem por mim.
            </p>
            <p className="text-center">
              Esses momentos e lembranças serão para sempre guardados em nossos corações, 
              e fazem parte da história de amor que estamos construindo juntos.
            </p>
          </div>
          
          <div className="text-center mt-6 sm:mt-8 text-lg sm:text-xl font-medium text-[#fe016b]">
            Com carinho, Jeff para Manu❤️
          </div>
        </motion.div>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#fe016b]/10"
            style={{
              width: Math.random() * 80 + 40,
              height: Math.random() * 80 + 40,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: Math.random() * 6 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsImageModalOpen(false)}
          >
            <motion.button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 text-white hover:bg-white/30 transition-colors z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            <motion.div
              className="max-w-full max-h-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", bounce: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={currentModalImage} 
                alt="Imagem ampliada" 
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}