"use strict";
// classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " ows $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('Mark', 'gas and oil', 153);
var invTwo = new Invoice('Sveta', 'cosmetics', 313);
var invoices = [];
invoices.push(invOne, invTwo);
var form = document.querySelector('.new-item-form');
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
