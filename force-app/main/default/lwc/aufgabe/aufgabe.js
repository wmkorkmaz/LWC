import { LightningElement } from 'lwc';

export default class Aufgabe extends LightningElement {

    fistName = ' '
    lastName = ' '
    handleInput(event){
        this.name =event.target.value;

    }
    handleFirstName(event){
        this.fistName =event.target.value;


    }
    handleLastName(event){
        this.lastName = event.target.value;

    }
    get upperCaseFullName() {
        const FullName =this.fistName+ ' '+ this.lastName;
        return FullName.toUpperCase();
    }
}