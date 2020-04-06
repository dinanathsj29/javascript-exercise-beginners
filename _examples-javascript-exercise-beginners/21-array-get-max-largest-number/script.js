console.log('21-array-get-max-largest-number');

// approach 1
/* 
function getLargestNumber(arrayToSearch) {
  if (arrayToSearch.length <= 0) return 'Array is Empty! Nothing to search!!';
  let largetNumber = arrayToSearch[0];

  for (let i = 1; i < arrayToSearch.length; i++) {
    if (arrayToSearch[i] > largetNumber) {
      largetNumber = arrayToSearch[i];
    }
  }
  return largetNumber;
} 

const versionArray = [5, 2, 3, 4, 7];
const largestVersion = (getLargestNumber(versionArray));
console.log('largestVersion: ', largestVersion);

console.log('---------');

const ageArray = [21, 25, 22, 25, 30, 25, 30];
const maxAge = (getLargestNumber(ageArray));
console.log('maxAge: ', maxAge); */

// approach 2 

function getLargestNumber(arrayToSearch) {
  if (arrayToSearch.length <= 0) return 'Array is Empty! Nothing to search!!';

  return arrayToSearch.reduce((largetNumber, curentSearchElement) => {
    return (curentSearchElement > largetNumber) ? curentSearchElement : largetNumber;
  })
}

const versionArray = [5, 2, 3, 4, 7];
const largestVersion = (getLargestNumber(versionArray));
console.log('largestVersion: ', largestVersion);

console.log('---------');

const ageArray = [21, 25, 22, 25, 30, 25, 30];
const maxAge = (getLargestNumber(ageArray));
console.log('maxAge: ', maxAge);