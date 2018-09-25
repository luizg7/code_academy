/*
The filter method returns a new array that pass "your" conditions.

*/

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below

const smallNumbers = randomNumbers.filter(number => number < 250)

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter(words => words.length > 7)

/* There are 3 ways to call the .filter() method

const numbers = [10, 20, 30, 40, 50];

const filteredNums = numbers.filter(function(number){
  if (number < 25) {
    return true;
  }
})

const filteredNums = numbers.filter(function(number){
  return number < 25;
 })

 const filteredNums = numbers.filter(number => number < 25);
