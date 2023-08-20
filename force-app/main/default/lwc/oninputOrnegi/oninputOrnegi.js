import { LightningElement } from 'lwc';

export default class OninputOrnegi extends LightningElement {
    isim = "Veli";

    handleInput(event){
        console.log('Degisiklik var');
        this.isim = event.target.value;

    }
}