import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, Calendar, Quote } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

export function LetterPage() {
  const navigate = useNavigate();
  const { letterId } = useParams();

  useEffect(() => {
    document.title = "Carta de Amor | Jeff & Manu ❤️";
  }, []);

  const letterData = {
    "o-que-vejo-em-voce": {
      title: "O que vejo em você que você não vê",
      date: "02 de Junho, 2025",
      content: `Meu amor,

O que aprendi nesse caminho das artes marciais - que além de tudo é um estilo de vida - é que você não tem que se comparar com outras pessoas ou se diminuir.

Olha você antes de começar a faculdade, com seu conhecimento da ETEC, que já estava incrível porque o fórum já te havia feito evoluir bastante. E olha agora: você falando de direito penal, constitucional, introdução ao direito, direito civil...

Olha o tanto que você, com muito esforço, conquistou. Você está olhando para si mesma míope, cega, vendo tudo embaçado. Mas eu olho para você e vejo o quanto você cresceu como mulher, como estudante e como trabalhadora.

Lembro de você me contando que deixava o que via no fórum te afetar, te deixar maluca. Agora está toda profissional, ajuda os estagiários, fez suas conexões, conversa com o pessoal. Você entrou concursada DUAS VEZES!

Você no auge do 9° ano, mesmo estando na fase da bagunça, foi e passou no vestibular para entrar na ETEC. Você não sabia constitucional direito e fez curso. Sem diminuir ninguém, sem passar por cima de ninguém - no seu caminho, no seu esforço.

Por isso sempre falo que você é incrível, inteligente e uma inspiração. Ninguém evolui assim não, você é acima da média.

Às vezes problemas podem ocorrer, às vezes você pode estar nervosa, passar mal em dia de prova e mesmo assim ir tão bem. Na maioria das vezes, até agora, deu tudo certo. Notas boas.

Mas se um dia não der? Está tranquilo. Isso não reflete tudo isso que falei. É erguer a cabeça e continuar. Mesmo assim, eu acredito em você, na sua genialidade, no seu esforço. E sei que não vai precisar passar por problemas, pelo menos relacionados à prova.

É nesses detalhes que me atraio em você. Todo esse seu esforço em crescer na vida é APAIXONANTE. Me brilha os olhos, me alegra o coração poder falar: "MINHA namorada está ESTUDANDO para prova de DIREITO!"

Deixo explícito: DIREITO! Você é muito orgulho para mim. E tenho certeza que para sua mãe e para sua madrinha também. O brilho dela falando de você é diferente, a preocupação...

Todos nós te amamos - cada um do seu jeito. Mãe é mãe, madrinha é madrinha e namorado é namorado. Mas todo mundo sabe que você é incrível.

Eu te amo, doutora.

Com todo meu amor e admiração,
Jeff ❤️`,
    },
  };

  const currentLetter = letterData[letterId as keyof typeof letterData];

  if (!currentLetter) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#fff5f8] to-[#ffcfe0] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#7d0039] mb-4">
            Carta não encontrada
          </h1>
          <button
            onClick={() => navigate("/")}
            className="text-[#fe016b] hover:underline"
          >
            Voltar para início
          </button>
        </div>
      </div>
    );
  }

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
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-[#7d0039] to-[#fe016b] p-8 sm:p-12 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Heart className="w-8 h-8 text-white/30" fill="currentColor" />
              </div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/5 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>

              <div className="relative z-10">
                <motion.div
                  className="flex items-center mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="text-pink-100">{currentLetter.date}</span>
                </motion.div>

                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {currentLetter.title}
                </motion.h1>
              </div>
            </div>
            <div className="p-8 sm:p-12">
              <motion.div
                className="prose prose-lg max-w-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
              >
                <div className="text-6xl text-[#fe016b]/20 mb-6 leading-none">
                  <Quote className="w-16 h-16" />
                </div>

                <div className="text-gray-700 leading-relaxed text-base sm:text-lg whitespace-pre-line">
                  {currentLetter.content}
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="inline-flex items-center space-x-4 bg-white/60 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
              <Heart className="w-6 h-6 text-[#fe016b]" fill="currentColor" />
              <span className="text-[#7d0039] font-medium">
                Escrito com amor
              </span>
              <Heart className="w-6 h-6 text-[#fe016b]" fill="currentColor" />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-pink-200/20"
            style={{
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
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
    </div>
  );
}
