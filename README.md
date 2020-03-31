<p align="center">
    <img src="_images-javascript-exercise-beginners/javascript-logo-4.png" alt="JavaScript logo" title="JavaScript beginners exercises" width="200" />
</p>

JavaScript Essential exercise for Beginners
=====================
JavaScript exercise/examples for Beginners
=====================

## 01. What is JavaScript?

- JavaScript is a programming language that adds interactivity to Web pages
- JavaScript is a scripting language
- A JavaScript script is a program that is included on an HTML page
- JavaScript scripts are text on Web pages that are interpreted and run by Web browsers
- JavaScript is initially named and developed as `LiveScript` at Netscape Navigator Corporation
- JavaScript is `not Java`
- Due to Java wave or Java popularity and buzz, `LiveScript` renamed to `JavaScript`

## 02. What can JavaScript do?

- Create an active User Interface
- Control the user experience based on Day, Date, Time and Browser, etc
- Validate user input on forms
- Create custom HTML pages on the fly/dynamically
- Control Web browsers interactivity and behaviors

## 03. What can't JavaScript do?

- JavaScript can't talk to a Database (Its possible with NodeJs)
- JavaScript can't write to files (Its possible with NodeJs)
- Keep track of state (except with cookies)

Topics include
=====================
1. [Example 1 - swapping variables](#example-1-swapping-variables)
2. [Example 2 - max number](#example-2-max-number)
3. [Example 3 - Landscape Portrait](#example-3-landscape-portrait)
4. [Example 4 - FizzBuzz Algorithms](#example-4-fizzbuzz-algorithms)
5. [Example 5 - Speed Limits](#example-5-speed-limits)
6. [Example 6 - Odd Even Number Loop](#example-6-odd-even-number-loop)

Example 1 swapping variables
=====================

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="_images-javascript-exercise-beginners/1-swapping-variables.png" alt="Swapping Variables" title="Swapping Variables" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image 1 - Swapping Variables</figcaption>
  </figure>
</p>

> **Syntax & Example**: `1-swapping-variables.html`
```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>swapping-variables</title>
  <link rel="stylesheet" type="text/css" href="../style.css" />
</head>
<body> 
  
  <h1>1-swapping-variables!</h1>

  <h3>Swap the values of variable</h3>
  
  <script type="text/javascript" src="script.js"></script>

</body>
</html>

```

> **Syntax & Example**: `script.js`
```js

console.log('1-swapping-variables');

let value1 = 'one';
let value2 = 'two';

// original values
console.log('original', value1);
console.log('original', value2);

// swapping values
let value3 = value1;
value1 = value2;
value2 = value3;

console.log('swap', value1);
console.log('swap', value2);

```

> **Syntax & Example**: global `style.css`
```css

body{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

h1, th{
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

table{
  /* border: 2px solid #696969;
  border-collapse: collapse; */
  font-size: 18px;
}

th{
  width: 20%;
}

th, td{
  padding: 10px;
  border: 2px solid #696969;
  text-align: center;
}

#freeSquare{
  background-color: coral;
}

```

Example 2 max number
=====================

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="_images-javascript-exercise-beginners/2-max-number.png" alt="Max Number" title="Max Number" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image 2 - Max Number</figcaption>
  </figure>
</p>

> **Syntax & Example**: `2-max-number.html`
```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>max-number</title>
  <link rel="stylesheet" type="text/css" href="../style.css" />
</head>
<body> 
  
  <h1>2-max-number!</h1>

  <h3>Write a function which returns the maximum of two number</h3>
  
  <script type="text/javascript" src="script.js"></script>

</body>
</html>

```

> **Syntax & Example**: `script.js`
```js

console.log('2-max-number');

function findMaxNumber(num1, num2){
  // 1. long syntax
  /* if(num1 > num2){
    return num1
  } else {
    return num2
  } */

  // 2. short syntax
  /* if(num1 > num2) return num1;
  else return num2; */

  // 3. ternary short syntax
  return (num1 > num2) ? num1 : num2;
}

let checkMax1 = findMaxNumber(10, 5);
console.log('Max Number:',checkMax1);

let checkMax2 = findMaxNumber(10, 15);
console.log('Max Number:',checkMax2);

let checkMax3 = findMaxNumber(100, 100);
console.log('Max Number:',checkMax3);

```

Example 3 Landscape Portrait
=====================

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="_images-javascript-exercise-beginners/3-landscape-portrait.png" alt="Landscape Portrait" title="Landscape Portrait" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image 3 - Landscape Portrait</figcaption>
  </figure>
</p>

> **Syntax & Example**: `3-landscape-portrait.html`
```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>landscape-portrait</title>
  <link rel="stylesheet" type="text/css" href="../style.css" />
</head>
<body> 
  
  <h1>3-landscape-portrait!</h1>

  <h3>Write a function which checks given width and height, returns true (landscape) if width is greater than height and vice versa</h3>
  
  <script type="text/javascript" src="script.js"></script>

</body>
</html>

```

> **Syntax & Example**: `script.js`
```js

console.log('3-landscape-portrait');

function isLandscape(width, height){
  // 3. ternary short syntax
  return (width > height);
}

let checkWidthHeight1 = isLandscape(800, 600);
console.log('Landscape:',checkWidthHeight1);

let checkWidthHeight2 = isLandscape(600, 800);
console.log('Landscape:',checkWidthHeight2);

let checkWidthHeight3 = isLandscape(1024, 768);
console.log('Landscape:',checkWidthHeight3);

```

Example 4 FizzBuzz Algorithms
=====================

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="_images-javascript-exercise-beginners/4-fizzbuzz-algorithms.png" alt="Fizzbuzz Algorithms" title="Fizzbuzz Algorithms" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image 4 - Ffizzbuz Algorithms</figcaption>
  </figure>
</p>

> **Syntax & Example**: `4-fizzbuzz-algorithms.html`
```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>fizzbuzz-algorithms</title>
  <link rel="stylesheet" type="text/css" href="../style.css" />
</head>
<body> 
  
  <h1>4-fizzbuzz-algorithms!</h1>

  <h3>Write a function which checks given input/parameter:</h3>
  
  <ul>
    <li>If input/parameter is divisible by 3 print => Fizz</li>
    <li>If input/parameter is divisible by 5 print => Buzz</li>
    <li>If input/parameter is divisible by 3 or 5 print => FizzBuzz</li>
    <li>If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value</li>
    <li>If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number' </li>
  </ul>
  
  <script type="text/javascript" src="script.js"></script>

</body>
</html>

```

> **Syntax & Example**: `script.js`
```js

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

```

Example 5 Speed Limits
=====================

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="_images-javascript-exercise-beginners/5-speed-limits.png" alt="Speed Limits" title="Speed Limits" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image 5 - Speed Limits</figcaption>
  </figure>
</p>

> **Syntax & Example**: `5-speed-limits.html`
```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>speed-limits</title>
  <link rel="stylesheet" type="text/css" href="../style.css" />
</head>
<body> 
  
  <h1>5-speed-limits!</h1>

  <h3>Write a function which checks given input/parameter:</h3>
  
  <ul>
    <li>If input/parameter is below speedlimit of 70 print => 'Good Safe Driving'</li>
    <li>If input/parameter is above speedlimit of 70, every 5 kilometers is Penalty Point, print => 'Speed Limit Crossed by Penalty Point' + Point </li>
    <li>If Driver gets more than 10 penalty points ie. above the speed limit 120, print => 'License Suspended'</li>
  </ul>
  
  <script type="text/javascript" src="script.js"></script>

</body>
</html>

```

> **Syntax & Example**: `script.js`
```js

console.log('5-speed-limits');

/* 
<h3>Write a function which checks given input/parameter:</h3>
  
<ul>
  <li>If input/parameter is below speedlimit of 70 print => 'Good Safe Driving'</li>
  <li>If input/parameter is above speedlimit of 70, every 5 kilometers is Penalty Point, print => 'Speed Limit Crossed by Penalty Point' + Point </li>
  <li>If Driver gets more than 10 penalty points ie. above the speed limit 120, print => 'License Suspended'</li>
</ul>
*/

const SPEEDLIMIT = 70;
const KMPERPOINT = 5;

function checkSpeedLimit(curSpeed) {
  if (curSpeed <= SPEEDLIMIT) {
    return ('Good Safe Driving!');
  } else {
    let penaltyPoint = Math.floor((curSpeed - SPEEDLIMIT) / KMPERPOINT);
    if (penaltyPoint < 10) {
      return ('Speed Limit Crossed by Penalty Point: ' + penaltyPoint);
    } else {
      return ('License Suspended!');
    }
  }
}

let checkPoin1 = checkSpeedLimit(40);
console.log(checkPoin1);

let checkPoin2 = checkSpeedLimit(70);
console.log(checkPoin2);

let checkPoin3 = checkSpeedLimit(75);
console.log(checkPoin3);

let checkPoin4 = checkSpeedLimit(99);
console.log(checkPoin4);

let checkPoin5 = checkSpeedLimit(120);
console.log(checkPoin5);

```

Example 6 Odd Even Number Loop
=====================

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="_images-javascript-exercise-beginners/6-odd-even-number-loop.png" alt="Odd Even Number Loop" title="Odd Even Number Loop" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image 6 - Odd Even Number Loop</figcaption>
  </figure>
</p>

> **Syntax & Example**: `6-odd-even-number-loop.html`
```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>odd-even-number-loop</title>
  <link rel="stylesheet" type="text/css" href="../style.css" />
</head>
<body> 
  
  <h1>6-odd-even-number-loop!</h1>

  <h3>Write a function which checks number till given input/parameter is odd or even</h3>

  <script type="text/javascript" src="script.js"></script>

</body>
</html>

```

> **Syntax & Example**: `script.js`
```js

console.log('6-odd-even-number-loop');

function isOddEvenNumber(curLimit) {
  for(let i = 0; i <= curLimit; i++) {
    /* if (i % 2 === 0) {
      console.log(i , 'EVEN');
    } else {
      console.log(i , 'ODD');
    } */

    const alertMessage = (i % 2 === 0) ? 'EVEN' : 'ODD';
    console.log(i , alertMessage);
  }
}

isOddEvenNumber(10);
// isOddEvenNumber(17);

```
