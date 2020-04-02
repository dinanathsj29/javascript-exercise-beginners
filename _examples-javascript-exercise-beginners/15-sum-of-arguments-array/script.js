console.log('15-sum-of-arguments-array');

function sumOfArguments(...items){
  // as rest operator converts anything passed as an array check following
  if(items.length === 1 && Array.isArray(items[0])) {
    // reset item as a new array 
    items = [...items[0]]
    console.log('current items/values to add:', items);
    return items.reduce((n1, n2) => n1 +n2);
  }
}

// pass arguments as an array
// console.log('Sum:', sumOfArguments([10, 2, 8, 4, 6]));
console.log('Sum:', sumOfArguments([10, 2, 8, 4, 6]));