//function declaration
function message(firstName){
    console.log('Hello ' + firstName)
}

function getMeow(){
    console.log('meow')
}

function getSum(firstNumber, secondNumber){
    const result = firstNumber + secondNumber;
    console.log(result)
}

function makePie(quantity){
    const pie = '🥧'.repeat(quantity);
    console.log(pie);
}

function makeAnimal(animal, quantity){
    const result = animal.repeat(quantity)
    return result;
}

function generateLoudSpeaker(text){
    const nextText = '🔊 ' + text.toUpperCase();
    return nextText;
}

//invoke function

// message('Jarvis')

// getMeow()

getSum(2, 5)

// getSum(120000, 120000000)

// getSum('sym', 'phony')

// makePie(100)

// const renderResult = makeAnimal('🐼', 10)
// console.log(renderResult);

//const computer = generateLoudSpeaker('whisper wh is per')
//console.log(computer)

