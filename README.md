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
