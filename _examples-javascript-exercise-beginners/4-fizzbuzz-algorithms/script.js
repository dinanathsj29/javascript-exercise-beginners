console.log('4-fizzbuzz-algorithms');

/* 
<h3>Write a function which checks given input/parameter:</h3>

<ul>
  <li>If input/parameter is divisible by 3 print => Fizz</li>
  <li>If input/parameter is divisible by 5 print => Buzz</li>
  <li>If input/parameter is divisible by 3 or 5 print => FizzBuzz</li>
  <li>If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value</li>
  <li>If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number' </li>
</ul>
*/

function isfizzBuzz(arg){
  if(typeof arg !== 'number'){
    return ('Nan - Not a Number! Please Input Number');
  }

  if((arg % 3 === 0) && (arg % 5 === 0)) {
    return 'FizzBuzz';
  }

  if(arg % 3 === 0) {
    return 'Fizz';
  }

  if(arg % 5 === 0) {
    return 'Buzz';
  }

  else {
    return 'Some odd number entered: ' + arg;
  }

}

let checkFizzBuzz1 = isfizzBuzz('one');
console.log(checkFizzBuzz1);

let checkFizzBuzz2 = isfizzBuzz(true);
console.log(checkFizzBuzz2);

let checkFizzBuzz3 = isfizzBuzz(9);
console.log(checkFizzBuzz3);

let checkFizzBuzz4 = isfizzBuzz(10);
console.log(checkFizzBuzz4);

let checkFizzBuzz5 = isfizzBuzz(30);
console.log(checkFizzBuzz5);

let checkFizzBuzz6 = isfizzBuzz(11);
console.log(checkFizzBuzz6);
