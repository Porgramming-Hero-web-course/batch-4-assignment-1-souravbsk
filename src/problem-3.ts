{
  //
  // Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

  const countWordOccurrences = (sentence: string, word: string): number => {
    console.log(sentence, word);
    //convert with lowercase
    const sentenceInLowerCase: string = sentence.toLocaleLowerCase();
    const wordInLowerCase: string = word.toLocaleLowerCase();

    console.log(sentenceInLowerCase, wordInLowerCase);

    //array of words
    const wordArray: string[] = sentenceInLowerCase.split(" ");

    const wordCount = wordArray.filter(
      (item: string) => item === wordInLowerCase
    ).length;
    console.log(wordCount);
    return wordCount;
  };

  const result1 = countWordOccurrences("I love typescript", "typescript");
  //   console.log(result1) //output:1

  const result2 = countWordOccurrences(
    "I love typescript with node js, Typescript is awesome",
    "typescript"
  );

  console.log(result2); //output:2

  //
}
