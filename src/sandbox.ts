// let greet: Function;

let greet: (a: string, b: string) => void;
greet = (name, greeting) => console.log({name, greeting})

let calc: (a: number, b:number, c:string)=>number;
calc = (x:number, y:number, action:string) => {
    if (action === 'add'){
        return x*y
    } else {
        return 0;
    }
}
calc(10,15,'add');


type person = {name: string, age: number}
let logDetails: (obj: person) => void;

logDetails = ninja => console.log(ninja);
logDetails({name: 'mark', age: 30});

logDetails = (ninja:person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}
logDetails({name: 'mark', age: 30});
