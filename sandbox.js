// EXPLICIT TYPES
var character;
var age;
var isLoggedIn;
// age = 'mark'; can't do this
age = 30;
isLoggedIn = true;
// ARRAYS
var ninjas; //array of strings
// doesn't allowed
// ninjas = [10, 23]
ninjas = ['mark', 'sveta'];
// array is undefined so we can't push values
// ninjas.push('mark')
var students = [];
students.push('mark', 'sveta');
// UNION TYPES
var mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
// ['hello', 20, false]
var uid;
uid = '123';
uid = 123;
// OBJECTS
var ninjaOne;
ninjaOne = {
    name: 'mark',
    age: 30
};
ninjaOne = []; //array is type of object
// create object that have to contain 3 properties with selected types
var ninjaTwo;
ninjaTwo = {
    name: 'mark',
    age: 15,
    beltColor: 'black'
};
