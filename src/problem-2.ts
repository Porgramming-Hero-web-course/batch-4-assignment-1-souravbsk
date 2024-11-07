{
  // Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

  const removeDuplicates = (numbers: number[]): number[] => {
    console.log(numbers);

    let uniqueNum: number[] = [];
    numbers.forEach((num: number) => {
      if (!uniqueNum.includes(num)) {
        uniqueNum.push(num);
      }
    });
    return uniqueNum;
  };

  const result1 = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
  //  console.log(result1) //output: [ 1, 2, 3, 4, 5 ]

  
  const result2 = removeDuplicates([1, 1, 6, 8, 6, 2, 2, 80, 10, 80, 4, 5]);
  //   console.log(result2); // output: [ 1,  6, 8, 2, 80, 10, 4, 5 ]

  //
}
