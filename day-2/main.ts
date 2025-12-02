// const INPUT_STRING =
//   "11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124";

const INPUT_STRING =
  "245284-286195,797927-983972,4949410945-4949555758,115-282,8266093206-8266228431,1-21,483873-655838,419252-466133,6190-13590,3876510-4037577,9946738680-9946889090,99954692-100029290,2398820-2469257,142130432-142157371,9797879567-9798085531,209853-240025,85618-110471,35694994-35766376,4395291-4476150,33658388-33694159,680915-772910,4973452995-4973630970,52-104,984439-1009605,19489345-19604283,22-42,154149-204168,7651663-7807184,287903-402052,2244-5558,587557762-587611332,307-1038,16266-85176,422394377-422468141";

const work = () => {
  const productIdRanges = INPUT_STRING.split(",").map((range) => {
    const [start, end] = range.split("-").map((num) => parseInt(num));
    return { start, end };
  });

  let invalidIds: number[] = [];

  // part one
  // productIdRanges.forEach((range) => {
  //   for (let i = range.start!; i <= range.end!; i++) {
  //     let str = i.toString();
  //     let firstHalf = str.slice(0, (str.length) / 2);
  //     let secondHalf = str.slice((str.length) / 2);
  //     if (firstHalf === secondHalf) {
  //       invalidIds.push(i);
  //     }
  //   }
  // });

  // part two
  productIdRanges.forEach((range) => {
    for (let i = range.start!; i <= range.end!; i++) {
      let iStr = i.toString();
      for (let j = 1; j <= iStr.length / 2; j++) {
        let subStr = iStr.substring(0, j);
        let isInvalid = true;
        let split = iStr.split("");
        while (isInvalid == true && split.length) {
          let spliced = split.splice(0, subStr.length).join("");
          if (spliced !== subStr) {
            isInvalid = false;
          }
        }

        if (isInvalid && !invalidIds.includes(i)) {
          invalidIds.push(i);
        }
      }
    }
  });

  console.log(invalidIds);

  let sumOfInvalidIds = invalidIds.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
  });

  console.log(sumOfInvalidIds);
};

work();
