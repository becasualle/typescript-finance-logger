"use strict";
// const logDetails = (uid: string|number, item:string) => {
//     console.log(`${item} has a uid of ${uid}`)
// }
var logDetails = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
// const greet = (user: {name:string, uid:string|number}) => {
//     console.log(`${user.name} says hello`)
// }
var greet = function (user) {
    console.log(user.name + " says hello");
};
