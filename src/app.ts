// interfaces
interface isPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: isPerson = {
    name: 'mark',
    age: 30,
    speak(word: string): void{
        console.log(word)
    },
    spend(amount: number): number{
        console.log('I spent', amount)
        return amount
    }
}

let someone: isPerson;
const greetPerson = (person: isPerson)=>{
    console.log('hello', person.name)
}

// greetPerson({name:'shaun'})
greetPerson(me)


console.log(me)

import {Invoice} from './classes/invoice.js';

const invOne = new Invoice('Mark', 'gas and oil', 153);
const invTwo = new Invoice('Sveta', 'cosmetics', 313);

let invoices: Invoice[] = [];
invoices.push(invOne, invTwo);
console.log(invoices)


const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event)=>{
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})

