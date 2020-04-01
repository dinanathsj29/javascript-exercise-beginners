console.log('10-netsted-loop-star-pattern');

function showPattern(totalRowsPatternCount) {
  for (let curRow = 1; curRow <= totalRowsPatternCount; curRow++) {
    // console.log(curRow);
    let patternDesign = '';
    for (let i = 0; i < curRow; i++) {
      patternDesign += '*'
    }
    console.log(patternDesign);
  }
}

showPattern(5);