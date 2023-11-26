import React from "react";

const useRandomNumbers = (amount: number, max: number): number[] => {
  const [randomNumbers, setRandomNumbers] = React.useState<number[]>([]);

  React.useEffect(() => {
    const generateRandomNumbers = () => {
      const numbers: number[] = [];
      while (numbers.length < amount) {
        const randomNumber = Math.floor(Math.random() * max) + 1;
        if (!numbers.includes(randomNumber)) {
          numbers.push(randomNumber);
        }
      }
      setRandomNumbers(numbers);
    };

    generateRandomNumbers();
  }, [amount, max]);

  return randomNumbers;
};

export default useRandomNumbers;
