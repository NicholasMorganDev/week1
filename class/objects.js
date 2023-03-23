
const shirt = {
  shirtName: 'denim jacket',
  color: 'black',
  quantity: 1,
  size: 'lg',
  like: true
}

// const shirtColor = shirt['color']
// console.log(shirtColor)
// console.log(shirt)

const hoodie = {
  shirtName: 'lax hoodie',
  color: 'white',
  quantity: 1,
  size: 'lg',
  like: true
}

//Bracket Notation
const hoodieSize = hoodie['size']

//Dot Notation
const hoodieLike = hoodie.like
const hoodieQuantity = hoodie.quantity
const hoodieColor = hoodie.color
const hoodieName = hoodie.shirtName

console.log('size: ', hoodieSize)
console.log('like: ', hoodieLike)
console.log('quantity:', hoodieQuantity)
console.log('color: ', hoodieColor)
console.log('shirt name: ', hoodieName)