const input = [
  "987654321111111",
  "811111111111119",
  "234234234234278",
  "818181911112111",
];

const partOne = () => {
  let totalOutputJoltage = 0;
  // input.forEach((batteryBank) => {
  //   const sorted = batteryBank.split("").sort().reverse();
  //   sorted.
  //   const largestJoltage = parseInt(
  //     [sorted[0]?.toString(), sorted[1]?.toString()].join("")
  //   );

  //   console.log({ batteryBank, sorted, largestJoltage });
  //   totalOutputJoltage += largestJoltage;
  // });

  // input.forEach((batteryBank) => {
  //   const numbers = batteryBank.split("").map((digit) => parseInt(digit, 10));
  //   const firstNumber = Math.max(...numbers);
  //   const firstNumberIndex = numbers.indexOf(firstNumber);

  //   let numbersAfterFirstNumber = numbers.slice(firstNumberIndex + 1);
  //   // numbersAfterFirstNumber.slice(firstNumberIndex + 1);
  //   const secondNumber = Math.max(...numbersAfterFirstNumber);
  //   const secondNumberIndex = numbers.indexOf(secondNumber);

  //   const result =
  //     firstNumberIndex < secondNumberIndex
  //       ? parseInt(`${firstNumber}${secondNumber}`)
  //       : parseInt(`${secondNumber}${firstNumber}`);

  //   // console.log({ batteryBank, largestJoltagePossible: result });
  //   console.log({
  //     batteryBank,
  //     numbers,
  //     firstNumber,
  //     firstNumberIndex,
  //     numbersAfterFirstNumber,
  //     secondNumber,
  //     secondNumberIndex,
  //     result
  //   });

  //   totalOutputJoltage += result;
  // });

  // input.forEach((batteryBank) => {
  //   const numbers = batteryBank.split("").map((digit) => parseInt(digit, 10));
  //   const max = Math.max(...numbers);
  //   const maxIndex = numbers.indexOf(max);

  //   const sliced = numbers.slice(maxIndex);
  //   const secondMax = Math.max(...sliced);

  //   const result = parseInt(`${max}${secondMax}`);

  //   console.log({
  //     batteryBank,
  //     numbers,
  //     max,
  //     maxIndex,
  //     sliced,
  //     secondMax,
  //     result,
  //   });
  //   totalOutputJoltage += result;
  // });

  // input.forEach((batteryBank) => {
  //   const resultArray: number[] = [];

  //   const numbers = batteryBank.split("").map((digit) => parseInt(digit, 10));
  //   numbers.forEach((number) => {
  //     console.log({ number, resultArray });
  //     // if (number >= resultArray[1]! || number >= resultArray[0]!) {
  //     //   resultArray.shift();
  //     //   resultArray.push(number);
  //     // }
  //     if ((resultArray.length < 2) || number > resultArray[1]!) {
  //       resultArray.shift();
  //       resultArray.push(number);
  //     }
  //   });

  //   const result = parseInt(resultArray.join(""));

  //   console.log({ batteryBank, resultArray, result });

  //   totalOutputJoltage += result;
  // });

  //

  console.log(totalOutputJoltage);
};

const work = () => {
  partOne();
};

work();
