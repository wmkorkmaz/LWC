import { LightningElement, track } from 'lwc';

export default class TrackOrnegi2 extends LightningElement {
    degerler = "";
    @track lstValues = [];

    onchangeHandler(event){

        this.degerler = event.target.value;


    }
    ekleHandler(){
        this.lstValues.push(this.degerler);

    }

}
