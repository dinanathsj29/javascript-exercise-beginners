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