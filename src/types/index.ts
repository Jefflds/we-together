export interface CountdownTimeData {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface DailyLetter {
  day: number;
  date: string;
  title: string;
  letterContent?: string;
  giftImageUrl?: string;
}