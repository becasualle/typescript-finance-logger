import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/Payment.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('Sveta', 'web work', 250);
// docTwo = new Payment('Mark', 'plumbing work', 200);
// let docs: HasFormatter[] = [];
// docs.push(docOne, docTwo);
// console.log(docs);
// const invOne = new Invoice('Mark', 'gas and oil', 153);
// const invTwo = new Invoice('Sveta', 'cosmetics', 313);
// let invoices: Invoice[] = [];
// invoices.push(invOne, invTwo);
// console.log(invoices)
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
