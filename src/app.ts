import {Invoice} from './classes/invoice.js';
import {Payment} from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// const ul = document.querySelector('.item-list') as HTMLUListElement;
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);
// console.log(list.container);

form.addEventListener('submit', (e: Event)=>{
    e.preventDefault();

    let doc: HasFormatter;
    if(type.value === 'invoice') {
        doc=new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc=new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'start');
})

// GENERICS

const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random()*100);
    return {...obj, uid};
}

let docOne = addUID({name: 'mark', age: 30});

console.log(docOne);

// with interfaces
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
} 

const docThree: Resource<string> = {
    uid: 1,
    resourceName: 'person',
    data: 'march'
}

const docFour: Resource<string[]> = {
    uid: 2,
    resourceName: 'person',
    data: ['march', 'september']
}

console.log(docThree, docFour)

