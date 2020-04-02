console.log('19-array-excludes-value-to-new-array');

function excludes(arrayToExclude, elementsToExcluded) {
  console.log('arrayToExclude: ', arrayToExclude);
  console.log('elementsToExcluded: ', elementsToExcluded);
  const outputArray = [];
  for(let curElement of arrayToExclude) {
    if(!elementsToExcluded.includes(curElement)) {
      outputArray.push(curElement)
    }
  }
  return outputArray;
}

const versionArray = [1, 2, 5, 7, 2];
const newVesionArray = (excludes(versionArray, [2]));
console.log('newVesionArray: ', newVesionArray);

console.log('---------');

const ageArray = [21, 25, 22, 25, 30, 25, 30];
const newAgeArray = (excludes(ageArray, [25,30]));
console.log('newAgeArray: ', newAgeArray);
