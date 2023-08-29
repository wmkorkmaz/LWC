import { LightningElement, track } from 'lwc';

export default class TrackOrnegi1 extends LightningElement {

   @track customer = {
        adi: "Ali",
        soyadi: "Can",
        yasi: 43
    }

    trackOrnek(event){

        this.customer.adi =event.target.value;
    }
}