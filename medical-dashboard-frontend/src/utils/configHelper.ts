export const getViteConfig = (key: string): string => {
  return import.meta.env[`VITE_${key}`];
};
