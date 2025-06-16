import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Heart } from "lucide-react";

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

    "pedido-de-desculpas": {
      title: "Do fundo do meu coração",
      date: "16 de Junho, 2025",
      content: `Meu amor,

Eu queria te pedir um tempo pra falar do fundo do coração. Não é fácil pra mim reconhecer quando erro, mas hoje, mais do que nunca, eu preciso fazer isso. Preciso te pedir desculpas — sinceras, profundas, com total consciência de tudo o que estou sentindo e do que te fiz sentir.

Eu percebi que estou deixando os meus sentimentos falarem mais alto do que o cuidado e o respeito que eu tenho por você. Tô me deixando levar por inseguranças que nem sempre têm a ver com você, mas que acabam recaindo sobre nós. E isso te sufoca. Isso te pesa. E isso, sinceramente, me machuca também, porque eu nunca quis ser esse peso pra ti.

Quando eu te perguntei se você sentia que eu estava te sufocando, e você respondeu que sim... aquilo me bateu forte. Porque eu sei que não é assim que se constrói algo bom, leve, duradouro. Não é com controle, com ansiedade, com medo. É com confiança, parceria, espaço, equilíbrio. E eu falhei nisso.

Você é uma mulher livre, forte, carinhosa, intensa — e eu deveria estar ao seu lado como alguém que fortalece isso, e não como alguém que te prende. Eu tô trazendo pra nossa relação fantasmas de experiências passadas que não têm lugar aqui. E isso é injusto com você. Com o que estamos tentando construir.

A verdade é que eu gosto muito de você. E talvez seja justamente por isso que eu tenha agido errado: querendo proteger o que ainda tá sendo formado, eu acabei pressionando. Só que amor não é sobre cercar, é sobre cuidar. E cuidar também é saber dar espaço, é confiar, é respeitar o silêncio, o tempo, o jeito de cada um.

Eu não quero que você se sinta sobrecarregada. Muito menos sozinha dentro de algo que deveria te fazer bem. O que eu mais quero agora é aprender — aprender a ser mais leve, mais parceiro, mais presente do jeito certo. Quero trabalhar em mim essas inseguranças que não têm nada a ver com você, mas que te afetam. E eu não quero mais isso.

Você não tem obrigação de aguentar os meus medos, mas ainda assim, obrigada por ter sido honesta comigo. Obrigada por não ter fingido que estava tudo bem. Só pessoas verdadeiras fazem isso — e eu admiro ainda mais você por isso.

Não tô aqui te pedindo pra esquecer o que aconteceu, mas sim pra confiar que eu entendi. E que eu quero mudar. Por mim, por você, por nós. Quero que a gente possa caminhar junto com mais leveza, com mais compreensão, com mais liberdade — sem perder o cuidado, o carinho, a parceria.

Desculpa de verdade se eu te fiz sentir sufocada, pesada, triste... Eu prometo que vou trabalhar em mim pra que isso não se repita. E espero que a gente ainda consiga construir algo bonito, com respeito, com espaço, e com muito amor.

Com carinho e sinceridade,
Jeff ❤️`,
    },
  };

  const currentLetter = letterData[letterId as keyof typeof letterData];

  if (!currentLetter) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-700 mb-4">
            Carta não encontrada
          </p>
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center space-x-2 bg-[#7d0039] text-white px-4 py-2 rounded-full transition-transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff5f8] via-[#ffcfe0] to-[#f8f4ff] py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-[#7d0039] hover:text-[#fe016b] transition-colors mb-6 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Voltar para início</span>
        </button>

        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl border border-pink-100/50 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#7d0039] via-[#fe016b] to-[#7d0039]"></div>

          <div className="absolute top-4 right-4 opacity-20">
            <Heart className="w-12 h-12 text-[#fe016b]" fill="currentColor" />
          </div>
          <div className="relative z-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#7d0039] mb-3">
              {currentLetter.title}
            </h1>

            <div className="flex items-center mb-6">
              <time className="text-sm text-gray-500">
                {currentLetter.date}
              </time>
            </div>

            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
              <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                {currentLetter.content}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
