// Calculate the next occurrence of a specific month and day
export const getNextOccurrence = (month: number, day: number): Date => {
  const today = new Date();
  let nextOccurrence = new Date(today.getFullYear(), month - 1, day);
  
  // If this year's date has already passed, use next year's date
  if (today > nextOccurrence) {
    nextOccurrence = new Date(today.getFullYear() + 1, month - 1, day);
  }
  
  return nextOccurrence;
};

// Format a date to display in a readable format
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};