console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
// Question #1
let basket =['grape','lemon', 'apple'];
  console.log('Basket is', basket);

function addItem (item) {
  console.log('addItem:', (item));
  basket.push(item);
  return true;
  if (isFull()){
    console.log('in addItem check for is');
    return true;
  }
  else {
    return false;
  }
}
addItem('banana'); // added banana for funsies and testing
console.log('Adding mangos (expect true)', addItem('mangos'));
console.log('Basket is now', basket);


// 3. Update the required `addItem` function to:
  // - Use the `isFull` function to prevent more than `maxItems` from being added to the basket.
  // - If an item was added to the array, return `true`
  // - If there was no room and the item could not be added return `false`

// Question #2
function listItems(){
  for (let i=0; i<basket.length; i++){
    console.log(basket[i]);
  }
}
listItems();
// Question #3
function empty(item) {
  console.log('empty:', item);
    basket.length = 0; //Should hopefully remove all items in array
}
empty(basket.length=0);
console.log('Basket is now empty:', basket);

// Stretch Question #4
const maxItems = 5;

function isFull(){
  console.log('in isFull');
  if (basket.length >= maxItems){
    return true;
  }
  else{
    return false;
  }
}
console.log(isFull());
