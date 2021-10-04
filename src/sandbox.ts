let greet: Function;

greet = () => {
    console.log('hello world');
}

// c - optional parameter c?: number|string
// c - optional parameter with default value of 10 c: number|string = 10
// add optional parameters at the end
// when we don't return - it showes that returns void
// (a: number, b: number, c: number|string = 10): void
const add = (a: number, b: number, c: number|string = 10) =>{
    console.log(a+b);
    console.log(c);
}

add(5, 10, '20');

// can rewrite to show that this function returns value
// const minus = (a: number, b: number): number
const minus = (a: number, b: number) => {
    return a-b;
}
// result will inherit type of it's arguments
let result = minus(10,7);
// can't use another value
// result = 'something else'
