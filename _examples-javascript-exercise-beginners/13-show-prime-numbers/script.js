console.log('13-show-prime-numbers');

// approach 1

/* function showPrimeNumbers(numberLimit) {
  for (let curNum = 2; curNum <= numberLimit; curNum++) {
    // console.log('curNum', curNum);

    let isPrime = true;
    for (let factor = 2; factor < curNum; factor++) {
      // console.log('factor', factor);
      if (curNum % factor === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log('Prime Number', curNum);
      
    }
  }
} 

showPrimeNumbers(20);*/

// approach 2

function showPrimeNumbers(numberLimit) {
  for (let curNum = 2; curNum <= numberLimit; curNum++) {
    // console.log('curNum', curNum);
    if (isPrimeNumber(curNum)) {
      console.log('Prime Number:', curNum);
    }
  }
}

function isPrimeNumber(_number) {
  for (let factor = 2; factor < _number; factor++) {
    // console.log('factor', factor);
    if (_number % factor === 0) {
      return false;
    }
  }
  return true;
}

showPrimeNumbers(20);