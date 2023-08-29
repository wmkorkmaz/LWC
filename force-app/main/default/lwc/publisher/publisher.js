import { LightningElement, wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';

export default class Publisher extends LightningElement {
    @wire(CurrentPageReference) pageRef;
   // pageRef, eventName, payload


    handleChange(event) {
        fireEvent(
            this.pageRef,"publicher", event.target.value

            
        )

    }

}