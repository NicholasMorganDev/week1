//for loop for 99 bottles song.

function bottlesOfBeer (){ 
  for (let i = 99; i>=1; i--){
    let bottles = i
    console.log(`${bottles} bottles of beer on the wall. ${bottles} bottles of beer! Take one down pass it around.`)
  }
}

bottlesOfBeer()
console.log('No more bottles of beer on the wall!')