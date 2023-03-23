
//Write a function that multiplies two numbers

function multiply (number, number1){
  let result = number * number1;
  return result;
}

const sum = multiply(2, 4)
console.log(sum)

let score = 50
function assignGrade(score){ 
  if (score >= 90){
    console.log('A')
  } else if (score <= 89 && score >= 80){
    console.log('B')
  } else if (score <= 79 && score >= 70){
    console.log('C')
  } else if (score <= 69 && score >= 60){
    console.log('D')
  } else {
    console.log('F')
  }
}

assignGrade(50)

let clothing = [
  'Hoodie',
  'Sweatshirt',
  'Jeans',
  'T-Shirt',
]

console.log(clothing)
console.log(clothing[0])



