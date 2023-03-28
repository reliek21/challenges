// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Todo:
// 1. function to take an array
// 2. smashes them together into a sentences
// 3. return the sentence
// 4. add space beetween each word
// 5. shouldn't be a space at the beginning or the end of the sentece

const wordList = ['hello', 'world', 'this', 'is', 'great'];

export function smash (words: string[]): string {
   return words.join(' ');
};

console.log(smash(wordList));

// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'