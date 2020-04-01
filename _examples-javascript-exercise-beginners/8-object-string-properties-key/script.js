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