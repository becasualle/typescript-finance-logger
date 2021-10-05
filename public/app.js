const me = {
    name: 'mark',
    age: 30,
    speak(word) {
        console.log(word);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
console.log(me);
import { Invoice } from './classes/invoice.js';
const invOne = new Invoice('Mark', 'gas and oil', 153);
const invTwo = new Invoice('Sveta', 'cosmetics', 313);
let invoices = [];
invoices.push(invOne, invTwo);
console.log(invoices);
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
