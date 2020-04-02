console.log('18-array-includes-element-exists');

function includes(arrayToSearch, elementToSearch) {
  console.log('arrayToSearch: ', arrayToSearch);
  console.log('elementToSearch: ', elementToSearch);
  for(let curElement of arrayToSearch) {
    if(curElement === elementToSearch) {
      return true;
    } 
  }
  return false;
}

const versionArray = [1, 2, 5, 7, 2];
console.log(includes(versionArray, 2));
console.log('---------');
const ageArray = [21, 22, 25, 27, 25];
console.log(includes(ageArray, 30));