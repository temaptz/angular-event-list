// Сгененрировать ID для чего либо
export const generateId = (): number => {
  return new Date().getTime() + Math.round(Math.random() * 100000);
};