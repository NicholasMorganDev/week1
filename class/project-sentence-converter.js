/*
objective: create a function that converts a string to a friendly sentence.

string method: toLowerCase(), toUpperCase(), trim(), arrow function:
*/

function convertSentence2 (text) {
  const lowerText = text.toLowerCase();
  const upperFirst = lowerText[0].toUpperCase();
  const finalText = upperFirst + lowerText.substring(1);
  return finalText;
}

const convertSentence1 = (text) => {
  const lowerText = text.toLowerCase();
  const upperFirst = lowerText[0].toUpperCase();
  const finalText = upperFirst + lowerText.substring(1);
  return finalText;
}

const sentence = 'type Better PleAse!'
const result = convertSentence2(sentence);

console.log('original:', sentence);
console.log('result:', result)

