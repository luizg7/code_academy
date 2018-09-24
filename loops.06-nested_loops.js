// Write your code below


const bobsFollowers = ['Joe', 'Will', 'Robert', 'Gye'];
const tinasFollowers = ['Joe', 'Will', 'Carol'];

mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for ( let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      console.log('Both loops have the number: ' + tinasFollowers[j])
    }
  }
};
