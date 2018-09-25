const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below

const secretMessage =  animals.map(animalsItem => { return animalsItem[0] })

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below

const smallNumbers = bigNumbers.map(number => { return number / 100 });

/*
Example of the map method

numbers is an array of numbers.
bigNumbers will store the return value of calling .map() on numbers.
numbers.map will iterate through each element in the numbers array and pass the element into the callback function.
return number * 10 is the code we wish to execute upon each element in the array. This will save each value from the numbers array, multiplied by 10, to a new array.
*/
