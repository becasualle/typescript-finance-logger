"use strict";
// let greet: Function;
var greet;
greet = function (name, greeting) { return console.log({ name: name, greeting: greeting }); };
var calc;
calc = function (x, y, action) {
    if (action === 'add') {
        return x * y;
    }
    else {
        return 0;
    }
};
calc(10, 15, 'add');
var logDetails;
logDetails = function (ninja) { return console.log(ninja); };
logDetails({ name: 'mark', age: 30 });
logDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
logDetails({ name: 'mark', age: 30 });
