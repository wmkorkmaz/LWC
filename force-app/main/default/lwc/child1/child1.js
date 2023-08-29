import { LightningElement } from 'lwc';

export default class Child1 extends LightningElement {
    handleClick(){
        const myEvent= new CustomEvent("cliciked");
        this.dispatchEvent(myEvent)
    }
}