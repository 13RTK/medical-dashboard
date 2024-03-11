export const getViteConfig = (key) => {
  return import.meta.env[`VITE_${key}`];
};
