import { LightningElement } from 'lwc';

export default class OnchangezB extends LightningElement {


vornameNachname;
handlerOnchange(event) {
    this.vornameNachname= event.target.valeu;

}


}