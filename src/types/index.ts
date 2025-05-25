export interface CountdownTimeData {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface EasterEgg {
  id: string;
  hint: string;
  message: string;
  trigger: string;
}

export interface DailyLetter {
  day: number;
  date: string;
  title: string;
  letterContent?: string;
  giftImageUrl?: string;
}