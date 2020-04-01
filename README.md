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
7. [Example 7 - Count Truthy Falsy Values](#example-7-count-truthy-falsy-values)
8. [Example 8 - Object String Properties Key](#example-8-object-string-properties-key)
9. [Example 9 - Sum of Multiples](#example-9-sum-of-multiples)
10. [Example 10 - Netsted Loop Star Pattern](#example-10-netsted-loop-star-pattern)
11. [Example 11 - Marks Average Grade](#example-11-marks-average-grade)
12. [Example 12 - Random Bingo Card](#example-12-random-bingo-card)
13. [Example 13 - Show Prime Numbers](#example-13-show-prime-numbers)

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

Example 7 Count Truthy Falsy Values
=====================

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="_images-javascript-exercise-beginners/7-count-truthy-falsy-values.png" alt="Count Truthy Falsy Values" title="Count Truthy Falsy Values" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image 7 - Count Truthy Falsy Values</figcaption>
  </figure>
</p>

> **Syntax & Example**: `7-count-truthy-falsy-values.html`
```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>count-truthy-falsy-values.html</title>
  <link rel="stylesheet" type="text/css" href="../style.css" />
</head>
<body> 
  
  <h1>7-count-truthy-falsy-values!</h1>

  <h3>Write a function which checks and count the truthy values from an array</h3>

  Falsy values in JavaScript are:
  <ul>
    <li>false</li>
    <li>0 (zero)</li>
    <li>undefined</li>
    <li>null</li>
    <li>''</li>
    <li>NaN</li>
  </ul>

  <script type="text/javascript" src="script.js"></script>

</body>
</html>

```

> **Syntax & Example**: `script.js`
```js

console.log('7-count-truthy-falsy-values');

/*
<h3>Write a function which checks and count the truthy values from an array</h3>

Falsy values in JavaScript are:
<ul>
  <li>false</li>
  <li>0 (zero)</li>
  <li>undefined</li>
  <li>null</li>
  <li>''</li>
  <li>NaN</li>
</ul>
*/

const valuesArray = [0, 1, '', undefined, false, true];

function checkCountTruthyFalsy(curArray) {
  let truthyCount = 0;
  
  for (let value of curArray) {
    // no need to check if(value !== false || value !== 0 || value !== '' or ...)
    if (value) {
      truthyCount++;
    }
  }
  return truthyCount;
}

console.log(checkCountTruthyFalsy(valuesArray));

```

Example 8 Object String Properties Key
=====================

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="_images-javascript-exercise-beginners/8-object-string-properties-key.png" alt="Object String Properties Key" title="Object String Properties Key" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image 8 - Object String Properties Key</figcaption>
  </figure>
</p>

> **Syntax & Example**: `8-object-string-properties-key.html`
```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>object-string-properties-key</title>
  <link rel="stylesheet" type="text/css" href="../style.css" />
</head>
<body> 
  
  <h1>8-object-string-properties-key!</h1>

  <h3>Write a function which checks and prints only the string type properties of an object</h3>

  <script type="text/javascript" src="script.js"></script>

</body>
</html>

```

> **Syntax & Example**: `script.js`
```js

console.log('8-object-string-properties-key');

function showStringProperties(curObj) {
  for(let key in curObj) {
    // console.log('key/prop:', key);
    if(typeof(curObj[key]) === 'string') {
      console.log(key,':', curObj[key]);
    }
  }
}

const Person = {
  name: 'Dinanath',
  age: 40,
  height: 5.6,
  country: 'India',
  designation: 'UI Developer'
}

showStringProperties(Person);
console.log('----------');

const Technology = {
  name: 'JavaScipt',
  version: 6,
  purpose: 'Scripting language for Web',
  developer: 'Netscape Corporation'
}

showStringProperties(Technology);
console.log('----------');

```

Example 9 Sum of Multiples
=====================

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="_images-javascript-exercise-beginners/9-sum-of-multiples.png" alt="Sum of Multiples" title="Sum of Multiples" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image 9 - Sum of Multiples</figcaption>
  </figure>
</p>

> **Syntax & Example**: `9-sum-of-multiples.html`
```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>sum-of-multiples</title>
  <link rel="stylesheet" type="text/css" href="../style.css" />
</head>
<body> 
  
  <h1>9-sum-of-multiples!</h1>

  <h3>Write a function which Calculate the sum of multiples of 3 and 5 for a given limit</h3>

  <script type="text/javascript" src="script.js"></script>

</body>
</html>

```

> **Syntax & Example**: `script.js`
```js

console.log('9-sum-of-multiples');

function sumOfMultiples(curLimit) {

  let sumOfMultipleValue = 0;

  for(let i = 0; i <= curLimit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      // console.log(i);
      sumOfMultipleValue +=i;
    }
  }
  // return sumOfMultipleValue;
  console.log(`sumOfMultipleValue of 3 & 5 upto ${curLimit} digit is:`, sumOfMultipleValue);
}

sumOfMultiples(10);

```

Example 10 Netsted Loop Star Pattern
=====================

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="_images-javascript-exercise-beginners/10-netsted-loop-star-pattern.png" alt="Netsted Loop Star Pattern" title="Netsted Loop Star Pattern" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image 10 - Netsted Loop Star Pattern</figcaption>
  </figure>
</p>

> **Syntax & Example**: `10-netsted-loop-star-pattern.html`
```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>10-netsted-loop-star-pattern</title>
  <link rel="stylesheet" type="text/css" href="../style.css" />
</head>
<body> 
  
  <h1>10-netsted-loop-star-pattern!</h1>

  <h3>Write a function which Prints/Shows star-aestrikes (or any pattern) for the number of times and rows provided</h3>

  <script type="text/javascript" src="script.js"></script>

</body>
</html>

```

> **Syntax & Example**: `script.js`
```js

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

```

Example 11 Marks Average Grade
=====================

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="_images-javascript-exercise-beginners/11-marks-average-grade.png" alt="Marks Average Grade" title="Marks Average Grade" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image 11 - Marks Average Grade</figcaption>
  </figure>
</p>

> **Syntax & Example**: `11-marks-average-grade.html`
```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>marks-average-grade</title>
  <link rel="stylesheet" type="text/css" href="../style.css" />
</head>
<body> 
  
  <h1>11-marks-average-grade!</h1>

  <h3>Write a function which Calculate the sum of marks provided in an array, average it and also show Grade</h3>

  Grade criteria/mechanism is:
  <ul>
    <li>0% to 70% => D Grade</li>
    <li>71% to 79% => C Grade</li>
    <li>81% to 89% => B Grade</li>
    <li>91% to 100% => A Grade</li>
  </ul>

  <script type="text/javascript" src="script.js"></script>

</body>
</html>

```

> **Syntax & Example**: `script.js`
```js

console.log('11-marks-average-grade');

// approach 1

/* const MARKSARRAY = [55, 85, 55, 65];

function calculateAverageGrade(currentMarks) {
  let totalMarks = 0;
  let averageMarks = 0;
  let grade;

  for(let mark of currentMarks) {
    totalMarks += mark;
  }
  // console.log('totalMarks:', totalMarks);
  averageMarks = (totalMarks/currentMarks.length);
  // console.log('averageMarks:', averageMarks);

  if(averageMarks < 70) return grade = 'D'; 
  if(averageMarks < 80) return grade = 'C';
  if(averageMarks < 90) return grade = 'B';
  if(averageMarks <= 100) return grade = 'A';
}

console.log('Grade:', calculateAverageGrade(MARKSARRAY)); */

// approach 2 - create two different functions with single responsibility principle

const MARKSARRAY = [55, 85, 55, 65];

function calculateAverage(currentArray) {
  let total = 0;
  for (let curValue of currentArray) {
    total += curValue;
  }
  // console.log('total:', total);
  return (total/currentArray.length);
}

// console.log(calculateAverage(MARKSARRAY));

function calculateGrades(_currentArray) { 
  const average = calculateAverage(_currentArray);
  // console.log('average:', average);

  if(average < 70) return grade = 'D'; 
  if(average < 80) return grade = 'C';
  if(average < 90) return grade = 'B';
  if(average <= 100) return grade = 'A';
}

console.log('Grade:',calculateGrades(MARKSARRAY));

```

Example 12 Random Bingo Card
=====================

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="_images-javascript-exercise-beginners/12-random-bingo-card.png" alt="Random Bingo Card" title="Random Bingo Card" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image 12 - Random Bingo Card</figcaption>
  </figure>
</p>

> **Syntax & Example**: `12-random-bingo-card.html`
```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>random-bingo-card</title>
  <link rel="stylesheet" type="text/css" href="../style.css" />
</head>
<body> 
  
  <h1>12-random-bingo-card!</h1>
  
  <h3>Write a function to create a Bingo Card with Random numbers upto 75</h3>
  <table>
    <thead>
      <tr>
        <th class="heading">B</th>
        <th class="heading">I</th>
        <th class="heading">N</th>
        <th class="heading">G</th>
        <th class="heading">O</th>
      </tr>
    </thead>

    <tbody>
      <tr> 
        <td id="Square1">&nbsp;</td>
        <td id="Square2">&nbsp;</td>
        <td id="Square3">&nbsp;</td>
        <td id="Square4">&nbsp;</td>
        <td id="Square5">&nbsp;</td>
      </tr>
      <tr>
        <td id="Square6">&nbsp;</td>
        <td id="Square7">&nbsp;</td>
        <td id="Square8">&nbsp;</td>
        <td id="Square9">&nbsp;</td>
        <td id="Square10">&nbsp;</td>
      </tr>
      <tr>
        <td id="Square11">&nbsp;</td>
        <td id="Square12">&nbsp;</td>
        <td id="freeSquare">Free</td>
        <td id="Square13">&nbsp;</td>
        <td id="Square14">&nbsp;</td>
      </tr>
      <tr>
        <td id="Square15">&nbsp;</td>
        <td id="Square16">&nbsp;</td>
        <td id="Square17">&nbsp;</td>
        <td id="Square18">&nbsp;</td>
        <td id="Square19">&nbsp;</td>
      </tr>
      <tr>
        <td id="Square20">&nbsp;</td>
        <td id="Square21">&nbsp;</td>
        <td id="Square22">&nbsp;</td>
        <td id="Square23">&nbsp;</td>
        <td id="Square24">&nbsp;</td>
      </tr>
    </tbody>
  </table>

  <h3><a href="">Click here</a> (Reload/Refresh) to create Random Bingo Card!</h3>

  <script type="text/javascript" src="script.js"></script>

</body>
</html>

```

> **Syntax & Example**: `script.js`
```js

console.log('12-random-bingo-card');

window.onload = createBingoCard;

function createBingoCard() {
  // console.log('in createBingoCard');

  for (var i = 1; i <= 24; i++) {
    var newRandomNum = Math.floor(Math.random() * 75);
    // console.log('newRandomNum', newRandomNum);
    document.getElementById('Square' + i).innerHTML = newRandomNum;
  }
}

```

Example 13 Show Prime Numbers
=====================

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="_images-javascript-exercise-beginners/13-show-prime-numbers.png" alt="Show Prime Numbers" title="Show Prime Numbers" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image 13 - Show Prime Numbers</figcaption>
  </figure>
</p>

> **Syntax & Example**: `13-show-prime-numbers.html`
```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>show-prime-numbers</title>
  <link rel="stylesheet" type="text/css" href="../style.css" />
</head>
<body> 
  
  <h1>13-show-prime-numbers!</h1>

  <h3>Write a function which show or print Prime Number upto provided range</h3>

  <ul>
    <li>Prime Numbers are those numbers whose factors are only `1` and `the number itself`</li>
    <li>In simple language Prime Numbers are divisible by only `1` and `the number itself/himself`</li>
    <li>Prime Numbers have only two factors: `1` and `the number itself/himself`</li>
    <li>Example: 2, 3, 5, 7, 11, 13, 17, 19 and so on...</li>
  </ul>

  <script type="text/javascript" src="script.js"></script>

</body>
</html>

```

> **Syntax & Example**: `script.js`
```js

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

```
