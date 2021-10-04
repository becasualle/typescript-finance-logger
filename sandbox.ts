// EXPLICIT TYPES
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'mark'; can't do this
age = 30;
isLoggedIn = true;

// ARRAYS
let ninjas: string[]; //array of strings

// doesn't allowed
// ninjas = [10, 23]

ninjas = ['mark', 'sveta'];

// array is undefined so we can't push values
// ninjas.push('mark')

let students: string[] = [];
students.push('mark', 'sveta');

// UNION TYPES
let mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
// ['hello', 20, false]

let uid: string|number;
uid = '123';
uid = 123;

// OBJECTS
let ninjaOne: object;
ninjaOne = {
  name: 'mark',
  age: 30
}
ninjaOne=[]; //array is type of object

// create object that have to contain 3 properties with selected types
let ninjaTwo: {
  name: string,
  age: number,
  beltColor: string
}

ninjaTwo = {
  name: 'mark',
  age: 15,
  beltColor: 'black',
}
