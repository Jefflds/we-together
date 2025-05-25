import { useEffect, useState, useRef } from "react";
import {
  Scale,
  BookOpen,
  Gavel,
  Hourglass,
  Scroll,
  Star,
  Moon,
  SunMoon,
  Sparkles,
} from "lucide-react";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingPageProps {
  onLoadingComplete: () => void;
}

export default function LoadingPage({ onLoadingComplete }: LoadingPageProps) {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const lottieRef = useRef<Player>(null);

  const loadingPhrases = [
    "O amor é a lei mais alta...",
    "A justiça do coração não precisa de códigos...",
    "Defendendo nosso amor todos os dias...",
    "Onde há amor, há justiça...",
    "Preparando o processo de amor...",
    "Como as estrelas no céu, nosso amor é eterno...",
    "O universo conspirou para nos unir...",
    "Seu amor me guia como as constelações...",
    "No tribunal da vida, nosso amor sempre vence...",
    "A lei do amor está além de qualquer jurisdição...",
    "Nossa história está escrita nas estrelas...",
  ];

  const lawElements = [
    {
      icon: Scale,
      text: "Balança da Justiça",
      color: "text-pink-200",
      position: "top",
    },
    {
      icon: Gavel,
      text: "Martelo do Juiz",
      color: "text-pink-200",
      position: "bottom",
    },
    {
      icon: BookOpen,
      text: "Código de Leis",
      color: "text-pink-200",
      position: "left",
    },
    {
      icon: Scroll,
      text: "Petição Judicial",
      color: "text-pink-200",
      position: "right",
    },
  ];

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.play();
    }

    const phraseInterval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % loadingPhrases.length);
    }, 2800);

    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 98) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 0.8; 
      });
    }, 200);

    const timer = setTimeout(() => {
      setFadeOut(true);

      setTimeout(() => {
        onLoadingComplete();
      }, 1500);
    }, 12000);

    return () => {
      clearInterval(phraseInterval);
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [loadingPhrases.length, onLoadingComplete]);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 100; i++) {
      const size = Math.random() * 3.5 + 1;
      if (i < 80) {
        stars.push(
          <div
            key={i}
            className="absolute bg-white rounded-full z-0"
            style={{
              width: size,
              height: size,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.1,
            }}
          />
        );
      } else {
        stars.push(
          <motion.div
            key={i}
            className="absolute bg-white rounded-full z-0"
            style={{
              width: size,
              height: size,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.15,
            }}
            animate={{
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 10,
            }}
          />
        );
      }
    }
    return stars;
  };

  const renderConstellation = () => {
    const constellations = [
      [
        { x: 15, y: 25 },
        { x: 25, y: 40 },
        { x: 40, y: 35 },
        { x: 55, y: 45 },
      ],
      [
        { x: 65, y: 20 },
        { x: 75, y: 30 },
        { x: 85, y: 22 },
        { x: 90, y: 35 },
      ],
    ];

    return (
      <div className="absolute inset-0 z-0">
        {constellations.map((points, constellationIndex) => (
          <svg
            key={constellationIndex}
            className="w-full h-full absolute"
            style={{ opacity: 0.1 }}
          >
            {points.map((point, i) => {
              if (i < points.length - 1) {
                return (
                  <line
                    key={i}
                    x1={`${point.x}%`}
                    y1={`${point.y}%`}
                    x2={`${points[i + 1].x}%`}
                    y2={`${points[i + 1].y}%`}
                    stroke="rgba(255, 255, 255, 0.4)"
                    strokeWidth="1"
                  />
                );
              }
              return null;
            })}
            {points.map((point, i) => (
              <circle
                key={i}
                cx={`${point.x}%`}
                cy={`${point.y}%`}
                r="1.5"
                fill="white"
                opacity="0.6"
              />
            ))}
          </svg>
        ))}
      </div>
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-violet-950 to-indigo-950 z-50 overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: fadeOut ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(32, 5, 58, 0.8) 0%, rgba(13, 13, 37, 1) 100%)",
            backgroundSize: "cover",
          }}
        />
        {renderConstellation()}
        <div className="absolute inset-0 overflow-hidden">{renderStars()}</div>
        <motion.div
          className="max-w-md w-full px-6 py-8 relative z-10"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl font-bold text-white text-center mb-2"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Amor & Justiça
          </motion.h2>
          <motion.div
            className="text-center text-pink-200 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Sob as estrelas dos zodíacos
          </motion.div>
          <div className="relative h-72 w-72 mx-auto mb-8">
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-pink-400 border-opacity-20"
              initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
              animate={{
                rotate: 360,
                scale: 1,
                opacity: 0.7,
              }}
              transition={{
                rotate: {
                  duration: 80,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: { duration: 3 },
                opacity: { duration: 3 },
              }}
            />
            <motion.div
              className="absolute inset-8 rounded-full border-2 border-indigo-400 border-opacity-30"
              initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
              animate={{
                rotate: -360,
                scale: 1,
                opacity: 0.7,
              }}
              transition={{
                rotate: {
                  duration: 65,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: { duration: 3, delay: 0.3 },
                opacity: { duration: 3, delay: 0.3 },
              }}
            />
            <div className="absolute inset-16 flex items-center justify-center">
              <Player
                ref={lottieRef}
                autoplay={true}
                loop={true}
                src="https://assets7.lottiefiles.com/packages/lf20_jtbfg2nb.json"
                style={{ width: "140px", height: "140px" }}
              />
            </div>
            {lawElements.map((item, index) => {
              let positionProps = {};

              switch (item.position) {
                case "top":
                  positionProps = {
                    className:
                      "absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6",
                  };
                  break;
                case "bottom":
                  positionProps = {
                    className:
                      "absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6",
                  };
                  break;
                case "left":
                  positionProps = {
                    className:
                      "absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6",
                  };
                  break;
                case "right":
                  positionProps = {
                    className:
                      "absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6",
                  };
                  break;
                default:
                  break;
              }

              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  {...positionProps}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    y:
                      item.position === "top"
                        ? [-6, -8, -6]
                        : item.position === "bottom"
                        ? [6, 8, 6]
                        : 0,
                    x:
                      item.position === "left"
                        ? [-6, -8, -6]
                        : item.position === "right"
                        ? [6, 8, 6]
                        : 0,
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    opacity: { duration: 1 },
                    y: {
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: index * 0.5,
                    },
                    x: {
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: index * 0.5,
                    },
                    scale: {
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: index * 0.5,
                    },
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="relative group">
                    <Icon className={`w-10 h-10 ${item.color}`} />
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 backdrop-blur-sm px-2 py-1 rounded text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.text}
                    </div>
                  </div>
                </motion.div>
              );
            })}
            <motion.div
              className="absolute top-1/4 right-1/4"
              animate={{
                scale: [1, 1.08, 1],
                rotate: 360,
              }}
              transition={{
                scale: {
                  duration: 12,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
                rotate: {
                  duration: 120,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
            </motion.div>
            <motion.div
              className="absolute bottom-1/4 left-1/4"
              animate={{
                scale: [1, 1.08, 1],
                rotate: 360,
              }}
              transition={{
                scale: {
                  duration: 14,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5,
                },
                rotate: {
                  duration: 150,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              <Moon className="w-6 h-6 text-blue-200 fill-blue-200" />
            </motion.div>
          </div>
          <div className="h-20 mb-6 relative">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentPhraseIndex}
                className="text-center text-white text-xl absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.9 }}
              >
                {loadingPhrases[currentPhraseIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
          <div className="bg-white bg-opacity-15 h-3 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 h-full rounded-full"
              style={{ width: `${loadingProgress}%` }}
              initial={{ width: "0%" }}
              animate={{ width: `${loadingProgress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
          <div className="flex justify-center space-x-8 mt-8">
            <motion.div
              animate={{
                y: [0, -2, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
              }}
            >
              <Hourglass className="w-8 h-8 text-pink-300" />
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                rotate: [0, 360],
              }}
              transition={{
                scale: {
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
                rotate: {
                  duration: 120,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              <SunMoon className="w-8 h-8 text-yellow-300" />
            </motion.div>
            <motion.div
              animate={{
                y: [0, -2, 0],
                filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Sparkles className="w-8 h-8 text-blue-300" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
