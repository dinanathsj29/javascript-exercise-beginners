console.log('25-object-equality');

// Constructor function/method - pascalCasing - pascal notation - use this keyword
function Student(name, age, rank, country) {
  this.name = name;
  this.age = age;
  this.rank = rank;
  this.country = country;
}

let Students1 = new Student('Dinanath', 35, 5, 'India');
console.log('Students1', Students1);

let Students2 = new Student('Dinanath', 35, 5, 'India');
console.log('Students2', Students2);

console.log('----------');

// Objects are reference type, objects can have same properties but they are from different memeory location, they can be equal if both objects have same properties
function isObjectEqual(obj1, obj2){
  return obj1.name === obj2.name &&
         obj1.age === obj2.age &&
         obj1.rank === obj2.rank &&
         obj1.country === obj2.country
}

console.log('isEqual', isObjectEqual(Students1, Students2));

console.log('----------');

// Objects are same if both are pointed to same object
function isObjectPointSame(obj1, obj2){
  return obj1 === obj2;
}

let isSame1 = isObjectPointSame(Students1, Students2);
console.log('isSame1', isSame1);

let Students3 = Students2;
let isSame2 = isObjectPointSame(Students2, Students3);
console.log('isSame2', isSame2);
