import { LightningElement,wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';


export default class WireOrnek extends LightningElement {
    filterWord = "";
    @wire(getAccounts,{filter:'filterWord'}) accounts;


    handleInput(event){
       this.filterWord = event.target.value;

    }
    
}