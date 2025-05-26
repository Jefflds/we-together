import { useEffect, useState, useMemo } from "react";
import { useCountdown } from "../hooks/useCountdown";
import { getNextOccurrence } from "../utils/dateUtils";
import {
  Heart,
  Clock,
  Calendar,
  Scale,
  Gavel,
  BookOpen,
  Star,
  SquareAsterisk,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const getZodiacSign = (month: number, day: number) => {
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19))
    return { sign: "Áries", symbol: "♈", element: "Fogo" };
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20))
    return { sign: "Touro", symbol: "♉", element: "Terra" };
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20))
    return { sign: "Gêmeos", symbol: "♊", element: "Ar" };
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22))
    return { sign: "Câncer", symbol: "♋", element: "Água" };
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22))
    return { sign: "Leão", symbol: "♌", element: "Fogo" };
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22))
    return { sign: "Virgem", symbol: "♍", element: "Terra" };
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22))
    return { sign: "Libra", symbol: "♎", element: "Ar" };
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
    return { sign: "Escorpião", symbol: "♏", element: "Água" };
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
    return { sign: "Sagitário", symbol: "♐", element: "Fogo" };
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
    return { sign: "Capricórnio", symbol: "♑", element: "Terra" };
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
    return { sign: "Aquário", symbol: "♒", element: "Ar" };
  return { sign: "Peixes", symbol: "♓", element: "Água" };
};

const legalTerms = [
  "Decreto de Amor",
  "Jurisprudência do Coração",
  "Processo Especial",
  "Sentença de Felicidade",
  "Código de Afeto",
  "Mandado de Carinho",
  "Petição de Amor",
];

const CountdownUnit: React.FC<{
  value: number;
  label: string;
  color?: string;
}> = ({ value, label, color = "from-[#7d0039] to-[#fe016b]" }) => (
  <motion.div
    className={`flex flex-col items-center rounded-lg shadow-lg px-4 py-3 w-20 md:w-28 
                bg-gradient-to-br ${color} relative overflow-hidden`}
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <span className="text-xl md:text-3xl font-bold text-white">
      {value.toString().padStart(2, "0")}
    </span>
    <span className="text-xs md:text-sm text-pink-100">{label}</span>
    <div className="absolute -right-2 -bottom-2 opacity-10">
      <Scale className="w-12 h-12 text-white" />
    </div>
  </motion.div>
);

export function Countdown() {
  const [randomLegalTerm, setRandomLegalTerm] = useState(legalTerms[0]);
  const [legalTermIndex, setLegalTermIndex] = useState(0);

  const [legalDocNumber] = useState(Math.floor(Math.random() * 9000) + 1000);
  const [processNumber] = useState(Math.floor(Math.random() * 9000) + 1000);

  const starPositions = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((_, i) => ({
          left: `${15 + i * 12}%`,
          top: `${Math.random() * 80}%`,
          animDuration: 4 + Math.random() * 4,
          delay: i * 0.6,
        })),
    []
  );

  const valentinesDate = new Date("2025-06-12T00:00:00");
  const timeUntilValentines = useCountdown(valentinesDate);
  const valentinesZodiac = getZodiacSign(6, 12);

  const birthdayDate = getNextOccurrence(10, 4);
  const timeUntilBirthday = useCountdown(birthdayDate);
  const birthdayZodiac = getZodiacSign(10, 4);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (legalTermIndex + 1) % legalTerms.length;
      setLegalTermIndex(nextIndex);
      setRandomLegalTerm(legalTerms[nextIndex]);
    }, 15000);

    return () => clearInterval(interval);
  }, [legalTermIndex]);

  return (
    <section
      id="countdown"
      className="py-16 bg-gradient-to-b from-[#400020] to-[#2d0019] text-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block bg-gradient-to-r from-[#7d0039] to-[#fe016b] p-3 rounded-full mb-4 relative">
            <Heart className="w-8 h-8 text-white" fill="white" />
            <motion.div
              className="absolute -top-1 -right-1"
              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-5 h-5 text-yellow-300" />
            </motion.div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-pink-200 mb-4">
            Contagem para Nosso Dia Especial
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-2 text-pink-300 text-lg mb-4">
            <Clock className="inline-block w-5 h-5" />
            <span>12 de Junho de 2025</span>
            <span className="mx-2 text-pink-400">|</span>
            <div className="flex items-center">
              <span className="text-xl mr-2">{valentinesZodiac.symbol}</span>
              <span>{valentinesZodiac.sign}</span>
            </div>
          </div>

          <div className="bg-[#7d0039]/20 backdrop-blur-sm rounded-lg p-3 inline-block text-pink-200 text-sm font-medium mb-8 border-l-4 border-[#fe016b] shadow-lg shadow-pink-900/20">
            <div className="flex items-center">
              <Scale className="w-4 h-4 mr-2" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={legalTermIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 1.5 }}
                >
                  {randomLegalTerm} Nº {legalDocNumber}/25
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 max-w-2xl mx-auto mb-12">
          <CountdownUnit value={timeUntilValentines.days} label="Dias" />
          <CountdownUnit
            value={timeUntilValentines.hours}
            label="Horas"
            color="from-[#8c0041] to-[#b9014d]"
          />
          <CountdownUnit
            value={timeUntilValentines.minutes}
            label="Minutos"
            color="from-[#7d0039] to-[#fe016b]"
          />
          <CountdownUnit
            value={timeUntilValentines.seconds}
            label="Segundos"
            color="from-[#8c0041] to-[#b9014d]"
          />
        </div>

        <div className="flex items-center justify-center mb-12 relative">
          <div className="h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent w-full max-w-xs"></div>

          <div className="absolute bg-[#300018] p-2 rounded-full">
            <motion.div
              className="bg-gradient-to-r from-[#7d0039] to-[#fe016b] p-3 rounded-full"
              animate={{
                rotate: [0, 10, 0, -10, 0],
                scale: [1, 1.05, 1, 1.05, 1],
              }}
              transition={{ duration: 10, repeat: Infinity }}
            >
              <Gavel className="w-6 h-6 text-white" />
            </motion.div>
          </div>
        </div>

        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="bg-gradient-to-r from-[#7d0039] to-[#fe016b] p-2 rounded-full">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl">{birthdayZodiac.symbol}</div>
          </div>

          <h3 className="text-xl md:text-2xl font-semibold text-pink-200 mb-3">
            Data Especial: Seu Aniversário
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-2 text-pink-300 mb-6">
            <span>04 de Outubro</span>
            <span className="mx-2 text-pink-400">|</span>
            <div className="flex items-center">
              <span>{birthdayZodiac.sign}</span>
              <div className="ml-2 text-xs px-2 py-1 rounded-full bg-[#7d0039]/40 text-pink-200">
                Elemento: {birthdayZodiac.element}
              </div>
            </div>
          </div>

          <div className="bg-[#7d0039]/30 backdrop-blur-sm border border-pink-800/30 p-4 rounded-lg max-w-xl mx-auto mb-6 shadow-lg shadow-pink-900/10">
            <div className="flex items-start">
              <div className="mr-3">
                <BookOpen className="w-6 h-6 text-pink-300" />
              </div>
              <div className="text-left text-sm text-pink-100">
                <p className="font-semibold text-pink-200 mb-1">
                  Intimação Especial
                </p>
                <p>
                  Fica o(a) intimado(a) a comparecer na data de 04/10 para
                  celebração do processo de vida nº {new Date().getFullYear()}-
                  {processNumber}, sob regência do signo de{" "}
                  {birthdayZodiac.sign}.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center space-x-3 md:space-x-4">
          <CountdownUnit
            value={timeUntilBirthday.days}
            label="Dias"
            color="from-[#8c0041] to-[#b9014d]"
          />
          <CountdownUnit
            value={timeUntilBirthday.hours}
            label="Horas"
            color="from-[#7d0039] to-[#fe016b]"
          />
        </div>

        <div className="relative h-20 mt-10">
          {starPositions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: pos.left,
                top: pos.top,
              }}
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: pos.animDuration,
                repeat: Infinity,
                delay: pos.delay,
              }}
            >
              <Star className="w-4 h-4 text-pink-300" fill="#ffc0cb" />
            </motion.div>
          ))}

          <motion.div
            className="absolute right-1/4 top-1/2"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <SquareAsterisk className="w-8 h-8 text-pink-500 opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
