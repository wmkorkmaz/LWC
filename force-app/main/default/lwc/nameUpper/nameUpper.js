import { LightningElement } from 'lwc';

export default class NameUpper extends LightningElement {
    fName = "john";
    lName= "conner";


    get fullUpper (){
        return this.fName.toUpperCase() + ' '+  this.lName.toUpperCase();

    }
}