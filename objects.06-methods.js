
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below

//Data stored on an object is a function we call that a method. A property is what an object has, while a method is what an object does.


//

let alienShip = {
  retreat() {
    console.log(retreatMessage)
  },
  takeOff() {
  console.log('Spim... Borp... Glix... Blastoff!')
}
}

alienShip.retreat();
alienShip.takeOff();


/*
Syntax:

let object = {
	functioName() {
  codeblock
  }, DONT FORGET ABOUT THE COMMA
  functionName2() {
  codeblock
  }
}
