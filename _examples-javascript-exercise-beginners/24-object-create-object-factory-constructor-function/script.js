console.log('24-object-create-object-factory-constructor-function');

// Factory function/method - camelCasing - camel notation - use return keyword
function createObjFactoryMethod(name, age, rank, country) {
  return {
    name, age, rank, country
  }
}

let Students1 = createObjFactoryMethod('Dinanath', 35, 5, 'India');
console.log('Students1', Students1);

// Constructor function/method - pascalCasing - pascal notation - use this keyword
function Student(name, age, rank, country) {
  this.name = name;
  this.age = age;
  this.rank = rank;
  this.country = country;
}

let Students2 = new Student('Amit', 30, 4, 'Hindustan');
console.log('Students2', Students2);