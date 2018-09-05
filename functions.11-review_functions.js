/* . A function is a reusable block of code that groups together a sequence of statements to perform a specific task

A function declaration syntax:

function greetWorld() {
	console.log('Hello, World');
}

.A parameter is a named variable inside a function's block which will be assigned the value of the argument passed in when the function is invoked:

.To call a function in your code:

greetWorld();

.ES6 introduces new ways of handling arbitrary parameters through default parameters which allow us to assign a default value to a parameter in case no argument is passed into the function.

. To return a value from a function, we use a return statement.

.To define a function using function expressions:

	let calculateArea = function(width, height) {
  	let area = width * height;
    return area;
  }

 .To define a function using arrow function notation:

 let calculateArea = (width, height) => {
 	let area = width * height;
  return area;
 };

 .Function definition can be made concise using concise arrow notation

 single block

 const sumNumbers = number => number * number;

 multi-line block

 const sumNumbers = number => {
 	const sum = number + number;
  return sum
 };

 */
