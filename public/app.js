import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// const ul = document.querySelector('.item-list') as HTMLUListElement;
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
// console.log(list.container);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'start');
});
// GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'mark', age: 30 });
console.log(docOne);
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: 'march'
};
const docFour = {
    uid: 1,
    resourceName: 'person',
    data: ['march', 'september']
};
console.log(docThree, docFour);
