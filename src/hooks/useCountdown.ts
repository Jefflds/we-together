import { useState, useEffect } from 'react';
import { CountdownTimeData } from '../types';

const calculateTimeLeft = (targetDate: Date): CountdownTimeData => {
  const difference = targetDate.getTime() - new Date().getTime();
  
  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }
  
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
};

export const useCountdown = (targetDate: Date): CountdownTimeData => {
  const [timeLeft, setTimeLeft] = useState<CountdownTimeData>(
    calculateTimeLeft(targetDate)
  );
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    
    return () => clearTimeout(timer);
  });
  
  return timeLeft;
};