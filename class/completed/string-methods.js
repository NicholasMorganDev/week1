
//Length
function strLength1 () {
  const string = 'Great idea Megan!';
  console.log(string.length);
}

const strLength = () => {
  const string = 'Great idea Megan!';
  console.log(string.length);
}

//Length Invoke
strLength()

//To UpperCase
function toUpper1() {
  const string = 'local scope'
  console.log('str uppercase:', string.toUpperCase())
}

const toUpper2 = () => {
  const string = 'local scope'
  console.log('str uppercase:', string.toUpperCase())
}

toUpper1()
toUpper2()

//Trim
function strTrim1 () {
  const string = '    Hello this is Major Tom   '
  console.log('str trim:', string.trim() );
}


const strTrim2 = () => {
  const string = '    Hello this is Major Tom   '
  console.log('str trim:', string.trim() );
}

strTrim1()
strTrim2()

//Replace
function strReplace1 () {
  const str = "I didn't sleep much last night."
  const subject = 'sleep much';
  const replace = 'eat anything';
  console.log(str.replace('str replace:', subject, replace))
}

const strReplace2 = () => {
  const str = "I didn't sleep much last night."
  const subject = 'sleep much';
  const replace = 'eat anything';
  console.log(str.replace('str replace:', subject, replace))
}

strReplace1()
strReplace2()

//Substring
function strSub1 () {
  const str = 'I like big fonts and I cannot lie.'
  console.log('subString: 1', str.substring(2))
  console.log('subString: 2', str.substring(7, 15))
}

const strSub2 = () => {
  const str = 'I like big fonts and I cannot lie.'
  console.log('subString: 1', str.substring(2))
  console.log('subString: 2', str.substring(7, 15))
}

strSub1()
strSub2()

//Index Of



//Split
function strSplit1 () {
  const str = 'I like starwars. Ho purrr'
  console.log(str.split())
}

const strSplit2 = () => {
  const str = 'I like starwars. Ho purrr'
  console.log(str.split(' '))
}

strSplit1()
strSplit2()

