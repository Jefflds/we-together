export const getNextOccurrence = (month: number, day: number): Date => {
  const today = new Date();
  let nextOccurrence = new Date(today.getFullYear(), month - 1, day);

  if (today > nextOccurrence) {
    nextOccurrence = new Date(today.getFullYear() + 1, month - 1, day);
  }

  return nextOccurrence;
};
