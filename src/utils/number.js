export const getModuloCount = (num, moduloNum) => {
  const restNum = num % moduloNum;
  return (num - restNum) / moduloNum;
};
