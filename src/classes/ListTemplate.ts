import { HasFormatter } from "../interfaces/HasFormatter.js";
export class ListTemplate {
    // when use 'private' or another access type, it automatically assigns this.container to argument that we pass in
    constructor(public container: HTMLUListElement){}
    // item - doc (Invoice or Payment object), heading - details.value (Invoice or Payment string from Select), pos we just use whatever we want
    render(item: HasFormatter, heading: string, pos: 'start' | 'end' ){
        const li = document.createElement('li');
        
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4); //<li><h4>Invoice</h4></li>

        const p = document.createElement('p');
        p.innerText = item.format(); //Mark (${this.client}) owes $135 (${this.amount}) for website work (${this.details})
        li.append(p);

        if(pos === 'start'){
            this.container.prepend(li)
        } else {
            this.container.append(li)
        }
    }
}