const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below

/* Syntax for While Loop

 let a = 1;
 while (a < 4) {
 	console.log(a);
  a++
 }

Before the loop starts, declare the condition variable.
To start the while loop, type the while keyword.
Inside the parentheses, create the iteration condition(or test condition, or stoppping condition).
While the condition evaluates to true, the block code will continue to run.

*/

let currentCard;
while (currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard)
}
