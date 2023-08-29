import { LightningElement, wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import { registerListener } from 'c/pubsub';



export default class Subscriber extends LightningElement {

    ismiGoster;
    @wire(CurrentPageReference) pageRef;
    
    connectedCallback() {
        registerListener(
            "pubslisher", this.showDetails, this

        )
    }
    showDetails(data){
        this.ismiGoster=data;
    }

}