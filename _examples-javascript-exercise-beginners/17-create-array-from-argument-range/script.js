console.log('17-create-array-from-argument-range');

function generateArrayFromRange(startNum, endNum) {
  const rangeArray = [];
  for(let curNum = startNum; curNum <= endNum; curNum++) {
    // console.log('curNum: ', curNum);
    rangeArray.push(curNum);
    // console.log('rangeArray: ', rangeArray);
  }
  return rangeArray;
}

const range1 = generateArrayFromRange(1, 5);
console.log(range1);
console.log('----------');
const range2 = generateArrayFromRange(-5, 0);
console.log(range2);
