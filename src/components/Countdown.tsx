import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import { getNextOccurrence } from '../utils/dateUtils';
import { Heart, Clock, Gift, Calendar } from 'lucide-react';

const CountdownUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center bg-white rounded-lg shadow-md px-4 py-3 w-20 md:w-28">
    <span className="text-xl md:text-3xl font-bold text-pink-600">{value}</span>
    <span className="text-xs md:text-sm text-pink-500">{label}</span>
  </div>
);

const Countdown: React.FC = () => {
  // Valentine's Day - June 12, 2025
  const valentinesDate = new Date('2025-06-12T00:00:00');
  const timeUntilValentines = useCountdown(valentinesDate);
  
  // Birthday - October 4 (next occurrence)
  const birthdayDate = getNextOccurrence(10, 4);
  const timeUntilBirthday = useCountdown(birthdayDate);
  
  return (
    <section id="countdown" className="py-16 bg-gradient-to-b from-pink-50 to-pink-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-pink-200 p-3 rounded-full mb-4">
            <Heart className="w-8 h-8 text-pink-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">
            Contagem Regressiva para o Dia dos Namorados
          </h2>
          <p className="text-pink-600 text-lg">
            <Clock className="inline-block w-5 h-5 mr-2" />
            12 de Junho de 2025
          </p>
        </div>
        
        {/* Main countdown */}
        <div className="flex justify-center space-x-2 md:space-x-4 mb-12">
          <CountdownUnit value={timeUntilValentines.days} label="Dias" />
          <CountdownUnit value={timeUntilValentines.hours} label="Horas" />
          <CountdownUnit value={timeUntilValentines.minutes} label="Minutos" />
          <CountdownUnit value={timeUntilValentines.seconds} label="Segundos" />
        </div>
        
        {/* Divider */}
        <div className="flex items-center justify-center mb-12">
          <div className="h-px bg-pink-300 w-24 md:w-32"></div>
          <Gift className="w-6 h-6 text-pink-500 mx-4" />
          <div className="h-px bg-pink-300 w-24 md:w-32"></div>
        </div>
        
        {/* Birthday countdown */}
        <div className="text-center mb-6">
          <div className="inline-block bg-pink-200 p-2 rounded-full mb-3">
            <Calendar className="w-6 h-6 text-pink-600" />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-pink-700 mb-3">
            Data Especial: Seu Aniversário
          </h3>
          <p className="text-pink-600">04 de Outubro</p>
        </div>
        
        <div className="flex justify-center space-x-2 md:space-x-4">
          <CountdownUnit value={timeUntilBirthday.days} label="Dias" />
          <CountdownUnit value={timeUntilBirthday.hours} label="Horas" />
        </div>
      </div>
    </section>
  );
};

export default Countdown;