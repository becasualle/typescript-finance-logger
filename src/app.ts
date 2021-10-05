// classes
class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c:string, d:string, a:number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format(){
        return `${this.client} ows $${this.amount} for ${this.details}`
    }
}

const marchInvoice = new Invoice('Mark', 'gas and oil', 153);
let invoices: Invoice[] = [];
// invoices.push('hello')
invoices.push(marchInvoice);
marchInvoice.client = 'sveta';

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

