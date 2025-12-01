import { input } from "./input";

class Padlock {
  numbers: number[] = [];
  currentNumberIndex: number = 0;
  currentNumber: number = 0;
  constructor(public startingPosition: number) {
    let i = 0;
    while (i <= 99) {
      this.numbers.push(i);
      i += 1;
    }

    this.currentNumberIndex = this.numbers.indexOf(this.startingPosition);
    this.currentNumber = this.numbers[this.currentNumberIndex]!;
  }

  clickLeft() {
    if (this.currentNumberIndex === 0) {
      this.currentNumberIndex = this.numbers.length - 1;
    } else {
      this.currentNumberIndex -= 1;
    }

    this.currentNumber = this.numbers[this.currentNumberIndex]!;
  }

  clickRight() {
    if (this.currentNumberIndex === this.numbers.length - 1) {
      this.currentNumberIndex = 0;
    } else {
      this.currentNumberIndex += 1;
    }
    this.currentNumber = this.numbers[this.currentNumberIndex]!;
  }
  getCurrentNumber = () => this.currentNumber;
}

const calculateCurrentPosition = (
  currentPosition: number,
  turn: string,
  steps: number,
  length: number
): number => {
  if (turn === "L") {
    return (currentPosition - steps + length) % length;
  } else if (turn === "R") {
    return (currentPosition + steps) % length;
  } else return -1;
};

const partOne = () => {
  const padlock = new Padlock(50);
  let zeroCount = 0;

  input.forEach((instruction: string) => {
    const turn = instruction[0] as string;
    const steps = parseInt(instruction.slice(1), 10);

    for (let step = 0; step < steps; step++) {
      if (turn === "L") {
        padlock.clickLeft();
      } else if (turn === "R") {
        padlock.clickRight();
      }
    }
    if (padlock.getCurrentNumber() === 0) {
      zeroCount += 1;
    }
  });

  console.log(zeroCount);
};

const partTwo = () => {
  const padlock = new Padlock(50);
  let zeroCount = 0;

  input.forEach((instruction: string) => {
    const turn = instruction[0] as string;
    const steps = parseInt(instruction.slice(1), 10);
    for (let step = 0; step < steps; step++) {
      if (turn === "L") {
        padlock.clickLeft();
      } else if (turn === "R") {
        padlock.clickRight();
      }
      if (padlock.getCurrentNumber() === 0) {
        zeroCount += 1;
      }
    }
  });

  console.log(zeroCount);
};

const work = async () => {
  partOne();
  partTwo();
};

work();
