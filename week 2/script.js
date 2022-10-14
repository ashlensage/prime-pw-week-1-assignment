console.log('what\'s up');

let listOfNames = ['casie', 'mark', 'kris', 'chris'];

let favFoods = ['pizza', 'salad', 'strawberries', 'cider', 'mashed potatoes', 'alvocado toast']

// console.log(listOfNames + ', that was a list of names');

// // bracket notation
// console.log('here is a list of my favorite foods: ', favFoods[1]);

// let favNums = [11, 13, 69, 16];

// console.log('favorite numbers', favNums[3]);

// // .push();
// favFoods.push('cherries');
// console.log('updated favorite foods', favFoods);

// favFoods.unshift('mashed potatoes');
// console.log('now with more potatoes', favFoods);

// favFoods.pop();
// console.log('no cherries', favFoods);

// let shiftedFood = favFoods.shift();
// console.log('goodbye potatoes', favFoods);
// console.log('saved food', shiftedFood);


// --------
// For Loops 

for (let index = 0; index < 5; index = index++) {
    console.log('index', index);
    console.log(favFoods[index]);
    // do something, perform logic
}

for (let i = 0; i < favFoods. length; i++) {
    console.log('index', i);
    console.log(favFoods[i]);
    // do something here
}