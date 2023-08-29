import { LightningElement } from 'lwc';

export default class Child2 extends LightningElement {
    inputValue;

    handleChange2(event){
        this.inputValue = event.detail.value;

    }

    handleClick2(){
        const myEvent2= new CustomEvent('clicked2',{detail:this.inputValue});
        this.dispatchEvent(myEvent2);
    }
    
}