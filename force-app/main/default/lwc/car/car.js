import { LightningElement } from 'lwc';

export default class Car extends LightningElement {
    motorModeliDegeri;
    
    motor(event){
        this.motorModeliDegeri =event.target.value;


    }
}