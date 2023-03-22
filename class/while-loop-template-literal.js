// let i = 0
// const end = 10

// while (i < end ) {
//     const result = i + 'hi'
//     console.log(result)
//     i++;
// }

function loopWhile(){

    let i = 0
    const end = 5

    while ( i < end ) {
        const result = i + " " + 'hello';
        console.log(result)
        i++;
    }
}

function madLib(name, car, color){
  const sentence = `Hello my name is ${name}. I drive a ${car} that is ${color}.`
  console.log(sentence)
}

madLib('Nick', 'Camaro', 'Yellow')

