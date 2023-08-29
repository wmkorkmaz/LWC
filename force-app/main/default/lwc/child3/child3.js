import { LightningElement } from 'lwc';

export default class Child3 extends LightningElement {
    copyObject;

    eventObject = {
        isim: '',
        soyisim: ''
    }
    handleFirstName(event){
        this.eventObject.isim =event.detail.value;
    }
    handleLastName(event){
        this.eventObject.soyisim= event.detail.value;

    }
    handleClick3(){
        this.copyObject =Object.assign({},this.eventObject);

        const myEvent3 = new CustomEvent('click3',{detail:this.copyObject});

        this.dispatchEvent(myEvent3);

    }
}