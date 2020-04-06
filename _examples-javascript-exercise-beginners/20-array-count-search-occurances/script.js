console.log('20-array-count-search-occurances');

// approach 1
/* function countSearchOccurances(arrayToSearch, elementsToSearch) {
  // console.log('arrayToSearch: ', arrayToSearch);
  // console.log('elementsToSearch: ', elementsToSearch);
  let count = 0;
  for(let curElement of arrayToSearch) {
    if(curElement === elementsToSearch) {
      count++;
    }
  }
  // console.log('search count:', count);
  return count;
} */

// approach 2 
function countSearchOccurances(arrayToSearch, elementsToSearch) {

  return arrayToSearch.reduce((countAccumulator, curentSearchElement) => {
    let countOccurances = (curentSearchElement === elementsToSearch) ? 1 : 0;
    // console.log('countAccumulator', countAccumulator, 'arrayToSearch', arrayToSearch, 'elementsToSearch', elementsToSearch,);
    return countAccumulator + countOccurances;
  },0)
}

const versionArray = [1, 2, 5, 7, 2];
const versionCount = (countSearchOccurances(versionArray, 2));
console.log('versionCount: ', versionCount);

console.log('---------');

const ageArray = [21, 25, 22, 25, 30, 25, 30];
const ageCount = (countSearchOccurances(ageArray, -25));
console.log('ageCount: ', ageCount);