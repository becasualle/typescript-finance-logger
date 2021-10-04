// arrays
let names = ['mark', 'sveta', 'alex'];

// can't change array type itself
// names = 'hello'

names.push('roma'); //can add string
//can not add numbers
// names.push(3); 
// names[0] = 3;

let numbers = [10, 20, 30, 40];
numbers.push(25);
// numbers.push('mark');
// numbers[1] = 'mark';

let mixed = ['mark', 15, 'sveta', 30];
// can add types that contains mixed array
mixed.push('alex');
mixed.push(189);
mixed[3] = 317;

// objects
let ninja = {
  name: 'mark',
  status: 'cool',
  age: 30
};
// ninja always has to be object, name always has to be string

// can't add new properties to the object
// ninja.skills = ['coding', 'gaming'];

// we can update object but only if it matches original structure (same properties)
ninja = {
  name: 'mark',
  status: 'cool',
  age: 30
};
