import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    eventName1;
    eventName2;
    eventName3;
    handleButtonClick(){
        this.eventName1 = "Child butona tiklandi";

 }
 handleButtonClick2(event){
    this.eventName2=event.detail;

 }
  handleButtonClick3(event){
    this.eventName3=event.isim;

 }

}
