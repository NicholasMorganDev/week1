
console.log('initiate')

console.log('invoke')

const student = {
  height: '6 feet',
  age: 20,
  gender: 'male'
}

let favFoods = [
  'mango',
  'lychee',
  'strawberry',
  'papaya'
]

const homework = (food) => {
  console.log(food.shift())
  console.log(food.push('kiwi'))
}

homework(favFoods)
console.log(favFoods)